<?php
declare(strict_types=1);

// YandereApiV2 SDK base feature

class YandereApiV2BaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(YandereApiV2Context $ctx, array $options): void {}
    public function PostConstruct(YandereApiV2Context $ctx): void {}
    public function PostConstructEntity(YandereApiV2Context $ctx): void {}
    public function SetData(YandereApiV2Context $ctx): void {}
    public function GetData(YandereApiV2Context $ctx): void {}
    public function GetMatch(YandereApiV2Context $ctx): void {}
    public function SetMatch(YandereApiV2Context $ctx): void {}
    public function PrePoint(YandereApiV2Context $ctx): void {}
    public function PreSpec(YandereApiV2Context $ctx): void {}
    public function PreRequest(YandereApiV2Context $ctx): void {}
    public function PreResponse(YandereApiV2Context $ctx): void {}
    public function PreResult(YandereApiV2Context $ctx): void {}
    public function PreDone(YandereApiV2Context $ctx): void {}
    public function PreUnexpected(YandereApiV2Context $ctx): void {}
}
