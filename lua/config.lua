-- ProjectName SDK configuration

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
      auth = {
        prefix = "Bearer",
      },
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
            ["active"] = true,
            ["name"] = "actual_preview_height",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "actual_preview_width",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "author",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "change",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "created_at",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "creator_id",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "file_size",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "file_url",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "flag_detail",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "frame",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "frames_pending",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "frames_pending_string",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 11,
          },
          {
            ["active"] = true,
            ["name"] = "frames_string",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 12,
          },
          {
            ["active"] = true,
            ["name"] = "has_child",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 13,
          },
          {
            ["active"] = true,
            ["name"] = "height",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 14,
          },
          {
            ["active"] = true,
            ["name"] = "id",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 15,
          },
          {
            ["active"] = true,
            ["name"] = "is_held",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 16,
          },
          {
            ["active"] = true,
            ["name"] = "is_shown_in_index",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 17,
          },
          {
            ["active"] = true,
            ["name"] = "jpeg_file_size",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 18,
          },
          {
            ["active"] = true,
            ["name"] = "jpeg_height",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 19,
          },
          {
            ["active"] = true,
            ["name"] = "jpeg_url",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 20,
          },
          {
            ["active"] = true,
            ["name"] = "jpeg_width",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 21,
          },
          {
            ["active"] = true,
            ["name"] = "md5",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 22,
          },
          {
            ["active"] = true,
            ["name"] = "parent_id",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 23,
          },
          {
            ["active"] = true,
            ["name"] = "pool_id",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 24,
          },
          {
            ["active"] = true,
            ["name"] = "preview_height",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 25,
          },
          {
            ["active"] = true,
            ["name"] = "preview_url",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 26,
          },
          {
            ["active"] = true,
            ["name"] = "preview_width",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 27,
          },
          {
            ["active"] = true,
            ["name"] = "rating",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 28,
          },
          {
            ["active"] = true,
            ["name"] = "sample_file_size",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 29,
          },
          {
            ["active"] = true,
            ["name"] = "sample_height",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 30,
          },
          {
            ["active"] = true,
            ["name"] = "sample_url",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 31,
          },
          {
            ["active"] = true,
            ["name"] = "sample_width",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 32,
          },
          {
            ["active"] = true,
            ["name"] = "score",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 33,
          },
          {
            ["active"] = true,
            ["name"] = "source",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 34,
          },
          {
            ["active"] = true,
            ["name"] = "status",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 35,
          },
          {
            ["active"] = true,
            ["name"] = "tag",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 36,
          },
          {
            ["active"] = true,
            ["name"] = "vote",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 37,
          },
          {
            ["active"] = true,
            ["name"] = "width",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 38,
          },
        },
        ["name"] = "post",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "api_version",
                      ["orig"] = "api_version",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "include_pool",
                      ["orig"] = "include_pool",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "include_tag",
                      ["orig"] = "include_tag",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "include_vote",
                      ["orig"] = "include_vote",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = 20,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "holds:false",
                      ["kind"] = "query",
                      ["name"] = "tag",
                      ["orig"] = "tag",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
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
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
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
