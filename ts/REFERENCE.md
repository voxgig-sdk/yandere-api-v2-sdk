# YandereApiV2 TypeScript SDK Reference

Complete API reference for the YandereApiV2 TypeScript SDK.


## YandereApiV2SDK

### Constructor

```ts
new YandereApiV2SDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `YandereApiV2SDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = YandereApiV2SDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `YandereApiV2SDK` instance in test mode.


### Instance Methods

#### `Post(data?: object)`

Create a new `Post` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `YandereApiV2SDK.test()`.

**Returns:** `YandereApiV2SDK` instance in test mode.


---

## PostEntity

```ts
const post = client.Post()
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
| `flag_detail` | `Record<string, any>` | No | Flag details if the post is flagged |
| `frames` | `any[]` | No | Array of frames |
| `frames_pending` | `any[]` | No | Array of pending frames |
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
| `pool_ids` | `any[]` | No | Array of pool IDs this post belongs to (included when include_pools=1) |
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
| `votes` | `Record<string, any>` | No | Vote information (included when include_votes=1) |
| `width` | `number` | No | Original image width |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Post().list({ api_version: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostEntity` instance with the same client and
options.

#### `client()`

Return the parent `YandereApiV2SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new YandereApiV2SDK({
  feature: {
    test: { active: true },
  }
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

