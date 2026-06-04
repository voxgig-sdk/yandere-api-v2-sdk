# YandereApiV2 SDK

Browse Yande.re booru posts (anime/game artwork) as JSON with tags, votes, and pool data

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Yande.re API v2

[Yande.re](https://yande.re) is a long-running image board (a [Moebooru](https://github.com/moebooru/moebooru) instance, Danbooru-compatible) that catalogues high-quality anime and game artwork with a tag-based metadata system. The `api_version=2` flag selects the newer JSON shape returned by the Moebooru post endpoint.

What you get from the API:

- A list of posts via `GET https://yande.re/post.json?api_version=2`, each with image URLs, dimensions, MD5, tags, rating, score, and source.
- Tag-search support through the standard `tags` query parameter, plus `limit` and `page` for pagination.
- Version-2 extras such as tag-type classification, vote data, and pool membership embedded in the post objects.

Operational notes:

- The endpoint is publicly reachable without authentication for read access; write operations on the wider Moebooru API require a `login` and a salted `password_hash`.
- CORS is not enabled, so browser-side calls need a proxy.
- No published rate limits, but be polite — identify your client and avoid hammering the server.

## Try it

**TypeScript**
```bash
npm install yandere-api-v2
```

**Python**
```bash
pip install yandere-api-v2-sdk
```

**PHP**
```bash
composer require voxgig/yandere-api-v2-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/yandere-api-v2-sdk/go
```

**Ruby**
```bash
gem install yandere-api-v2-sdk
```

**Lua**
```bash
luarocks install yandere-api-v2-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { YandereApiV2SDK } from 'yandere-api-v2'

const client = new YandereApiV2SDK({})

// List all posts
const posts = await client.Post().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o yandere-api-v2-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "yandere-api-v2": {
      "command": "/abs/path/to/yandere-api-v2-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Post** | An image entry on the booru — artwork plus metadata (tags, rating, score, dimensions, source, sample/preview URLs); listed via `GET /post.json?api_version=2`. | `/post.json` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from yandereapiv2_sdk import YandereApiV2SDK

client = YandereApiV2SDK({})

# List all posts
posts, err = client.Post(None).list(None, None)
```

### PHP

```php
<?php
require_once 'yandereapiv2_sdk.php';

$client = new YandereApiV2SDK([]);

// List all posts
[$posts, $err] = $client->Post(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/yandere-api-v2-sdk/go"

client := sdk.NewYandereApiV2SDK(map[string]any{})

// List all posts
posts, err := client.Post(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "YandereApiV2_sdk"

client = YandereApiV2SDK.new({})

# List all posts
posts, err = client.Post(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("yandere-api-v2_sdk")

local client = sdk.new({})

-- List all posts
local posts, err = client:Post(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = YandereApiV2SDK.test()
const result = await client.Post().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = YandereApiV2SDK.test(None, None)
result, err = client.Post(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = YandereApiV2SDK::test(null, null);
[$result, $err] = $client->Post(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Post(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = YandereApiV2SDK.test(nil, nil)
result, err = client.Post(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Post(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Yande.re API v2

- Upstream: [https://yande.re](https://yande.re)
- API docs: [https://yande.re/help/api](https://yande.re/help/api)

- No public licence is published for the Yande.re API itself.
- Images are uploaded by the community; copyright remains with the original artists and publishers.
- Respect the per-post `source`, `rating`, and artist tags when redistributing.
- Treat content as third-party; do not assume commercial reuse is permitted.

---

Generated from the Yande.re API v2 OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
