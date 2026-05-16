<?php
declare(strict_types=1);

// YandereApiV2 SDK utility: result_body

class YandereApiV2ResultBody
{
    public static function call(YandereApiV2Context $ctx): ?YandereApiV2Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
