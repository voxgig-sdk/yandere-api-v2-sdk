-- YandereApiV2 SDK exists test

local sdk = require("yandere-api-v2_sdk")

describe("YandereApiV2SDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
