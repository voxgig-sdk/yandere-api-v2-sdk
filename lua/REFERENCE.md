# YandereApiV2 Lua SDK Reference

Complete API reference for the YandereApiV2 Lua SDK.


## YandereApiV2SDK

### Constructor

```lua
local sdk = require("yandere-api-v2_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Post(data)`

Create a new `Post` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## PostEntity

```lua
local post = client:Post(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actual_preview_height` | `number` | No |  |
| `actual_preview_width` | `number` | No |  |
| `author` | `string` | No |  |
| `change` | `number` | No |  |
| `created_at` | `number` | No |  |
| `creator_id` | `number` | No |  |
| `file_size` | `number` | No |  |
| `file_url` | `string` | No |  |
| `flag_detail` | `table` | No |  |
| `frame` | `table` | No |  |
| `frames_pending` | `table` | No |  |
| `frames_pending_string` | `string` | No |  |
| `frames_string` | `string` | No |  |
| `has_child` | `boolean` | No |  |
| `height` | `number` | No |  |
| `id` | `number` | No |  |
| `is_held` | `boolean` | No |  |
| `is_shown_in_index` | `boolean` | No |  |
| `jpeg_file_size` | `number` | No |  |
| `jpeg_height` | `number` | No |  |
| `jpeg_url` | `string` | No |  |
| `jpeg_width` | `number` | No |  |
| `md5` | `string` | No |  |
| `parent_id` | `number` | No |  |
| `pool_id` | `table` | No |  |
| `preview_height` | `number` | No |  |
| `preview_url` | `string` | No |  |
| `preview_width` | `number` | No |  |
| `rating` | `string` | No |  |
| `sample_file_size` | `number` | No |  |
| `sample_height` | `number` | No |  |
| `sample_url` | `string` | No |  |
| `sample_width` | `number` | No |  |
| `score` | `number` | No |  |
| `source` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `string` | No |  |
| `vote` | `table` | No |  |
| `width` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Post():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

