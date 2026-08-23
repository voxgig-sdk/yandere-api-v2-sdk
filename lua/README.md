# YandereApiV2 Lua SDK



The Lua SDK for the YandereApiV2 API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Post()` — each with the same small set of operations (`list`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/yandere-api-v2-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("yandere-api-v2_sdk")

local client = sdk.new()
```

### 2. List post records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local posts, err = client:Post():list()
if err then error(err) end

for _, item in ipairs(posts) do
  print(item["id"], item["author"])
end
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local posts, err = client:Post():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Post():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
YANDERE_API_V2_TEST_LIVE=TRUE
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### YandereApiV2SDK

```lua
local sdk = require("yandere-api-v2_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### YandereApiV2SDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Post` | `(data) -> PostEntity` | Create a Post entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local post, err = client:Post():list()
    if err then error(err) end
    -- post is the record list

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Create an instance: `local post = client:Post(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actual_preview_height` | `number` | Actual height of the preview image |
| `actual_preview_width` | `number` | Actual width of the preview image |
| `author` | `string` | Username of the post creator |
| `change` | `number` | Change number/version |
| `created_at` | `number` | Unix timestamp of when the post was created |
| `creator_id` | `number` | User ID of the post creator |
| `file_size` | `number` | File size in bytes |
| `file_url` | `string` | URL to the full-size image |
| `flag_detail` | `table` | Flag details if the post is flagged |
| `frames` | `table` | Array of frames |
| `frames_pending` | `table` | Array of pending frames |
| `frames_pending_string` | `string` | Pending frames information |
| `frames_string` | `string` | Frames information |
| `has_children` | `boolean` | Whether the post has child posts |
| `height` | `number` | Original image height |
| `id` | `number` | Post ID |
| `is_held` | `boolean` | Whether the post is held |
| `is_shown_in_index` | `boolean` | Whether the post is shown in the index |
| `jpeg_file_size` | `number` | File size of the JPEG version in bytes |
| `jpeg_height` | `number` | Height of the JPEG version |
| `jpeg_url` | `string` | URL to the JPEG version |
| `jpeg_width` | `number` | Width of the JPEG version |
| `md5` | `string` | MD5 hash of the image file |
| `parent_id` | `number` | ID of the parent post |
| `pool_ids` | `table` | Array of pool IDs this post belongs to (included when include_pools=1) |
| `preview_height` | `number` | Height of the preview image |
| `preview_url` | `string` | URL to the preview/thumbnail image |
| `preview_width` | `number` | Width of the preview image |
| `rating` | `string` | Post rating (s=safe, q=questionable, e=explicit) |
| `sample_file_size` | `number` | File size of the sample image in bytes |
| `sample_height` | `number` | Height of the sample image |
| `sample_url` | `string` | URL to the sample-size image |
| `sample_width` | `number` | Width of the sample image |
| `score` | `number` | Post score |
| `source` | `string` | Source URL of the image |
| `status` | `string` | Post status |
| `tags` | `string` | Space-separated list of tags associated with the post |
| `votes` | `table` | Vote information (included when include_votes=1) |
| `width` | `number` | Original image width |

#### Example: List

```lua
local posts, err = client:Post():list()
```


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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── yandere-api-v2_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`yandere-api-v2_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local post = client:Post()
post:list()

-- post:data_get() now returns the post data from the last list
-- post:match_get() returns the last match criteria
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
