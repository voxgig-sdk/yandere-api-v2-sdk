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
| `actual_preview_height` | `int` | No | Actual height of the preview image |
| `actual_preview_width` | `int` | No | Actual width of the preview image |
| `author` | `str` | No | Username of the post creator |
| `change` | `int` | No | Change number/version |
| `created_at` | `int` | No | Unix timestamp of when the post was created |
| `creator_id` | `int` | No | User ID of the post creator |
| `file_size` | `int` | No | File size in bytes |
| `file_url` | `str` | No | URL to the full-size image |
| `flag_detail` | `dict` | No | Flag details if the post is flagged |
| `frames` | `list` | No | Array of frames |
| `frames_pending` | `list` | No | Array of pending frames |
| `frames_pending_string` | `str` | No | Pending frames information |
| `frames_string` | `str` | No | Frames information |
| `has_children` | `bool` | No | Whether the post has child posts |
| `height` | `int` | No | Original image height |
| `id` | `int` | No | Post ID |
| `is_held` | `bool` | No | Whether the post is held |
| `is_shown_in_index` | `bool` | No | Whether the post is shown in the index |
| `jpeg_file_size` | `int` | No | File size of the JPEG version in bytes |
| `jpeg_height` | `int` | No | Height of the JPEG version |
| `jpeg_url` | `str` | No | URL to the JPEG version |
| `jpeg_width` | `int` | No | Width of the JPEG version |
| `md5` | `str` | No | MD5 hash of the image file |
| `parent_id` | `int` | No | ID of the parent post |
| `pool_ids` | `list` | No | Array of pool IDs this post belongs to (included when include_pools=1) |
| `preview_height` | `int` | No | Height of the preview image |
| `preview_url` | `str` | No | URL to the preview/thumbnail image |
| `preview_width` | `int` | No | Width of the preview image |
| `rating` | `str` | No | Post rating (s=safe, q=questionable, e=explicit) |
| `sample_file_size` | `int` | No | File size of the sample image in bytes |
| `sample_height` | `int` | No | Height of the sample image |
| `sample_url` | `str` | No | URL to the sample-size image |
| `sample_width` | `int` | No | Width of the sample image |
| `score` | `int` | No | Post score |
| `source` | `str` | No | Source URL of the image |
| `status` | `str` | No | Post status |
| `tags` | `str` | No | Space-separated list of tags associated with the post |
| `votes` | `dict` | No | Vote information (included when include_votes=1) |
| `width` | `int` | No | Original image width |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Post().list({"api_version": 1})
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

