<?php
declare(strict_types=1);

// YandereApiV2 SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/RatelimitFeature.php';
require_once __DIR__ . '/feature/RetryFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';
require_once __DIR__ . '/feature/TimeoutFeature.php';


class YandereApiV2Features
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new YandereApiV2BaseFeature();
            case "ratelimit":
                return new YandereApiV2RatelimitFeature();
            case "retry":
                return new YandereApiV2RetryFeature();
            case "test":
                return new YandereApiV2TestFeature();
            case "timeout":
                return new YandereApiV2TimeoutFeature();
            default:
                return new YandereApiV2BaseFeature();
        }
    }

    /**
     * Does a generated feature class back this name? False for a name only
     * an options extend instance can supply (the station adopt path) - the
     * constructor uses this to skip make_feature for such names instead of
     * adding a stray BaseFeature.
     */
    public static function has_feature(string $name): bool
    {
        switch ($name) {
            case "base":
            case "ratelimit":
            case "retry":
            case "test":
            case "timeout":
                return true;
            default:
                return false;
        }
    }
}
