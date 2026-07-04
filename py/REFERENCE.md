# YandereApiV2 Python SDK Reference

Complete API reference for the YandereApiV2 Python SDK.


## YandereApiV2SDK

### Constructor

```python
from yandere-api-v2_sdk import YandereApiV2SDK

client = YandereApiV2SDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `YandereApiV2SDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = YandereApiV2SDK.test()
```


### Instance Methods

#### `Post(data=None)`

Create a new `PostEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## PostEntity

```python
post = client.Post()
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.Post().list({})
for post in results:
    print(post)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = YandereApiV2SDK({
    "feature": {
        "test": {"active": True},
    },
})
```

