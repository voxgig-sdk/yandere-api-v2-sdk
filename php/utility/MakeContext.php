<?php
declare(strict_types=1);

// YandereApiV2 SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class YandereApiV2MakeContext
{
    public static function call(array $ctxmap, ?YandereApiV2Context $basectx): YandereApiV2Context
    {
        return new YandereApiV2Context($ctxmap, $basectx);
    }
}
