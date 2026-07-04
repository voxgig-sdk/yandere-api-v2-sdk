// Typed models for the YandereApiV2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Post {
  actual_preview_height?: number
  actual_preview_width?: number
  author?: string
  change?: number
  created_at?: number
  creator_id?: number
  file_size?: number
  file_url?: string
  flag_detail?: Record<string, any>
  frame?: any[]
  frames_pending?: any[]
  frames_pending_string?: string
  frames_string?: string
  has_child?: boolean
  height?: number
  id?: number
  is_held?: boolean
  is_shown_in_index?: boolean
  jpeg_file_size?: number
  jpeg_height?: number
  jpeg_url?: string
  jpeg_width?: number
  md5?: string
  parent_id?: number
  pool_id?: any[]
  preview_height?: number
  preview_url?: string
  preview_width?: number
  rating?: string
  sample_file_size?: number
  sample_height?: number
  sample_url?: string
  sample_width?: number
  score?: number
  source?: string
  status?: string
  tag?: string
  vote?: Record<string, any>
  width?: number
}

export type PostListMatch = Partial<Post>

