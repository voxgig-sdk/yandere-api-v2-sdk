-- YandereApiV2 SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "YandereApiV2",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
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
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "actual_preview_width",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "author",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "change",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "creator_id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "file_size",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "file_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "flag_detail",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "frames",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "frames_pending",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "frames_pending_string",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "frames_string",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "has_children",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "height",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "is_held",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_shown_in_index",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "jpeg_file_size",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "jpeg_height",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "jpeg_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "jpeg_width",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "md5",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "parent_id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "pool_ids",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "preview_height",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "preview_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "preview_width",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "rating",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sample_file_size",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "sample_height",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "sample_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sample_width",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "score",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "source",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "tags",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "votes",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "width",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "post",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "api_version",
                      ["orig"] = "api_version",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "include_pool",
                      ["orig"] = "include_pool",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "include_tag",
                      ["orig"] = "include_tag",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "include_vote",
                      ["orig"] = "include_vote",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 20,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "holds:false",
                      ["kind"] = "query",
                      ["name"] = "tag",
                      ["orig"] = "tag",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/post.json",
                ["parts"] = {
                  "post.json",
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
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
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
