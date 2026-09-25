-- YandereApiV2 SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "YandereApiV2",
      slug = "yandere-api-v2",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://yande.re",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["post"] = {},
      },
    },
    entity = {
      ["post"] = {
        ["fields"] = {
          {
            ["name"] = "actual_preview_height",
            ["title"] = "Actual Preview Height",
            ["type"] = "`$INTEGER`",
            ["short"] = "Actual height of the preview image",
          },
          {
            ["name"] = "actual_preview_width",
            ["title"] = "Actual Preview Width",
            ["type"] = "`$INTEGER`",
            ["short"] = "Actual width of the preview image",
          },
          {
            ["name"] = "author",
            ["title"] = "Author",
            ["type"] = "`$STRING`",
            ["short"] = "Username of the post creator",
          },
          {
            ["name"] = "change",
            ["title"] = "Change",
            ["type"] = "`$INTEGER`",
            ["short"] = "Change number/version",
          },
          {
            ["name"] = "created_at",
            ["title"] = "Created At",
            ["type"] = "`$INTEGER`",
            ["short"] = "Unix timestamp of when the post was created",
          },
          {
            ["name"] = "creator_id",
            ["title"] = "Creator Id",
            ["type"] = "`$INTEGER`",
            ["short"] = "User ID of the post creator",
          },
          {
            ["name"] = "file_size",
            ["title"] = "File Size",
            ["type"] = "`$INTEGER`",
            ["short"] = "File size in bytes",
          },
          {
            ["name"] = "file_url",
            ["title"] = "File Url",
            ["type"] = "`$STRING`",
            ["short"] = "URL to the full-size image",
          },
          {
            ["name"] = "flag_detail",
            ["title"] = "Flag Detail",
            ["type"] = "`$OBJECT`",
            ["short"] = "Flag details if the post is flagged",
          },
          {
            ["name"] = "frames",
            ["title"] = "Frames",
            ["type"] = "`$ARRAY`",
            ["short"] = "Array of frames",
          },
          {
            ["name"] = "frames_pending",
            ["title"] = "Frames Pending",
            ["type"] = "`$ARRAY`",
            ["short"] = "Array of pending frames",
          },
          {
            ["name"] = "frames_pending_string",
            ["title"] = "Frames Pending String",
            ["type"] = "`$STRING`",
            ["short"] = "Pending frames information",
          },
          {
            ["name"] = "frames_string",
            ["title"] = "Frames String",
            ["type"] = "`$STRING`",
            ["short"] = "Frames information",
          },
          {
            ["name"] = "has_children",
            ["title"] = "Has Children",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Whether the post has child posts",
          },
          {
            ["name"] = "height",
            ["title"] = "Height",
            ["type"] = "`$INTEGER`",
            ["short"] = "Original image height",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$INTEGER`",
            ["short"] = "Post ID",
          },
          {
            ["name"] = "is_held",
            ["title"] = "Is Held",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Whether the post is held",
          },
          {
            ["name"] = "is_shown_in_index",
            ["title"] = "Is Shown In Index",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Whether the post is shown in the index",
          },
          {
            ["name"] = "jpeg_file_size",
            ["title"] = "Jpeg File Size",
            ["type"] = "`$INTEGER`",
            ["short"] = "File size of the JPEG version in bytes",
          },
          {
            ["name"] = "jpeg_height",
            ["title"] = "Jpeg Height",
            ["type"] = "`$INTEGER`",
            ["short"] = "Height of the JPEG version",
          },
          {
            ["name"] = "jpeg_url",
            ["title"] = "Jpeg Url",
            ["type"] = "`$STRING`",
            ["short"] = "URL to the JPEG version",
          },
          {
            ["name"] = "jpeg_width",
            ["title"] = "Jpeg Width",
            ["type"] = "`$INTEGER`",
            ["short"] = "Width of the JPEG version",
          },
          {
            ["name"] = "md5",
            ["title"] = "Md5",
            ["type"] = "`$STRING`",
            ["short"] = "MD5 hash of the image file",
          },
          {
            ["name"] = "parent_id",
            ["title"] = "Parent Id",
            ["type"] = "`$INTEGER`",
            ["short"] = "ID of the parent post",
          },
          {
            ["name"] = "pool_ids",
            ["title"] = "Pool Ids",
            ["type"] = "`$ARRAY`",
            ["short"] = "Array of pool IDs this post belongs to (included when include_pools=1)",
          },
          {
            ["name"] = "preview_height",
            ["title"] = "Preview Height",
            ["type"] = "`$INTEGER`",
            ["short"] = "Height of the preview image",
          },
          {
            ["name"] = "preview_url",
            ["title"] = "Preview Url",
            ["type"] = "`$STRING`",
            ["short"] = "URL to the preview/thumbnail image",
          },
          {
            ["name"] = "preview_width",
            ["title"] = "Preview Width",
            ["type"] = "`$INTEGER`",
            ["short"] = "Width of the preview image",
          },
          {
            ["name"] = "rating",
            ["title"] = "Rating",
            ["type"] = "`$STRING`",
            ["short"] = "Post rating (s=safe, q=questionable, e=explicit)",
          },
          {
            ["name"] = "sample_file_size",
            ["title"] = "Sample File Size",
            ["type"] = "`$INTEGER`",
            ["short"] = "File size of the sample image in bytes",
          },
          {
            ["name"] = "sample_height",
            ["title"] = "Sample Height",
            ["type"] = "`$INTEGER`",
            ["short"] = "Height of the sample image",
          },
          {
            ["name"] = "sample_url",
            ["title"] = "Sample Url",
            ["type"] = "`$STRING`",
            ["short"] = "URL to the sample-size image",
          },
          {
            ["name"] = "sample_width",
            ["title"] = "Sample Width",
            ["type"] = "`$INTEGER`",
            ["short"] = "Width of the sample image",
          },
          {
            ["name"] = "score",
            ["title"] = "Score",
            ["type"] = "`$INTEGER`",
            ["short"] = "Post score",
          },
          {
            ["name"] = "source",
            ["title"] = "Source",
            ["type"] = "`$STRING`",
            ["short"] = "Source URL of the image",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
            ["short"] = "Post status",
          },
          {
            ["name"] = "tags",
            ["title"] = "Tags",
            ["type"] = "`$STRING`",
            ["short"] = "Space-separated list of tags associated with the post",
          },
          {
            ["name"] = "votes",
            ["title"] = "Votes",
            ["type"] = "`$OBJECT`",
            ["short"] = "Vote information (included when include_votes=1)",
          },
          {
            ["name"] = "width",
            ["title"] = "Width",
            ["type"] = "`$INTEGER`",
            ["short"] = "Original image width",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "post",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/post.json",
                ["segments"] = {
                  {
                    ["lit"] = "post.json",
                  },
                },
                ["parts"] = {
                  "post.json",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "api_version",
                      ["orig"] = "api_version",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "include_pool",
                      ["orig"] = "include_pool",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                    {
                      ["name"] = "include_tag",
                      ["orig"] = "include_tag",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                    {
                      ["name"] = "include_vote",
                      ["orig"] = "include_vote",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 20,
                    },
                    {
                      ["name"] = "tag",
                      ["orig"] = "tag",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "holds:false",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "api_version",
                    "filter",
                    "include_pool",
                    "include_tag",
                    "include_vote",
                    "limit",
                    "tag",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
