# frozen_string_literal: true

# Typed models for the YandereApiV2 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Post entity data model.
#
# @!attribute [rw] actual_preview_height
#   @return [Integer, nil]
#
# @!attribute [rw] actual_preview_width
#   @return [Integer, nil]
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] change
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [Integer, nil]
#
# @!attribute [rw] creator_id
#   @return [Integer, nil]
#
# @!attribute [rw] file_size
#   @return [Integer, nil]
#
# @!attribute [rw] file_url
#   @return [String, nil]
#
# @!attribute [rw] flag_detail
#   @return [Hash, nil]
#
# @!attribute [rw] frame
#   @return [Array, nil]
#
# @!attribute [rw] frames_pending
#   @return [Array, nil]
#
# @!attribute [rw] frames_pending_string
#   @return [String, nil]
#
# @!attribute [rw] frames_string
#   @return [String, nil]
#
# @!attribute [rw] has_child
#   @return [Boolean, nil]
#
# @!attribute [rw] height
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] is_held
#   @return [Boolean, nil]
#
# @!attribute [rw] is_shown_in_index
#   @return [Boolean, nil]
#
# @!attribute [rw] jpeg_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] jpeg_height
#   @return [Integer, nil]
#
# @!attribute [rw] jpeg_url
#   @return [String, nil]
#
# @!attribute [rw] jpeg_width
#   @return [Integer, nil]
#
# @!attribute [rw] md5
#   @return [String, nil]
#
# @!attribute [rw] parent_id
#   @return [Integer, nil]
#
# @!attribute [rw] pool_id
#   @return [Array, nil]
#
# @!attribute [rw] preview_height
#   @return [Integer, nil]
#
# @!attribute [rw] preview_url
#   @return [String, nil]
#
# @!attribute [rw] preview_width
#   @return [Integer, nil]
#
# @!attribute [rw] rating
#   @return [String, nil]
#
# @!attribute [rw] sample_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] sample_height
#   @return [Integer, nil]
#
# @!attribute [rw] sample_url
#   @return [String, nil]
#
# @!attribute [rw] sample_width
#   @return [Integer, nil]
#
# @!attribute [rw] score
#   @return [Integer, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [String, nil]
#
# @!attribute [rw] vote
#   @return [Hash, nil]
#
# @!attribute [rw] width
#   @return [Integer, nil]
Post = Struct.new(
  :actual_preview_height,
  :actual_preview_width,
  :author,
  :change,
  :created_at,
  :creator_id,
  :file_size,
  :file_url,
  :flag_detail,
  :frame,
  :frames_pending,
  :frames_pending_string,
  :frames_string,
  :has_child,
  :height,
  :id,
  :is_held,
  :is_shown_in_index,
  :jpeg_file_size,
  :jpeg_height,
  :jpeg_url,
  :jpeg_width,
  :md5,
  :parent_id,
  :pool_id,
  :preview_height,
  :preview_url,
  :preview_width,
  :rating,
  :sample_file_size,
  :sample_height,
  :sample_url,
  :sample_width,
  :score,
  :source,
  :status,
  :tag,
  :vote,
  :width,
  keyword_init: true
)

# Match filter for Post#list (any subset of Post fields).
#
# @!attribute [rw] actual_preview_height
#   @return [Integer, nil]
#
# @!attribute [rw] actual_preview_width
#   @return [Integer, nil]
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] change
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [Integer, nil]
#
# @!attribute [rw] creator_id
#   @return [Integer, nil]
#
# @!attribute [rw] file_size
#   @return [Integer, nil]
#
# @!attribute [rw] file_url
#   @return [String, nil]
#
# @!attribute [rw] flag_detail
#   @return [Hash, nil]
#
# @!attribute [rw] frame
#   @return [Array, nil]
#
# @!attribute [rw] frames_pending
#   @return [Array, nil]
#
# @!attribute [rw] frames_pending_string
#   @return [String, nil]
#
# @!attribute [rw] frames_string
#   @return [String, nil]
#
# @!attribute [rw] has_child
#   @return [Boolean, nil]
#
# @!attribute [rw] height
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] is_held
#   @return [Boolean, nil]
#
# @!attribute [rw] is_shown_in_index
#   @return [Boolean, nil]
#
# @!attribute [rw] jpeg_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] jpeg_height
#   @return [Integer, nil]
#
# @!attribute [rw] jpeg_url
#   @return [String, nil]
#
# @!attribute [rw] jpeg_width
#   @return [Integer, nil]
#
# @!attribute [rw] md5
#   @return [String, nil]
#
# @!attribute [rw] parent_id
#   @return [Integer, nil]
#
# @!attribute [rw] pool_id
#   @return [Array, nil]
#
# @!attribute [rw] preview_height
#   @return [Integer, nil]
#
# @!attribute [rw] preview_url
#   @return [String, nil]
#
# @!attribute [rw] preview_width
#   @return [Integer, nil]
#
# @!attribute [rw] rating
#   @return [String, nil]
#
# @!attribute [rw] sample_file_size
#   @return [Integer, nil]
#
# @!attribute [rw] sample_height
#   @return [Integer, nil]
#
# @!attribute [rw] sample_url
#   @return [String, nil]
#
# @!attribute [rw] sample_width
#   @return [Integer, nil]
#
# @!attribute [rw] score
#   @return [Integer, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [String, nil]
#
# @!attribute [rw] vote
#   @return [Hash, nil]
#
# @!attribute [rw] width
#   @return [Integer, nil]
PostListMatch = Struct.new(
  :actual_preview_height,
  :actual_preview_width,
  :author,
  :change,
  :created_at,
  :creator_id,
  :file_size,
  :file_url,
  :flag_detail,
  :frame,
  :frames_pending,
  :frames_pending_string,
  :frames_string,
  :has_child,
  :height,
  :id,
  :is_held,
  :is_shown_in_index,
  :jpeg_file_size,
  :jpeg_height,
  :jpeg_url,
  :jpeg_width,
  :md5,
  :parent_id,
  :pool_id,
  :preview_height,
  :preview_url,
  :preview_width,
  :rating,
  :sample_file_size,
  :sample_height,
  :sample_url,
  :sample_width,
  :score,
  :source,
  :status,
  :tag,
  :vote,
  :width,
  keyword_init: true
)

