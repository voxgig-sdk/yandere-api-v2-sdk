# YandereApiV2 SDK utility: make_context
require_relative '../core/context'
module YandereApiV2Utilities
  MakeContext = ->(ctxmap, basectx) {
    YandereApiV2Context.new(ctxmap, basectx)
  }
end
