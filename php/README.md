# YandereApiV2 PHP SDK



The PHP SDK for the YandereApiV2 API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Post()` — with named operations (`list`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/yandere-api-v2-sdk/releases](https://github.com/voxgig-sdk/yandere-api-v2-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'yandereapiv2_sdk.php';

$client = new YandereApiV2SDK();
```

### 2. List post records

```php
try {
    // list() returns an array of Post records — iterate directly.
    $posts = $client->Post()->list();
    foreach ($posts as $item) {
        echo $item["id"] . " " . $item["actual_preview_height"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $posts = $client->Post()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = YandereApiV2SDK::test();

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$post = $client->Post()->list();
print_r($post);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new YandereApiV2SDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
YANDERE_API_V2_TEST_LIVE=TRUE
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### YandereApiV2SDK

```php
require_once 'yandereapiv2_sdk.php';
$client = new YandereApiV2SDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = YandereApiV2SDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### YandereApiV2SDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Post` | `($data): PostEntity` | Create a Post entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Post

| Field | Description |
| --- | --- |
| `actual_preview_height` | Actual height of the preview image |
| `actual_preview_width` | Actual width of the preview image |
| `author` | Username of the post creator |
| `change` | Change number/version |
| `created_at` | Unix timestamp of when the post was created |
| `creator_id` | User ID of the post creator |
| `file_size` | File size in bytes |
| `file_url` | URL to the full-size image |
| `flag_detail` | Flag details if the post is flagged |
| `frames` | Array of frames |
| `frames_pending` | Array of pending frames |
| `frames_pending_string` | Pending frames information |
| `frames_string` | Frames information |
| `has_children` | Whether the post has child posts |
| `height` | Original image height |
| `id` | Post ID |
| `is_held` | Whether the post is held |
| `is_shown_in_index` | Whether the post is shown in the index |
| `jpeg_file_size` | File size of the JPEG version in bytes |
| `jpeg_height` | Height of the JPEG version |
| `jpeg_url` | URL to the JPEG version |
| `jpeg_width` | Width of the JPEG version |
| `md5` | MD5 hash of the image file |
| `parent_id` | ID of the parent post |
| `pool_ids` | Array of pool IDs this post belongs to (included when include_pools=1) |
| `preview_height` | Height of the preview image |
| `preview_url` | URL to the preview/thumbnail image |
| `preview_width` | Width of the preview image |
| `rating` | Post rating (s=safe, q=questionable, e=explicit) |
| `sample_file_size` | File size of the sample image in bytes |
| `sample_height` | Height of the sample image |
| `sample_url` | URL to the sample-size image |
| `sample_width` | Width of the sample image |
| `score` | Post score |
| `source` | Source URL of the image |
| `status` | Post status |
| `tags` | Space-separated list of tags associated with the post |
| `votes` | Vote information (included when include_votes=1) |
| `width` | Original image width |

Operations: List.

API path: `/post.json`



## Entities


### Post

Create an instance: `$post = $client->Post();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actual_preview_height` | `int` | Actual height of the preview image |
| `actual_preview_width` | `int` | Actual width of the preview image |
| `author` | `string` | Username of the post creator |
| `change` | `int` | Change number/version |
| `created_at` | `int` | Unix timestamp of when the post was created |
| `creator_id` | `int` | User ID of the post creator |
| `file_size` | `int` | File size in bytes |
| `file_url` | `string` | URL to the full-size image |
| `flag_detail` | `array` | Flag details if the post is flagged |
| `frames` | `array` | Array of frames |
| `frames_pending` | `array` | Array of pending frames |
| `frames_pending_string` | `string` | Pending frames information |
| `frames_string` | `string` | Frames information |
| `has_children` | `bool` | Whether the post has child posts |
| `height` | `int` | Original image height |
| `id` | `int` | Post ID |
| `is_held` | `bool` | Whether the post is held |
| `is_shown_in_index` | `bool` | Whether the post is shown in the index |
| `jpeg_file_size` | `int` | File size of the JPEG version in bytes |
| `jpeg_height` | `int` | Height of the JPEG version |
| `jpeg_url` | `string` | URL to the JPEG version |
| `jpeg_width` | `int` | Width of the JPEG version |
| `md5` | `string` | MD5 hash of the image file |
| `parent_id` | `int` | ID of the parent post |
| `pool_ids` | `array` | Array of pool IDs this post belongs to (included when include_pools=1) |
| `preview_height` | `int` | Height of the preview image |
| `preview_url` | `string` | URL to the preview/thumbnail image |
| `preview_width` | `int` | Width of the preview image |
| `rating` | `string` | Post rating (s=safe, q=questionable, e=explicit) |
| `sample_file_size` | `int` | File size of the sample image in bytes |
| `sample_height` | `int` | Height of the sample image |
| `sample_url` | `string` | URL to the sample-size image |
| `sample_width` | `int` | Width of the sample image |
| `score` | `int` | Post score |
| `source` | `string` | Source URL of the image |
| `status` | `string` | Post status |
| `tags` | `string` | Space-separated list of tags associated with the post |
| `votes` | `array` | Vote information (included when include_votes=1) |
| `width` | `int` | Original image width |

#### Example: List

```php
// list() returns an array of Post records (throws on error).
$posts = $client->Post()->list();
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── yandereapiv2_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`yandereapiv2_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$post = $client->Post();
$post->list();

// $post->data_get() now returns the post data from the last list
// $post->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
