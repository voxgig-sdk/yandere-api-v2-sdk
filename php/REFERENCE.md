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
| `actual_preview_height` | `int` | No |  |
| `actual_preview_width` | `int` | No |  |
| `author` | `string` | No |  |
| `change` | `int` | No |  |
| `created_at` | `int` | No |  |
| `creator_id` | `int` | No |  |
| `file_size` | `int` | No |  |
| `file_url` | `string` | No |  |
| `flag_detail` | `array` | No |  |
| `frame` | `array` | No |  |
| `frames_pending` | `array` | No |  |
| `frames_pending_string` | `string` | No |  |
| `frames_string` | `string` | No |  |
| `has_child` | `bool` | No |  |
| `height` | `int` | No |  |
| `id` | `int` | No |  |
| `is_held` | `bool` | No |  |
| `is_shown_in_index` | `bool` | No |  |
| `jpeg_file_size` | `int` | No |  |
| `jpeg_height` | `int` | No |  |
| `jpeg_url` | `string` | No |  |
| `jpeg_width` | `int` | No |  |
| `md5` | `string` | No |  |
| `parent_id` | `int` | No |  |
| `pool_id` | `array` | No |  |
| `preview_height` | `int` | No |  |
| `preview_url` | `string` | No |  |
| `preview_width` | `int` | No |  |
| `rating` | `string` | No |  |
| `sample_file_size` | `int` | No |  |
| `sample_height` | `int` | No |  |
| `sample_url` | `string` | No |  |
| `sample_width` | `int` | No |  |
| `score` | `int` | No |  |
| `source` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `string` | No |  |
| `vote` | `array` | No |  |
| `width` | `int` | No |  |

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

