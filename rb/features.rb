# YandereApiV2 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module YandereApiV2Features
  def self.make_feature(name)
    case name
    when "base"
      YandereApiV2BaseFeature.new
    when "test"
      YandereApiV2TestFeature.new
    else
      YandereApiV2BaseFeature.new
    end
  end
end
