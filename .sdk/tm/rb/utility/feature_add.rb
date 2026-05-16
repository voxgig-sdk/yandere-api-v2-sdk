# YandereApiV2 SDK utility: feature_add
module YandereApiV2Utilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
