# YandereApiV2 PHP SDK



The PHP SDK for the YandereApiV2 API — an entity-oriented client using PHP conventions.

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
        echo $item["id"] . " " . $item["name"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
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
    echo "Error: " . $result["err"]->getMessage();
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

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = YandereApiV2SDK::test([
    "entity" => ["post" => ["test01" => ["id" => "test01"]]],
]);

// load() returns the bare mock record (throws on error).
$post = $client->Post()->load(["id" => "test01"]);
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
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `($reqmatch, $ctrl): array` | List entities matching the criteria. |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the bare result data (an `array` for single-entity
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
| `actual_preview_height` |  |
| `actual_preview_width` |  |
| `author` |  |
| `change` |  |
| `created_at` |  |
| `creator_id` |  |
| `file_size` |  |
| `file_url` |  |
| `flag_detail` |  |
| `frame` |  |
| `frames_pending` |  |
| `frames_pending_string` |  |
| `frames_string` |  |
| `has_child` |  |
| `height` |  |
| `id` |  |
| `is_held` |  |
| `is_shown_in_index` |  |
| `jpeg_file_size` |  |
| `jpeg_height` |  |
| `jpeg_url` |  |
| `jpeg_width` |  |
| `md5` |  |
| `parent_id` |  |
| `pool_id` |  |
| `preview_height` |  |
| `preview_url` |  |
| `preview_width` |  |
| `rating` |  |
| `sample_file_size` |  |
| `sample_height` |  |
| `sample_url` |  |
| `sample_width` |  |
| `score` |  |
| `source` |  |
| `status` |  |
| `tag` |  |
| `vote` |  |
| `width` |  |

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
| `actual_preview_height` | ``$INTEGER`` |  |
| `actual_preview_width` | ``$INTEGER`` |  |
| `author` | ``$STRING`` |  |
| `change` | ``$INTEGER`` |  |
| `created_at` | ``$INTEGER`` |  |
| `creator_id` | ``$INTEGER`` |  |
| `file_size` | ``$INTEGER`` |  |
| `file_url` | ``$STRING`` |  |
| `flag_detail` | ``$OBJECT`` |  |
| `frame` | ``$ARRAY`` |  |
| `frames_pending` | ``$ARRAY`` |  |
| `frames_pending_string` | ``$STRING`` |  |
| `frames_string` | ``$STRING`` |  |
| `has_child` | ``$BOOLEAN`` |  |
| `height` | ``$INTEGER`` |  |
| `id` | ``$INTEGER`` |  |
| `is_held` | ``$BOOLEAN`` |  |
| `is_shown_in_index` | ``$BOOLEAN`` |  |
| `jpeg_file_size` | ``$INTEGER`` |  |
| `jpeg_height` | ``$INTEGER`` |  |
| `jpeg_url` | ``$STRING`` |  |
| `jpeg_width` | ``$INTEGER`` |  |
| `md5` | ``$STRING`` |  |
| `parent_id` | ``$INTEGER`` |  |
| `pool_id` | ``$ARRAY`` |  |
| `preview_height` | ``$INTEGER`` |  |
| `preview_url` | ``$STRING`` |  |
| `preview_width` | ``$INTEGER`` |  |
| `rating` | ``$STRING`` |  |
| `sample_file_size` | ``$INTEGER`` |  |
| `sample_height` | ``$INTEGER`` |  |
| `sample_url` | ``$STRING`` |  |
| `sample_width` | ``$INTEGER`` |  |
| `score` | ``$INTEGER`` |  |
| `source` | ``$STRING`` |  |
| `status` | ``$STRING`` |  |
| `tag` | ``$STRING`` |  |
| `vote` | ``$OBJECT`` |  |
| `width` | ``$INTEGER`` |  |

#### Example: List

```php
// list() returns an array of Post records (throws on error).
$posts = $client->Post()->list();
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

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

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller as the second element in the return array.

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

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$post = $client->Post();
$post->load(["id" => "example_id"]);

// $post->dataGet() now returns the loaded post data
// $post->matchGet() returns the last match criteria
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
