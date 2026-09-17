# YandereApiV2 Python SDK



The Python SDK for the YandereApiV2 API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Post()` — each
carrying a small, uniform set of operations (`list`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/yandere-api-v2-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
from yandereapiv2_sdk import YandereApiV2SDK

client = YandereApiV2SDK()
```

### 2. List post records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    posts = client.Post().list({"api_version": 1})
    for post in posts:
        print(post)
except Exception as err:
    print(f"list failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    posts = client.Post().list()
    print(posts)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = YandereApiV2SDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
post = client.Post().list()
# post contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = YandereApiV2SDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### YandereApiV2SDK

```python
from yandereapiv2_sdk import YandereApiV2SDK

client = YandereApiV2SDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = YandereApiV2SDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### YandereApiV2SDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Post` | `(data) -> PostEntity` | Create a Post entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `post = client.Post()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actual_preview_height` | `int` | Actual height of the preview image |
| `actual_preview_width` | `int` | Actual width of the preview image |
| `author` | `str` | Username of the post creator |
| `change` | `int` | Change number/version |
| `created_at` | `int` | Unix timestamp of when the post was created |
| `creator_id` | `int` | User ID of the post creator |
| `file_size` | `int` | File size in bytes |
| `file_url` | `str` | URL to the full-size image |
| `flag_detail` | `dict` | Flag details if the post is flagged |
| `frames` | `list` | Array of frames |
| `frames_pending` | `list` | Array of pending frames |
| `frames_pending_string` | `str` | Pending frames information |
| `frames_string` | `str` | Frames information |
| `has_children` | `bool` | Whether the post has child posts |
| `height` | `int` | Original image height |
| `id` | `int` | Post ID |
| `is_held` | `bool` | Whether the post is held |
| `is_shown_in_index` | `bool` | Whether the post is shown in the index |
| `jpeg_file_size` | `int` | File size of the JPEG version in bytes |
| `jpeg_height` | `int` | Height of the JPEG version |
| `jpeg_url` | `str` | URL to the JPEG version |
| `jpeg_width` | `int` | Width of the JPEG version |
| `md5` | `str` | MD5 hash of the image file |
| `parent_id` | `int` | ID of the parent post |
| `pool_ids` | `list` | Array of pool IDs this post belongs to (included when include_pools=1) |
| `preview_height` | `int` | Height of the preview image |
| `preview_url` | `str` | URL to the preview/thumbnail image |
| `preview_width` | `int` | Width of the preview image |
| `rating` | `str` | Post rating (s=safe, q=questionable, e=explicit) |
| `sample_file_size` | `int` | File size of the sample image in bytes |
| `sample_height` | `int` | Height of the sample image |
| `sample_url` | `str` | URL to the sample-size image |
| `sample_width` | `int` | Width of the sample image |
| `score` | `int` | Post score |
| `source` | `str` | Source URL of the image |
| `status` | `str` | Post status |
| `tags` | `str` | Space-separated list of tags associated with the post |
| `votes` | `dict` | Vote information (included when include_votes=1) |
| `width` | `int` | Original image width |

#### Example: List

```python
posts = client.Post().list({"api_version": 1})
```

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── yandereapiv2_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`yandereapiv2_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
post = client.Post()
post.list()

# post.data_get() now returns the post data from the last list
# post.match_get() returns the last match criteria
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
