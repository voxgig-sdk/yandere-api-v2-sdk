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
| `actual_preview_height` | `number` | No |  |
| `actual_preview_width` | `number` | No |  |
| `author` | `string` | No |  |
| `change` | `number` | No |  |
| `created_at` | `number` | No |  |
| `creator_id` | `number` | No |  |
| `file_size` | `number` | No |  |
| `file_url` | `string` | No |  |
| `flag_detail` | `Record<string, any>` | No |  |
| `frame` | `any[]` | No |  |
| `frames_pending` | `any[]` | No |  |
| `frames_pending_string` | `string` | No |  |
| `frames_string` | `string` | No |  |
| `has_child` | `boolean` | No |  |
| `height` | `number` | No |  |
| `id` | `number` | No |  |
| `is_held` | `boolean` | No |  |
| `is_shown_in_index` | `boolean` | No |  |
| `jpeg_file_size` | `number` | No |  |
| `jpeg_height` | `number` | No |  |
| `jpeg_url` | `string` | No |  |
| `jpeg_width` | `number` | No |  |
| `md5` | `string` | No |  |
| `parent_id` | `number` | No |  |
| `pool_id` | `any[]` | No |  |
| `preview_height` | `number` | No |  |
| `preview_url` | `string` | No |  |
| `preview_width` | `number` | No |  |
| `rating` | `string` | No |  |
| `sample_file_size` | `number` | No |  |
| `sample_height` | `number` | No |  |
| `sample_url` | `string` | No |  |
| `sample_width` | `number` | No |  |
| `score` | `number` | No |  |
| `source` | `string` | No |  |
| `status` | `string` | No |  |
| `tag` | `string` | No |  |
| `vote` | `Record<string, any>` | No |  |
| `width` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Post().list()
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

