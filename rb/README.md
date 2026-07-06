# YandereApiV2 Ruby SDK



The Ruby SDK for the YandereApiV2 API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Post` — with named operations (`list`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/yandere-api-v2-sdk/releases](https://github.com/voxgig-sdk/yandere-api-v2-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "YandereApiV2_sdk"

client = YandereApiV2SDK.new
```

### 2. List post records

```ruby
begin
  # list returns an Array of Post records — iterate directly.
  posts = client.Post.list
  posts.each do |item|
    puts "#{item["id"]} #{item["actual_preview_height"]}"
  end
rescue => err
  warn "list failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  posts = client.Post.list()
rescue => err
  warn "list failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = YandereApiV2SDK.test

# Entity ops return the bare mock record (raises on error).
post = client.Post.list()
puts post
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = YandereApiV2SDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### YandereApiV2SDK

```ruby
require_relative "YandereApiV2_sdk"
client = YandereApiV2SDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = YandereApiV2SDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### YandereApiV2SDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `Post` | `(data) -> PostEntity` | Create a Post entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `YandereApiV2Error` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

Create an instance: `post = client.Post`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actual_preview_height` | `Integer` |  |
| `actual_preview_width` | `Integer` |  |
| `author` | `String` |  |
| `change` | `Integer` |  |
| `created_at` | `Integer` |  |
| `creator_id` | `Integer` |  |
| `file_size` | `Integer` |  |
| `file_url` | `String` |  |
| `flag_detail` | `Hash` |  |
| `frame` | `Array` |  |
| `frames_pending` | `Array` |  |
| `frames_pending_string` | `String` |  |
| `frames_string` | `String` |  |
| `has_child` | `Boolean` |  |
| `height` | `Integer` |  |
| `id` | `Integer` |  |
| `is_held` | `Boolean` |  |
| `is_shown_in_index` | `Boolean` |  |
| `jpeg_file_size` | `Integer` |  |
| `jpeg_height` | `Integer` |  |
| `jpeg_url` | `String` |  |
| `jpeg_width` | `Integer` |  |
| `md5` | `String` |  |
| `parent_id` | `Integer` |  |
| `pool_id` | `Array` |  |
| `preview_height` | `Integer` |  |
| `preview_url` | `String` |  |
| `preview_width` | `Integer` |  |
| `rating` | `String` |  |
| `sample_file_size` | `Integer` |  |
| `sample_height` | `Integer` |  |
| `sample_url` | `String` |  |
| `sample_width` | `Integer` |  |
| `score` | `Integer` |  |
| `source` | `String` |  |
| `status` | `String` |  |
| `tag` | `String` |  |
| `vote` | `Hash` |  |
| `width` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of Post records (raises on error).
posts = client.Post.list
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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── YandereApiV2_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`YandereApiV2_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```ruby
post = client.Post
post.list()

# post.data_get now returns the post data from the last list
# post.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
