package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "YandereApiV2",
			"slug": "yandere-api-v2",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://yande.re",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"post": map[string]any{},
			},
		},
		"entity": map[string]any{
			"post": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "actual_preview_height",
						"short": "Actual height of the preview image",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "actual_preview_width",
						"short": "Actual width of the preview image",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "author",
						"short": "Username of the post creator",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "change",
						"short": "Change number/version",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "created_at",
						"short": "Unix timestamp of when the post was created",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "creator_id",
						"short": "User ID of the post creator",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "file_size",
						"short": "File size in bytes",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "file_url",
						"short": "URL to the full-size image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "flag_detail",
						"short": "Flag details if the post is flagged",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "frames",
						"short": "Array of frames",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "frames_pending",
						"short": "Array of pending frames",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "frames_pending_string",
						"short": "Pending frames information",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "frames_string",
						"short": "Frames information",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "has_children",
						"short": "Whether the post has child posts",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "height",
						"short": "Original image height",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "Post ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "is_held",
						"short": "Whether the post is held",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_shown_in_index",
						"short": "Whether the post is shown in the index",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "jpeg_file_size",
						"short": "File size of the JPEG version in bytes",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "jpeg_height",
						"short": "Height of the JPEG version",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "jpeg_url",
						"short": "URL to the JPEG version",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "jpeg_width",
						"short": "Width of the JPEG version",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "md5",
						"short": "MD5 hash of the image file",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "parent_id",
						"short": "ID of the parent post",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "pool_ids",
						"short": "Array of pool IDs this post belongs to (included when include_pools=1)",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "preview_height",
						"short": "Height of the preview image",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "preview_url",
						"short": "URL to the preview/thumbnail image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "preview_width",
						"short": "Width of the preview image",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "rating",
						"short": "Post rating (s=safe, q=questionable, e=explicit)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sample_file_size",
						"short": "File size of the sample image in bytes",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "sample_height",
						"short": "Height of the sample image",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "sample_url",
						"short": "URL to the sample-size image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sample_width",
						"short": "Width of the sample image",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "score",
						"short": "Post score",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "source",
						"short": "Source URL of the image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "Post status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tags",
						"short": "Space-separated list of tags associated with the post",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "votes",
						"short": "Vote information (included when include_votes=1)",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "width",
						"short": "Original image width",
						"type": "`$INTEGER`",
					},
				},
				"name": "post",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "api_version",
											"orig": "api_version",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "include_pool",
											"orig": "include_pool",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "include_tag",
											"orig": "include_tag",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "include_vote",
											"orig": "include_vote",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "holds:false",
											"kind": "query",
											"name": "tag",
											"orig": "tag",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/post.json",
								"parts": []any{
									"post.json",
								},
								"select": map[string]any{
									"exist": []any{
										"api_version",
										"filter",
										"include_pool",
										"include_tag",
										"include_vote",
										"limit",
										"tag",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
