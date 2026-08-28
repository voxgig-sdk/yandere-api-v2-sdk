// Typed models for the YandereApiV2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/yandere-api-v2-sdk/go/core"
)

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
	Frames *[]any `json:"frames,omitempty"`
	FramesPending *[]any `json:"frames_pending,omitempty"`
	FramesPendingString *string `json:"frames_pending_string,omitempty"`
	FramesString *string `json:"frames_string,omitempty"`
	HasChildren *bool `json:"has_children,omitempty"`
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
	PoolIds *[]any `json:"pool_ids,omitempty"`
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
	Tags *string `json:"tags,omitempty"`
	Votes *map[string]any `json:"votes,omitempty"`
	Width *int `json:"width,omitempty"`
}

// PostListMatch is the typed request payload for Post.ListTyped.
type PostListMatch struct {
	ApiVersion int `json:"api_version"`
	Filter *int `json:"filter,omitempty"`
	IncludePool *int `json:"include_pool,omitempty"`
	IncludeTag *int `json:"include_tag,omitempty"`
	IncludeVote *int `json:"include_vote,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Tag *string `json:"tag,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
