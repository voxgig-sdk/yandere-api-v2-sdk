# YandereApiV2 Golang SDK



The Golang SDK for the YandereApiV2 API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Post(nil)` — each with the same small set of operations (`List`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/yandere-api-v2-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/yandere-api-v2-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/yandere-api-v2-sdk/go=../yandere-api-v2-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/yandere-api-v2-sdk/go"
)

func main() {
    client := sdk.New()

    // List post records — the value is the array of records itself.
    posts, err := client.Post(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range posts.([]any) {
        fmt.Println(item)
    }
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
posts, err := client.Post(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = posts
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
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
client := sdk.Test()

post, err := client.Post(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(post) // the returned mock data
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
YANDERE_API_V2_TEST_LIVE=TRUE
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
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    post, err := client.Post(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // post is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Post

| Field | Description |
| --- | --- |
| `"actual_preview_height"` | Actual height of the preview image |
| `"actual_preview_width"` | Actual width of the preview image |
| `"author"` | Username of the post creator |
| `"change"` | Change number/version |
| `"created_at"` | Unix timestamp of when the post was created |
| `"creator_id"` | User ID of the post creator |
| `"file_size"` | File size in bytes |
| `"file_url"` | URL to the full-size image |
| `"flag_detail"` | Flag details if the post is flagged |
| `"frames"` | Array of frames |
| `"frames_pending"` | Array of pending frames |
| `"frames_pending_string"` | Pending frames information |
| `"frames_string"` | Frames information |
| `"has_children"` | Whether the post has child posts |
| `"height"` | Original image height |
| `"id"` | Post ID |
| `"is_held"` | Whether the post is held |
| `"is_shown_in_index"` | Whether the post is shown in the index |
| `"jpeg_file_size"` | File size of the JPEG version in bytes |
| `"jpeg_height"` | Height of the JPEG version |
| `"jpeg_url"` | URL to the JPEG version |
| `"jpeg_width"` | Width of the JPEG version |
| `"md5"` | MD5 hash of the image file |
| `"parent_id"` | ID of the parent post |
| `"pool_ids"` | Array of pool IDs this post belongs to (included when include_pools=1) |
| `"preview_height"` | Height of the preview image |
| `"preview_url"` | URL to the preview/thumbnail image |
| `"preview_width"` | Width of the preview image |
| `"rating"` | Post rating (s=safe, q=questionable, e=explicit) |
| `"sample_file_size"` | File size of the sample image in bytes |
| `"sample_height"` | Height of the sample image |
| `"sample_url"` | URL to the sample-size image |
| `"sample_width"` | Width of the sample image |
| `"score"` | Post score |
| `"source"` | Source URL of the image |
| `"status"` | Post status |
| `"tags"` | Space-separated list of tags associated with the post |
| `"votes"` | Vote information (included when include_votes=1) |
| `"width"` | Original image width |

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
| `actual_preview_height` | `int` | Actual height of the preview image |
| `actual_preview_width` | `int` | Actual width of the preview image |
| `author` | `string` | Username of the post creator |
| `change` | `int` | Change number/version |
| `created_at` | `int` | Unix timestamp of when the post was created |
| `creator_id` | `int` | User ID of the post creator |
| `file_size` | `int` | File size in bytes |
| `file_url` | `string` | URL to the full-size image |
| `flag_detail` | `map[string]any` | Flag details if the post is flagged |
| `frames` | `[]any` | Array of frames |
| `frames_pending` | `[]any` | Array of pending frames |
| `frames_pending_string` | `string` | Pending frames information |
| `frames_string` | `string` | Frames information |
| `has_children` | `bool` | Whether the post has child posts |
| `height` | `int` | Original image height |
| `id` | `int` | Post ID |
| `is_held` | `bool` | Whether the post is held |
| `is_shown_in_index` | `bool` | Whether the post is shown in the index |
| `jpeg_file_size` | `int` | File size of the JPEG version in bytes |
| `jpeg_height` | `int` | Height of the JPEG version |
| `jpeg_url` | `string` | URL to the JPEG version |
| `jpeg_width` | `int` | Width of the JPEG version |
| `md5` | `string` | MD5 hash of the image file |
| `parent_id` | `int` | ID of the parent post |
| `pool_ids` | `[]any` | Array of pool IDs this post belongs to (included when include_pools=1) |
| `preview_height` | `int` | Height of the preview image |
| `preview_url` | `string` | URL to the preview/thumbnail image |
| `preview_width` | `int` | Width of the preview image |
| `rating` | `string` | Post rating (s=safe, q=questionable, e=explicit) |
| `sample_file_size` | `int` | File size of the sample image in bytes |
| `sample_height` | `int` | Height of the sample image |
| `sample_url` | `string` | URL to the sample-size image |
| `sample_width` | `int` | Width of the sample image |
| `score` | `int` | Post score |
| `source` | `string` | Source URL of the image |
| `status` | `string` | Post status |
| `tags` | `string` | Space-separated list of tags associated with the post |
| `votes` | `map[string]any` | Vote information (included when include_votes=1) |
| `width` | `int` | Original image width |

#### Example: List

```go
posts, err := client.Post(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(posts) // the array of records
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

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
post := client.Post(nil)
post.List(nil, nil)

// post.Data() now returns the post data from the last list
// post.Match() returns the last match criteria
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
