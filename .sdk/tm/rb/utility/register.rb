# YandereApiV2 SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

YandereApiV2Utility.registrar = ->(u) {
  u.clean = YandereApiV2Utilities::Clean
  u.done = YandereApiV2Utilities::Done
  u.make_error = YandereApiV2Utilities::MakeError
  u.feature_add = YandereApiV2Utilities::FeatureAdd
  u.feature_hook = YandereApiV2Utilities::FeatureHook
  u.feature_init = YandereApiV2Utilities::FeatureInit
  u.fetcher = YandereApiV2Utilities::Fetcher
  u.make_fetch_def = YandereApiV2Utilities::MakeFetchDef
  u.make_context = YandereApiV2Utilities::MakeContext
  u.make_options = YandereApiV2Utilities::MakeOptions
  u.make_request = YandereApiV2Utilities::MakeRequest
  u.make_response = YandereApiV2Utilities::MakeResponse
  u.make_result = YandereApiV2Utilities::MakeResult
  u.make_point = YandereApiV2Utilities::MakePoint
  u.make_spec = YandereApiV2Utilities::MakeSpec
  u.make_url = YandereApiV2Utilities::MakeUrl
  u.param = YandereApiV2Utilities::Param
  u.prepare_auth = YandereApiV2Utilities::PrepareAuth
  u.prepare_body = YandereApiV2Utilities::PrepareBody
  u.prepare_headers = YandereApiV2Utilities::PrepareHeaders
  u.prepare_method = YandereApiV2Utilities::PrepareMethod
  u.prepare_params = YandereApiV2Utilities::PrepareParams
  u.prepare_path = YandereApiV2Utilities::PreparePath
  u.prepare_query = YandereApiV2Utilities::PrepareQuery
  u.result_basic = YandereApiV2Utilities::ResultBasic
  u.result_body = YandereApiV2Utilities::ResultBody
  u.result_headers = YandereApiV2Utilities::ResultHeaders
  u.transform_request = YandereApiV2Utilities::TransformRequest
  u.transform_response = YandereApiV2Utilities::TransformResponse
}
