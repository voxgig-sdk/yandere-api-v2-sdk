# YandereApiV2 Python SDK Reference

Complete API reference for the YandereApiV2 Python SDK.


## YandereApiV2SDK

### Constructor

```python
from yandereapiv2_sdk import YandereApiV2SDK

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
| `actual_preview_height` | `int` | No |  |
| `actual_preview_width` | `int` | No |  |
| `author` | `str` | No |  |
| `change` | `int` | No |  |
| `created_at` | `int` | No |  |
| `creator_id` | `int` | No |  |
| `file_size` | `int` | No |  |
| `file_url` | `str` | No |  |
| `flag_detail` | `dict` | No |  |
| `frame` | `list` | No |  |
| `frames_pending` | `list` | No |  |
| `frames_pending_string` | `str` | No |  |
| `frames_string` | `str` | No |  |
| `has_child` | `bool` | No |  |
| `height` | `int` | No |  |
| `id` | `int` | No |  |
| `is_held` | `bool` | No |  |
| `is_shown_in_index` | `bool` | No |  |
| `jpeg_file_size` | `int` | No |  |
| `jpeg_height` | `int` | No |  |
| `jpeg_url` | `str` | No |  |
| `jpeg_width` | `int` | No |  |
| `md5` | `str` | No |  |
| `parent_id` | `int` | No |  |
| `pool_id` | `list` | No |  |
| `preview_height` | `int` | No |  |
| `preview_url` | `str` | No |  |
| `preview_width` | `int` | No |  |
| `rating` | `str` | No |  |
| `sample_file_size` | `int` | No |  |
| `sample_height` | `int` | No |  |
| `sample_url` | `str` | No |  |
| `sample_width` | `int` | No |  |
| `score` | `int` | No |  |
| `source` | `str` | No |  |
| `status` | `str` | No |  |
| `tag` | `str` | No |  |
| `vote` | `dict` | No |  |
| `width` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Post().list()
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

