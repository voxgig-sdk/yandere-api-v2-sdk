<?php
declare(strict_types=1);

// YandereApiV2 SDK utility: prepare_body

class YandereApiV2PrepareBody
{
    public static function call(YandereApiV2Context $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
