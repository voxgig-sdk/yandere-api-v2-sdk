# Typed models for the YandereApiV2 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Post(TypedDict, total=False):
    actual_preview_height: int
    actual_preview_width: int
    author: str
    change: int
    created_at: int
    creator_id: int
    file_size: int
    file_url: str
    flag_detail: dict
    frame: list
    frames_pending: list
    frames_pending_string: str
    frames_string: str
    has_child: bool
    height: int
    id: int
    is_held: bool
    is_shown_in_index: bool
    jpeg_file_size: int
    jpeg_height: int
    jpeg_url: str
    jpeg_width: int
    md5: str
    parent_id: int
    pool_id: list
    preview_height: int
    preview_url: str
    preview_width: int
    rating: str
    sample_file_size: int
    sample_height: int
    sample_url: str
    sample_width: int
    score: int
    source: str
    status: str
    tag: str
    vote: dict
    width: int


class PostListMatch(TypedDict, total=False):
    actual_preview_height: int
    actual_preview_width: int
    author: str
    change: int
    created_at: int
    creator_id: int
    file_size: int
    file_url: str
    flag_detail: dict
    frame: list
    frames_pending: list
    frames_pending_string: str
    frames_string: str
    has_child: bool
    height: int
    id: int
    is_held: bool
    is_shown_in_index: bool
    jpeg_file_size: int
    jpeg_height: int
    jpeg_url: str
    jpeg_width: int
    md5: str
    parent_id: int
    pool_id: list
    preview_height: int
    preview_url: str
    preview_width: int
    rating: str
    sample_file_size: int
    sample_height: int
    sample_url: str
    sample_width: int
    score: int
    source: str
    status: str
    tag: str
    vote: dict
    width: int
