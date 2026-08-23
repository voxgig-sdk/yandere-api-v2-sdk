# YandereApiV2 PHP SDK Reference

Complete API reference for the YandereApiV2 PHP SDK.


## YandereApiV2SDK

### Constructor

```php
require_once __DIR__ . '/yandereapiv2_sdk.php';

$client = new YandereApiV2SDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `YandereApiV2SDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = YandereApiV2SDK::test();
```


### Instance Methods

#### `Post($data = null)`

Create a new `PostEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): YandereApiV2Utility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## PostEntity

```php
$post = $client->Post();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actual_preview_height` | `int` | No | Actual height of the preview image |
| `actual_preview_width` | `int` | No | Actual width of the preview image |
| `author` | `string` | No | Username of the post creator |
| `change` | `int` | No | Change number/version |
| `created_at` | `int` | No | Unix timestamp of when the post was created |
| `creator_id` | `int` | No | User ID of the post creator |
| `file_size` | `int` | No | File size in bytes |
| `file_url` | `string` | No | URL to the full-size image |
| `flag_detail` | `array` | No | Flag details if the post is flagged |
| `frames` | `array` | No | Array of frames |
| `frames_pending` | `array` | No | Array of pending frames |
| `frames_pending_string` | `string` | No | Pending frames information |
| `frames_string` | `string` | No | Frames information |
| `has_children` | `bool` | No | Whether the post has child posts |
| `height` | `int` | No | Original image height |
| `id` | `int` | No | Post ID |
| `is_held` | `bool` | No | Whether the post is held |
| `is_shown_in_index` | `bool` | No | Whether the post is shown in the index |
| `jpeg_file_size` | `int` | No | File size of the JPEG version in bytes |
| `jpeg_height` | `int` | No | Height of the JPEG version |
| `jpeg_url` | `string` | No | URL to the JPEG version |
| `jpeg_width` | `int` | No | Width of the JPEG version |
| `md5` | `string` | No | MD5 hash of the image file |
| `parent_id` | `int` | No | ID of the parent post |
| `pool_ids` | `array` | No | Array of pool IDs this post belongs to (included when include_pools=1) |
| `preview_height` | `int` | No | Height of the preview image |
| `preview_url` | `string` | No | URL to the preview/thumbnail image |
| `preview_width` | `int` | No | Width of the preview image |
| `rating` | `string` | No | Post rating (s=safe, q=questionable, e=explicit) |
| `sample_file_size` | `int` | No | File size of the sample image in bytes |
| `sample_height` | `int` | No | Height of the sample image |
| `sample_url` | `string` | No | URL to the sample-size image |
| `sample_width` | `int` | No | Width of the sample image |
| `score` | `int` | No | Post score |
| `source` | `string` | No | Source URL of the image |
| `status` | `string` | No | Post status |
| `tags` | `string` | No | Space-separated list of tags associated with the post |
| `votes` | `array` | No | Vote information (included when include_votes=1) |
| `width` | `int` | No | Original image width |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Post()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostEntity`

Create a new `PostEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new YandereApiV2SDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

