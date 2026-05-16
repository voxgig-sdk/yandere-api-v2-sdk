# YandereApiV2 PHP SDK Reference

Complete API reference for the YandereApiV2 PHP SDK.


## YandereApiV2SDK

### Constructor

```php
require_once __DIR__ . '/yandere-api-v2_sdk.php';

$client = new YandereApiV2SDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
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

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

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

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## PostEntity

```php
$post = $client->Post();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actual_preview_height` | ``$INTEGER`` | No |  |
| `actual_preview_width` | ``$INTEGER`` | No |  |
| `author` | ``$STRING`` | No |  |
| `change` | ``$INTEGER`` | No |  |
| `created_at` | ``$INTEGER`` | No |  |
| `creator_id` | ``$INTEGER`` | No |  |
| `file_size` | ``$INTEGER`` | No |  |
| `file_url` | ``$STRING`` | No |  |
| `flag_detail` | ``$OBJECT`` | No |  |
| `frame` | ``$ARRAY`` | No |  |
| `frames_pending` | ``$ARRAY`` | No |  |
| `frames_pending_string` | ``$STRING`` | No |  |
| `frames_string` | ``$STRING`` | No |  |
| `has_child` | ``$BOOLEAN`` | No |  |
| `height` | ``$INTEGER`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `is_held` | ``$BOOLEAN`` | No |  |
| `is_shown_in_index` | ``$BOOLEAN`` | No |  |
| `jpeg_file_size` | ``$INTEGER`` | No |  |
| `jpeg_height` | ``$INTEGER`` | No |  |
| `jpeg_url` | ``$STRING`` | No |  |
| `jpeg_width` | ``$INTEGER`` | No |  |
| `md5` | ``$STRING`` | No |  |
| `parent_id` | ``$INTEGER`` | No |  |
| `pool_id` | ``$ARRAY`` | No |  |
| `preview_height` | ``$INTEGER`` | No |  |
| `preview_url` | ``$STRING`` | No |  |
| `preview_width` | ``$INTEGER`` | No |  |
| `rating` | ``$STRING`` | No |  |
| `sample_file_size` | ``$INTEGER`` | No |  |
| `sample_height` | ``$INTEGER`` | No |  |
| `sample_url` | ``$STRING`` | No |  |
| `sample_width` | ``$INTEGER`` | No |  |
| `score` | ``$INTEGER`` | No |  |
| `source` | ``$STRING`` | No |  |
| `status` | ``$STRING`` | No |  |
| `tag` | ``$STRING`` | No |  |
| `vote` | ``$OBJECT`` | No |  |
| `width` | ``$INTEGER`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Post()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): PostEntity`

Create a new `PostEntity` instance with the same client and
options.

#### `getName(): string`

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

