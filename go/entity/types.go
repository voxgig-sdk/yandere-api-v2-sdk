// Typed models for the YandereApiV2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Post is the typed data model for the post entity.
type Post struct {
	ActualPreviewHeight *int `json:"actual_preview_height,omitempty"`
	ActualPreviewWidth *int `json:"actual_preview_width,omitempty"`
	Author *string `json:"author,omitempty"`
	Change *int `json:"change,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CreatorId *int `json:"creator_id,omitempty"`
	FileSize *int `json:"file_size,omitempty"`
	FileUrl *string `json:"file_url,omitempty"`
	FlagDetail *map[string]any `json:"flag_detail,omitempty"`
	Frame *[]any `json:"frame,omitempty"`
	FramesPending *[]any `json:"frames_pending,omitempty"`
	FramesPendingString *string `json:"frames_pending_string,omitempty"`
	FramesString *string `json:"frames_string,omitempty"`
	HasChild *bool `json:"has_child,omitempty"`
	Height *int `json:"height,omitempty"`
	Id *int `json:"id,omitempty"`
	IsHeld *bool `json:"is_held,omitempty"`
	IsShownInIndex *bool `json:"is_shown_in_index,omitempty"`
	JpegFileSize *int `json:"jpeg_file_size,omitempty"`
	JpegHeight *int `json:"jpeg_height,omitempty"`
	JpegUrl *string `json:"jpeg_url,omitempty"`
	JpegWidth *int `json:"jpeg_width,omitempty"`
	Md5 *string `json:"md5,omitempty"`
	ParentId *int `json:"parent_id,omitempty"`
	PoolId *[]any `json:"pool_id,omitempty"`
	PreviewHeight *int `json:"preview_height,omitempty"`
	PreviewUrl *string `json:"preview_url,omitempty"`
	PreviewWidth *int `json:"preview_width,omitempty"`
	Rating *string `json:"rating,omitempty"`
	SampleFileSize *int `json:"sample_file_size,omitempty"`
	SampleHeight *int `json:"sample_height,omitempty"`
	SampleUrl *string `json:"sample_url,omitempty"`
	SampleWidth *int `json:"sample_width,omitempty"`
	Score *int `json:"score,omitempty"`
	Source *string `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
	Tag *string `json:"tag,omitempty"`
	Vote *map[string]any `json:"vote,omitempty"`
	Width *int `json:"width,omitempty"`
}

// PostListMatch mirrors the post fields as an all-optional match
// filter (Go analog of Partial<Post>).
type PostListMatch struct {
	ActualPreviewHeight *int `json:"actual_preview_height,omitempty"`
	ActualPreviewWidth *int `json:"actual_preview_width,omitempty"`
	Author *string `json:"author,omitempty"`
	Change *int `json:"change,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CreatorId *int `json:"creator_id,omitempty"`
	FileSize *int `json:"file_size,omitempty"`
	FileUrl *string `json:"file_url,omitempty"`
	FlagDetail *map[string]any `json:"flag_detail,omitempty"`
	Frame *[]any `json:"frame,omitempty"`
	FramesPending *[]any `json:"frames_pending,omitempty"`
	FramesPendingString *string `json:"frames_pending_string,omitempty"`
	FramesString *string `json:"frames_string,omitempty"`
	HasChild *bool `json:"has_child,omitempty"`
	Height *int `json:"height,omitempty"`
	Id *int `json:"id,omitempty"`
	IsHeld *bool `json:"is_held,omitempty"`
	IsShownInIndex *bool `json:"is_shown_in_index,omitempty"`
	JpegFileSize *int `json:"jpeg_file_size,omitempty"`
	JpegHeight *int `json:"jpeg_height,omitempty"`
	JpegUrl *string `json:"jpeg_url,omitempty"`
	JpegWidth *int `json:"jpeg_width,omitempty"`
	Md5 *string `json:"md5,omitempty"`
	ParentId *int `json:"parent_id,omitempty"`
	PoolId *[]any `json:"pool_id,omitempty"`
	PreviewHeight *int `json:"preview_height,omitempty"`
	PreviewUrl *string `json:"preview_url,omitempty"`
	PreviewWidth *int `json:"preview_width,omitempty"`
	Rating *string `json:"rating,omitempty"`
	SampleFileSize *int `json:"sample_file_size,omitempty"`
	SampleHeight *int `json:"sample_height,omitempty"`
	SampleUrl *string `json:"sample_url,omitempty"`
	SampleWidth *int `json:"sample_width,omitempty"`
	Score *int `json:"score,omitempty"`
	Source *string `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
	Tag *string `json:"tag,omitempty"`
	Vote *map[string]any `json:"vote,omitempty"`
	Width *int `json:"width,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
