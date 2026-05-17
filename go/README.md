# YandereApiV2 Golang SDK

The Golang SDK for the YandereApiV2 API. Provides an entity-oriented interface using standard Go conventions — no generics required, data flows as `map[string]any`.


## Install
```bash
go get github.com/voxgig-sdk/yandere-api-v2-sdk/go
```

If the module is not yet published to a registry, use a `replace` directive
in your `go.mod` to point to a local checkout:

```bash
go mod edit -replace github.com/voxgig-sdk/yandere-api-v2-sdk/go=../path/to/github.com/voxgig-sdk/yandere-api-v2-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```go
package main

import (
    "fmt"
    "os"

    sdk "github.com/voxgig-sdk/yandere-api-v2-sdk/go"
    "github.com/voxgig-sdk/yandere-api-v2-sdk/go/core"
)

func main() {
    client := sdk.NewYandereApiV2SDK(map[string]any{
        "apikey": os.Getenv("YANDERE-API-V2_APIKEY"),
    })
```

### 2. List posts

```go
    result, err := client.Post(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }

    rm := core.ToMapAny(result)
    if rm["ok"] == true {
        for _, item := range rm["data"].([]any) {
            p := core.ToMapAny(item)
            fmt.Println(p["id"], p["name"])
        }
    }
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.TestSDK(nil, nil)

result, err := client.Planet(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
// result contains mock response data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewYandereApiV2SDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
YANDERE-API-V2_TEST_LIVE=TRUE
YANDERE-API-V2_APIKEY=<your-key>
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewYandereApiV2SDK

```go
func NewYandereApiV2SDK(options map[string]any) *YandereApiV2SDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *YandereApiV2SDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### YandereApiV2SDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Post` | `(data map[string]any) YandereApiV2Entity` | Create a Post entity instance. |

### Entity interface (YandereApiV2Entity)

All entities implement the `YandereApiV2Entity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(any, error)`. The `any` value is a
`map[string]any` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `"ok"` | `bool` | `true` if the HTTP status is 2xx. |
| `"status"` | `int` | HTTP status code. |
| `"headers"` | `map[string]any` | Response headers. |
| `"data"` | `any` | Parsed JSON response body. |

On error, `"ok"` is `false` and `"err"` contains the error value.

### Entities

#### Post

| Field | Description |
| --- | --- |
| `"actual_preview_height"` |  |
| `"actual_preview_width"` |  |
| `"author"` |  |
| `"change"` |  |
| `"created_at"` |  |
| `"creator_id"` |  |
| `"file_size"` |  |
| `"file_url"` |  |
| `"flag_detail"` |  |
| `"frame"` |  |
| `"frames_pending"` |  |
| `"frames_pending_string"` |  |
| `"frames_string"` |  |
| `"has_child"` |  |
| `"height"` |  |
| `"id"` |  |
| `"is_held"` |  |
| `"is_shown_in_index"` |  |
| `"jpeg_file_size"` |  |
| `"jpeg_height"` |  |
| `"jpeg_url"` |  |
| `"jpeg_width"` |  |
| `"md5"` |  |
| `"parent_id"` |  |
| `"pool_id"` |  |
| `"preview_height"` |  |
| `"preview_url"` |  |
| `"preview_width"` |  |
| `"rating"` |  |
| `"sample_file_size"` |  |
| `"sample_height"` |  |
| `"sample_url"` |  |
| `"sample_width"` |  |
| `"score"` |  |
| `"source"` |  |
| `"status"` |  |
| `"tag"` |  |
| `"vote"` |  |
| `"width"` |  |

Operations: List.

API path: `/post.json`



## Entities


### Post

Create an instance: `post := client.Post(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
results, err := client.Post(nil).List(nil, nil)
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
error is returned to the caller. An unexpected panic triggers the
`PreUnexpected` hook.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/yandere-api-v2-sdk/go/
├── yandere-api-v2.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/yandere-api-v2-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
moon := client.Moon(nil)
moon.Load(map[string]any{"planet_id": "earth", "id": "luna"}, nil)

// moon.Data() now returns the loaded moon data
// moon.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
