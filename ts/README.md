# YandereApiV2 TypeScript SDK



The TypeScript SDK for the YandereApiV2 API — a type-safe, entity-oriented client with full async/await support.

> Other languages, the CLI, and MCP server live alongside this one — see
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
import { YandereApiV2SDK } from '@voxgig-sdk/yandere-api-v2'

const client = new YandereApiV2SDK()
```

### 2. List posts

```ts
const result = await client.post.list()

if (result.ok) {
  for (const item of result.data) {
    console.log(item.id, item.name)
  }
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

const result = await client.post.load({ id: 'test01' })
// result.ok === true
// result.data contains mock response data
```

You can also use the instance method:

```ts
const client = new YandereApiV2SDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.post

// First call sets internal match
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored match
const data = entity.data()
console.log(data.id) // 'example'
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
| `load` | `load(reqmatch?, ctrl?): Promise<Result>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Result>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Result>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Result>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<Result>` | Remove an entity. |
| `data` | `data(data?): any` | Get or set entity data. |
| `match` | `match(match?): any` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): YandereApiV2SDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Result shape

All entity operations return a Result object:

```ts
{
  ok: boolean      // true if the HTTP status is 2xx
  status: number   // HTTP status code
  headers: object  // response headers
  data: any        // parsed JSON response body
}
```

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

Operations: list.

API path: `/post.json`



## Entities


### Post

Create an instance: `const post = client.post`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```ts
const posts = await client.post.list()
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
error is returned to the caller.

An unexpected exception triggers the `PreUnexpected` hook before
propagating.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

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
import { YandereApiV2SDK } from '@voxgig-sdk/yandere-api-v2'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const post = client.post
await post.load({ id: "example_id" })

// post.data() now returns the loaded post data
// post.match() returns { id: "example_id" }
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
