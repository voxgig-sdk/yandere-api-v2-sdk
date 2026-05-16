<?php
declare(strict_types=1);

// YandereApiV2 SDK utility: result_headers

class YandereApiV2ResultHeaders
{
    public static function call(YandereApiV2Context $ctx): ?YandereApiV2Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
