package = "voxgig-sdk-yandere-api-v2"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/yandere-api-v2-sdk.git"
}
description = {
  summary = "YandereApiV2 SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["yandere-api-v2_sdk"] = "yandere-api-v2_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
