# YandereApiV2 Ruby SDK Reference

Complete API reference for the YandereApiV2 Ruby SDK.


## YandereApiV2SDK

### Constructor

```ruby
require_relative 'yandere-api-v2_sdk'

client = YandereApiV2SDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `YandereApiV2SDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = YandereApiV2SDK.test
```


### Instance Methods

#### `Post(data = nil)`

Create a new `Post` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## PostEntity

```ruby
post = client.Post
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

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.Post.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = YandereApiV2SDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

