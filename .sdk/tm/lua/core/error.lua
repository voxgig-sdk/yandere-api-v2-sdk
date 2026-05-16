-- YandereApiV2 SDK error

local YandereApiV2Error = {}
YandereApiV2Error.__index = YandereApiV2Error


function YandereApiV2Error.new(code, msg, ctx)
  local self = setmetatable({}, YandereApiV2Error)
  self.is_sdk_error = true
  self.sdk = "YandereApiV2"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function YandereApiV2Error:error()
  return self.msg
end


function YandereApiV2Error:__tostring()
  return self.msg
end


return YandereApiV2Error
