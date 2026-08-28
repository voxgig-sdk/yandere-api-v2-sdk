# YandereApiV2 Ruby SDK Reference

Complete API reference for the YandereApiV2 Ruby SDK.


## YandereApiV2SDK

### Constructor

```ruby
require_relative 'YandereApiV2_sdk'

client = YandereApiV2SDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `YandereApiV2SDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = YandereApiV2SDK.test
```


### Instance Methods

#### `Post(data = nil)`

Create a new `Post` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## PostEntity

```ruby
post = client.Post
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actual_preview_height` | `Integer` | No | Actual height of the preview image |
| `actual_preview_width` | `Integer` | No | Actual width of the preview image |
| `author` | `String` | No | Username of the post creator |
| `change` | `Integer` | No | Change number/version |
| `created_at` | `Integer` | No | Unix timestamp of when the post was created |
| `creator_id` | `Integer` | No | User ID of the post creator |
| `file_size` | `Integer` | No | File size in bytes |
| `file_url` | `String` | No | URL to the full-size image |
| `flag_detail` | `Hash` | No | Flag details if the post is flagged |
| `frames` | `Array` | No | Array of frames |
| `frames_pending` | `Array` | No | Array of pending frames |
| `frames_pending_string` | `String` | No | Pending frames information |
| `frames_string` | `String` | No | Frames information |
| `has_children` | `Boolean` | No | Whether the post has child posts |
| `height` | `Integer` | No | Original image height |
| `id` | `Integer` | No | Post ID |
| `is_held` | `Boolean` | No | Whether the post is held |
| `is_shown_in_index` | `Boolean` | No | Whether the post is shown in the index |
| `jpeg_file_size` | `Integer` | No | File size of the JPEG version in bytes |
| `jpeg_height` | `Integer` | No | Height of the JPEG version |
| `jpeg_url` | `String` | No | URL to the JPEG version |
| `jpeg_width` | `Integer` | No | Width of the JPEG version |
| `md5` | `String` | No | MD5 hash of the image file |
| `parent_id` | `Integer` | No | ID of the parent post |
| `pool_ids` | `Array` | No | Array of pool IDs this post belongs to (included when include_pools=1) |
| `preview_height` | `Integer` | No | Height of the preview image |
| `preview_url` | `String` | No | URL to the preview/thumbnail image |
| `preview_width` | `Integer` | No | Width of the preview image |
| `rating` | `String` | No | Post rating (s=safe, q=questionable, e=explicit) |
| `sample_file_size` | `Integer` | No | File size of the sample image in bytes |
| `sample_height` | `Integer` | No | Height of the sample image |
| `sample_url` | `String` | No | URL to the sample-size image |
| `sample_width` | `Integer` | No | Width of the sample image |
| `score` | `Integer` | No | Post score |
| `source` | `String` | No | Source URL of the image |
| `status` | `String` | No | Post status |
| `tags` | `String` | No | Space-separated list of tags associated with the post |
| `votes` | `Hash` | No | Vote information (included when include_votes=1) |
| `width` | `Integer` | No | Original image width |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Post.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = YandereApiV2SDK.new({
  "feature" => {
    "test" => { "active" => true },
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

