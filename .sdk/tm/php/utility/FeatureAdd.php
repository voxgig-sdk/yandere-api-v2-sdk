<?php
declare(strict_types=1);

// YandereApiV2 SDK utility: feature_add

class YandereApiV2FeatureAdd
{
    public static function call(YandereApiV2Context $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
