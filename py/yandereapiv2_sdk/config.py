# YandereApiV2 SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "YandereApiV2",
            "slug": "yandere-api-v2",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://yande.re",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "post": {},
            },
        },
        "entity": {
      "post": {
        "fields": [
          {
            "name": "actual_preview_height",
            "short": "Actual height of the preview image",
            "type": "`$INTEGER`",
          },
          {
            "name": "actual_preview_width",
            "short": "Actual width of the preview image",
            "type": "`$INTEGER`",
          },
          {
            "name": "author",
            "short": "Username of the post creator",
            "type": "`$STRING`",
          },
          {
            "name": "change",
            "short": "Change number/version",
            "type": "`$INTEGER`",
          },
          {
            "name": "created_at",
            "short": "Unix timestamp of when the post was created",
            "type": "`$INTEGER`",
          },
          {
            "name": "creator_id",
            "short": "User ID of the post creator",
            "type": "`$INTEGER`",
          },
          {
            "name": "file_size",
            "short": "File size in bytes",
            "type": "`$INTEGER`",
          },
          {
            "name": "file_url",
            "short": "URL to the full-size image",
            "type": "`$STRING`",
          },
          {
            "name": "flag_detail",
            "short": "Flag details if the post is flagged",
            "type": "`$OBJECT`",
          },
          {
            "name": "frames",
            "short": "Array of frames",
            "type": "`$ARRAY`",
          },
          {
            "name": "frames_pending",
            "short": "Array of pending frames",
            "type": "`$ARRAY`",
          },
          {
            "name": "frames_pending_string",
            "short": "Pending frames information",
            "type": "`$STRING`",
          },
          {
            "name": "frames_string",
            "short": "Frames information",
            "type": "`$STRING`",
          },
          {
            "name": "has_children",
            "short": "Whether the post has child posts",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "height",
            "short": "Original image height",
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "short": "Post ID",
            "type": "`$INTEGER`",
          },
          {
            "name": "is_held",
            "short": "Whether the post is held",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_shown_in_index",
            "short": "Whether the post is shown in the index",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "jpeg_file_size",
            "short": "File size of the JPEG version in bytes",
            "type": "`$INTEGER`",
          },
          {
            "name": "jpeg_height",
            "short": "Height of the JPEG version",
            "type": "`$INTEGER`",
          },
          {
            "name": "jpeg_url",
            "short": "URL to the JPEG version",
            "type": "`$STRING`",
          },
          {
            "name": "jpeg_width",
            "short": "Width of the JPEG version",
            "type": "`$INTEGER`",
          },
          {
            "name": "md5",
            "short": "MD5 hash of the image file",
            "type": "`$STRING`",
          },
          {
            "name": "parent_id",
            "short": "ID of the parent post",
            "type": "`$INTEGER`",
          },
          {
            "name": "pool_ids",
            "short": "Array of pool IDs this post belongs to (included when include_pools=1)",
            "type": "`$ARRAY`",
          },
          {
            "name": "preview_height",
            "short": "Height of the preview image",
            "type": "`$INTEGER`",
          },
          {
            "name": "preview_url",
            "short": "URL to the preview/thumbnail image",
            "type": "`$STRING`",
          },
          {
            "name": "preview_width",
            "short": "Width of the preview image",
            "type": "`$INTEGER`",
          },
          {
            "name": "rating",
            "short": "Post rating (s=safe, q=questionable, e=explicit)",
            "type": "`$STRING`",
          },
          {
            "name": "sample_file_size",
            "short": "File size of the sample image in bytes",
            "type": "`$INTEGER`",
          },
          {
            "name": "sample_height",
            "short": "Height of the sample image",
            "type": "`$INTEGER`",
          },
          {
            "name": "sample_url",
            "short": "URL to the sample-size image",
            "type": "`$STRING`",
          },
          {
            "name": "sample_width",
            "short": "Width of the sample image",
            "type": "`$INTEGER`",
          },
          {
            "name": "score",
            "short": "Post score",
            "type": "`$INTEGER`",
          },
          {
            "name": "source",
            "short": "Source URL of the image",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "short": "Post status",
            "type": "`$STRING`",
          },
          {
            "name": "tags",
            "short": "Space-separated list of tags associated with the post",
            "type": "`$STRING`",
          },
          {
            "name": "votes",
            "short": "Vote information (included when include_votes=1)",
            "type": "`$OBJECT`",
          },
          {
            "name": "width",
            "short": "Original image width",
            "type": "`$INTEGER`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "post",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "api_version",
                      "orig": "api_version",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "filter",
                      "orig": "filter",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "include_pool",
                      "orig": "include_pool",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "include_tag",
                      "orig": "include_tag",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "include_vote",
                      "orig": "include_vote",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 20,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "holds:false",
                      "kind": "query",
                      "name": "tag",
                      "orig": "tag",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/post.json",
                "segments": [
                  {
                    "lit": "post.json",
                  },
                ],
                "select": {
                  "exist": [
                    "api_version",
                    "filter",
                    "include_pool",
                    "include_tag",
                    "include_vote",
                    "limit",
                    "tag",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "post.json",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
