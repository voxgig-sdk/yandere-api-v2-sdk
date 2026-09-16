# YandereApiV2 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module YandereApiV2Features
  def self.make_feature(name)
    case name
    when "base"
      YandereApiV2BaseFeature.new
    when "ratelimit"
      YandereApiV2RatelimitFeature.new
    when "retry"
      YandereApiV2RetryFeature.new
    when "test"
      YandereApiV2TestFeature.new
    when "timeout"
      YandereApiV2TimeoutFeature.new
    else
      YandereApiV2BaseFeature.new
    end
  end
end
