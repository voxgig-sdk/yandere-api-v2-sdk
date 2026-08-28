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
| `actual_preview_height` | `number` | No | Actual height of the preview image |
| `actual_preview_width` | `number` | No | Actual width of the preview image |
| `author` | `string` | No | Username of the post creator |
| `change` | `number` | No | Change number/version |
| `created_at` | `number` | No | Unix timestamp of when the post was created |
| `creator_id` | `number` | No | User ID of the post creator |
| `file_size` | `number` | No | File size in bytes |
| `file_url` | `string` | No | URL to the full-size image |
| `flag_detail` | `table` | No | Flag details if the post is flagged |
| `frames` | `table` | No | Array of frames |
| `frames_pending` | `table` | No | Array of pending frames |
| `frames_pending_string` | `string` | No | Pending frames information |
| `frames_string` | `string` | No | Frames information |
| `has_children` | `boolean` | No | Whether the post has child posts |
| `height` | `number` | No | Original image height |
| `id` | `number` | No | Post ID |
| `is_held` | `boolean` | No | Whether the post is held |
| `is_shown_in_index` | `boolean` | No | Whether the post is shown in the index |
| `jpeg_file_size` | `number` | No | File size of the JPEG version in bytes |
| `jpeg_height` | `number` | No | Height of the JPEG version |
| `jpeg_url` | `string` | No | URL to the JPEG version |
| `jpeg_width` | `number` | No | Width of the JPEG version |
| `md5` | `string` | No | MD5 hash of the image file |
| `parent_id` | `number` | No | ID of the parent post |
| `pool_ids` | `table` | No | Array of pool IDs this post belongs to (included when include_pools=1) |
| `preview_height` | `number` | No | Height of the preview image |
| `preview_url` | `string` | No | URL to the preview/thumbnail image |
| `preview_width` | `number` | No | Width of the preview image |
| `rating` | `string` | No | Post rating (s=safe, q=questionable, e=explicit) |
| `sample_file_size` | `number` | No | File size of the sample image in bytes |
| `sample_height` | `number` | No | Height of the sample image |
| `sample_url` | `string` | No | URL to the sample-size image |
| `sample_width` | `number` | No | Width of the sample image |
| `score` | `number` | No | Post score |
| `source` | `string` | No | Source URL of the image |
| `status` | `string` | No | Post status |
| `tags` | `string` | No | Space-separated list of tags associated with the post |
| `votes` | `table` | No | Vote information (included when include_votes=1) |
| `width` | `number` | No | Original image width |

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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

