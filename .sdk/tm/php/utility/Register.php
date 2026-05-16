<?php
declare(strict_types=1);

// YandereApiV2 SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

YandereApiV2Utility::setRegistrar(function (YandereApiV2Utility $u): void {
    $u->clean = [YandereApiV2Clean::class, 'call'];
    $u->done = [YandereApiV2Done::class, 'call'];
    $u->make_error = [YandereApiV2MakeError::class, 'call'];
    $u->feature_add = [YandereApiV2FeatureAdd::class, 'call'];
    $u->feature_hook = [YandereApiV2FeatureHook::class, 'call'];
    $u->feature_init = [YandereApiV2FeatureInit::class, 'call'];
    $u->fetcher = [YandereApiV2Fetcher::class, 'call'];
    $u->make_fetch_def = [YandereApiV2MakeFetchDef::class, 'call'];
    $u->make_context = [YandereApiV2MakeContext::class, 'call'];
    $u->make_options = [YandereApiV2MakeOptions::class, 'call'];
    $u->make_request = [YandereApiV2MakeRequest::class, 'call'];
    $u->make_response = [YandereApiV2MakeResponse::class, 'call'];
    $u->make_result = [YandereApiV2MakeResult::class, 'call'];
    $u->make_point = [YandereApiV2MakePoint::class, 'call'];
    $u->make_spec = [YandereApiV2MakeSpec::class, 'call'];
    $u->make_url = [YandereApiV2MakeUrl::class, 'call'];
    $u->param = [YandereApiV2Param::class, 'call'];
    $u->prepare_auth = [YandereApiV2PrepareAuth::class, 'call'];
    $u->prepare_body = [YandereApiV2PrepareBody::class, 'call'];
    $u->prepare_headers = [YandereApiV2PrepareHeaders::class, 'call'];
    $u->prepare_method = [YandereApiV2PrepareMethod::class, 'call'];
    $u->prepare_params = [YandereApiV2PrepareParams::class, 'call'];
    $u->prepare_path = [YandereApiV2PreparePath::class, 'call'];
    $u->prepare_query = [YandereApiV2PrepareQuery::class, 'call'];
    $u->result_basic = [YandereApiV2ResultBasic::class, 'call'];
    $u->result_body = [YandereApiV2ResultBody::class, 'call'];
    $u->result_headers = [YandereApiV2ResultHeaders::class, 'call'];
    $u->transform_request = [YandereApiV2TransformRequest::class, 'call'];
    $u->transform_response = [YandereApiV2TransformResponse::class, 'call'];
});
