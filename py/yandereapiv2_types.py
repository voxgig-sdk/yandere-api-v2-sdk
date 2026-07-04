# Typed models for the YandereApiV2 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Post:
    actual_preview_height: Optional[int] = None
    actual_preview_width: Optional[int] = None
    author: Optional[str] = None
    change: Optional[int] = None
    created_at: Optional[int] = None
    creator_id: Optional[int] = None
    file_size: Optional[int] = None
    file_url: Optional[str] = None
    flag_detail: Optional[dict] = None
    frame: Optional[list] = None
    frames_pending: Optional[list] = None
    frames_pending_string: Optional[str] = None
    frames_string: Optional[str] = None
    has_child: Optional[bool] = None
    height: Optional[int] = None
    id: Optional[int] = None
    is_held: Optional[bool] = None
    is_shown_in_index: Optional[bool] = None
    jpeg_file_size: Optional[int] = None
    jpeg_height: Optional[int] = None
    jpeg_url: Optional[str] = None
    jpeg_width: Optional[int] = None
    md5: Optional[str] = None
    parent_id: Optional[int] = None
    pool_id: Optional[list] = None
    preview_height: Optional[int] = None
    preview_url: Optional[str] = None
    preview_width: Optional[int] = None
    rating: Optional[str] = None
    sample_file_size: Optional[int] = None
    sample_height: Optional[int] = None
    sample_url: Optional[str] = None
    sample_width: Optional[int] = None
    score: Optional[int] = None
    source: Optional[str] = None
    status: Optional[str] = None
    tag: Optional[str] = None
    vote: Optional[dict] = None
    width: Optional[int] = None


@dataclass
class PostListMatch:
    actual_preview_height: Optional[int] = None
    actual_preview_width: Optional[int] = None
    author: Optional[str] = None
    change: Optional[int] = None
    created_at: Optional[int] = None
    creator_id: Optional[int] = None
    file_size: Optional[int] = None
    file_url: Optional[str] = None
    flag_detail: Optional[dict] = None
    frame: Optional[list] = None
    frames_pending: Optional[list] = None
    frames_pending_string: Optional[str] = None
    frames_string: Optional[str] = None
    has_child: Optional[bool] = None
    height: Optional[int] = None
    id: Optional[int] = None
    is_held: Optional[bool] = None
    is_shown_in_index: Optional[bool] = None
    jpeg_file_size: Optional[int] = None
    jpeg_height: Optional[int] = None
    jpeg_url: Optional[str] = None
    jpeg_width: Optional[int] = None
    md5: Optional[str] = None
    parent_id: Optional[int] = None
    pool_id: Optional[list] = None
    preview_height: Optional[int] = None
    preview_url: Optional[str] = None
    preview_width: Optional[int] = None
    rating: Optional[str] = None
    sample_file_size: Optional[int] = None
    sample_height: Optional[int] = None
    sample_url: Optional[str] = None
    sample_width: Optional[int] = None
    score: Optional[int] = None
    source: Optional[str] = None
    status: Optional[str] = None
    tag: Optional[str] = None
    vote: Optional[dict] = None
    width: Optional[int] = None

