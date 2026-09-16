# YandereApiV2 TypeScript SDK



The TypeScript SDK for the YandereApiV2 API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Post()` — each with a small set of operations (`list`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/yandere-api-v2-sdk/releases](https://github.com/voxgig-sdk/yandere-api-v2-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { YandereApiV2SDK } from '@voxgig-sdk/yandere-api-v2-sdk'

const client = new YandereApiV2SDK()
```

### 2. List post records

`list()` resolves to an array of Post ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const posts = await client.Post().list({ api_version: 1 })

for (const post of posts) {
  console.log(post)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const posts = await client.Post().list()
  console.log(posts)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = YandereApiV2SDK.test()

const post = await client.Post().list()
// post is the entity, populated with mock response data
// — call post.data() for the record itself
console.log(post)
```

You can also use the instance method:

```ts
const client = new YandereApiV2SDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Post()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new YandereApiV2SDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
YANDERE_API_V2_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### YandereApiV2SDK

#### Constructor

```ts
new YandereApiV2SDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Post(data?)` | `PostEntity` | Create a Post entity instance. |
| `tester(testopts?, sdkopts?)` | `YandereApiV2SDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `YandereApiV2SDK.test(testopts?, sdkopts?)` | `YandereApiV2SDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): YandereApiV2SDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

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

Operations: list.

API path: `/post.json`



## Entities


### Post

Create an instance: `const post = client.Post()`

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
| `flag_detail` | `Record<string, any>` | Flag details if the post is flagged |
| `frames` | `any[]` | Array of frames |
| `frames_pending` | `any[]` | Array of pending frames |
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
| `pool_ids` | `any[]` | Array of pool IDs this post belongs to (included when include_pools=1) |
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
| `votes` | `Record<string, any>` | Vote information (included when include_votes=1) |
| `width` | `number` | Original image width |

#### Example: List

```ts
const posts = await client.Post().list({ api_version: 1 })
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
yandere-api-v2/
├── src/
│   ├── YandereApiV2SDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { YandereApiV2SDK } from '@voxgig-sdk/yandere-api-v2-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const post = client.Post()
await post.list()

// post.data() now returns the post data from the last `list`
// post.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
