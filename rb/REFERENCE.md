# YandereApiV2 Ruby SDK Reference

Complete API reference for the YandereApiV2 Ruby SDK.


## YandereApiV2SDK

### Constructor

```ruby
require_relative 'YandereApiV2_sdk'

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
| `actual_preview_height` | `Integer` | No |  |
| `actual_preview_width` | `Integer` | No |  |
| `author` | `String` | No |  |
| `change` | `Integer` | No |  |
| `created_at` | `Integer` | No |  |
| `creator_id` | `Integer` | No |  |
| `file_size` | `Integer` | No |  |
| `file_url` | `String` | No |  |
| `flag_detail` | `Hash` | No |  |
| `frame` | `Array` | No |  |
| `frames_pending` | `Array` | No |  |
| `frames_pending_string` | `String` | No |  |
| `frames_string` | `String` | No |  |
| `has_child` | `Boolean` | No |  |
| `height` | `Integer` | No |  |
| `id` | `Integer` | No |  |
| `is_held` | `Boolean` | No |  |
| `is_shown_in_index` | `Boolean` | No |  |
| `jpeg_file_size` | `Integer` | No |  |
| `jpeg_height` | `Integer` | No |  |
| `jpeg_url` | `String` | No |  |
| `jpeg_width` | `Integer` | No |  |
| `md5` | `String` | No |  |
| `parent_id` | `Integer` | No |  |
| `pool_id` | `Array` | No |  |
| `preview_height` | `Integer` | No |  |
| `preview_url` | `String` | No |  |
| `preview_width` | `Integer` | No |  |
| `rating` | `String` | No |  |
| `sample_file_size` | `Integer` | No |  |
| `sample_height` | `Integer` | No |  |
| `sample_url` | `String` | No |  |
| `sample_width` | `Integer` | No |  |
| `score` | `Integer` | No |  |
| `source` | `String` | No |  |
| `status` | `String` | No |  |
| `tag` | `String` | No |  |
| `vote` | `Hash` | No |  |
| `width` | `Integer` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Post.list
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

