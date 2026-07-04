<?php
declare(strict_types=1);

// Typed models for the YandereApiV2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Post entity data model. */
class Post
{
    public ?int $actual_preview_height = null;
    public ?int $actual_preview_width = null;
    public ?string $author = null;
    public ?int $change = null;
    public ?int $created_at = null;
    public ?int $creator_id = null;
    public ?int $file_size = null;
    public ?string $file_url = null;
    public ?array $flag_detail = null;
    public ?array $frame = null;
    public ?array $frames_pending = null;
    public ?string $frames_pending_string = null;
    public ?string $frames_string = null;
    public ?bool $has_child = null;
    public ?int $height = null;
    public ?int $id = null;
    public ?bool $is_held = null;
    public ?bool $is_shown_in_index = null;
    public ?int $jpeg_file_size = null;
    public ?int $jpeg_height = null;
    public ?string $jpeg_url = null;
    public ?int $jpeg_width = null;
    public ?string $md5 = null;
    public ?int $parent_id = null;
    public ?array $pool_id = null;
    public ?int $preview_height = null;
    public ?string $preview_url = null;
    public ?int $preview_width = null;
    public ?string $rating = null;
    public ?int $sample_file_size = null;
    public ?int $sample_height = null;
    public ?string $sample_url = null;
    public ?int $sample_width = null;
    public ?int $score = null;
    public ?string $source = null;
    public ?string $status = null;
    public ?string $tag = null;
    public ?array $vote = null;
    public ?int $width = null;
}

/** Match filter for Post#list (any subset of Post fields). */
class PostListMatch
{
    public ?int $actual_preview_height = null;
    public ?int $actual_preview_width = null;
    public ?string $author = null;
    public ?int $change = null;
    public ?int $created_at = null;
    public ?int $creator_id = null;
    public ?int $file_size = null;
    public ?string $file_url = null;
    public ?array $flag_detail = null;
    public ?array $frame = null;
    public ?array $frames_pending = null;
    public ?string $frames_pending_string = null;
    public ?string $frames_string = null;
    public ?bool $has_child = null;
    public ?int $height = null;
    public ?int $id = null;
    public ?bool $is_held = null;
    public ?bool $is_shown_in_index = null;
    public ?int $jpeg_file_size = null;
    public ?int $jpeg_height = null;
    public ?string $jpeg_url = null;
    public ?int $jpeg_width = null;
    public ?string $md5 = null;
    public ?int $parent_id = null;
    public ?array $pool_id = null;
    public ?int $preview_height = null;
    public ?string $preview_url = null;
    public ?int $preview_width = null;
    public ?string $rating = null;
    public ?int $sample_file_size = null;
    public ?int $sample_height = null;
    public ?string $sample_url = null;
    public ?int $sample_width = null;
    public ?int $score = null;
    public ?string $source = null;
    public ?string $status = null;
    public ?string $tag = null;
    public ?array $vote = null;
    public ?int $width = null;
}

