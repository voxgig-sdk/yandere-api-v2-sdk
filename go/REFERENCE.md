# YandereApiV2 Golang SDK Reference

Complete API reference for the YandereApiV2 Golang SDK.


## YandereApiV2SDK

### Constructor

```go
func NewYandereApiV2SDK(options map[string]any) *YandereApiV2SDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TestSDK(testopts, sdkopts map[string]any) *YandereApiV2SDK`

Create a test client with mock features active. Both arguments may be `nil`.

```go
client := sdk.TestSDK(nil, nil)
```


### Instance Methods

#### `Post(data map[string]any) YandereApiV2Entity`

Create a new `Post` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## PostEntity

```go
post := client.Post(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actual_preview_height` | ``$INTEGER`` | No |  |
| `actual_preview_width` | ``$INTEGER`` | No |  |
| `author` | ``$STRING`` | No |  |
| `change` | ``$INTEGER`` | No |  |
| `created_at` | ``$INTEGER`` | No |  |
| `creator_id` | ``$INTEGER`` | No |  |
| `file_size` | ``$INTEGER`` | No |  |
| `file_url` | ``$STRING`` | No |  |
| `flag_detail` | ``$OBJECT`` | No |  |
| `frame` | ``$ARRAY`` | No |  |
| `frames_pending` | ``$ARRAY`` | No |  |
| `frames_pending_string` | ``$STRING`` | No |  |
| `frames_string` | ``$STRING`` | No |  |
| `has_child` | ``$BOOLEAN`` | No |  |
| `height` | ``$INTEGER`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `is_held` | ``$BOOLEAN`` | No |  |
| `is_shown_in_index` | ``$BOOLEAN`` | No |  |
| `jpeg_file_size` | ``$INTEGER`` | No |  |
| `jpeg_height` | ``$INTEGER`` | No |  |
| `jpeg_url` | ``$STRING`` | No |  |
| `jpeg_width` | ``$INTEGER`` | No |  |
| `md5` | ``$STRING`` | No |  |
| `parent_id` | ``$INTEGER`` | No |  |
| `pool_id` | ``$ARRAY`` | No |  |
| `preview_height` | ``$INTEGER`` | No |  |
| `preview_url` | ``$STRING`` | No |  |
| `preview_width` | ``$INTEGER`` | No |  |
| `rating` | ``$STRING`` | No |  |
| `sample_file_size` | ``$INTEGER`` | No |  |
| `sample_height` | ``$INTEGER`` | No |  |
| `sample_url` | ``$STRING`` | No |  |
| `sample_width` | ``$INTEGER`` | No |  |
| `score` | ``$INTEGER`` | No |  |
| `source` | ``$STRING`` | No |  |
| `status` | ``$STRING`` | No |  |
| `tag` | ``$STRING`` | No |  |
| `vote` | ``$OBJECT`` | No |  |
| `width` | ``$INTEGER`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Post(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PostEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewYandereApiV2SDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

