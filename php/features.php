<?php
declare(strict_types=1);

// YandereApiV2 SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class YandereApiV2Features
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new YandereApiV2BaseFeature();
            case "test":
                return new YandereApiV2TestFeature();
            default:
                return new YandereApiV2BaseFeature();
        }
    }
}
