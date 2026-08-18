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
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "actual_preview_width",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "author",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "change",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "creator_id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "file_size",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "file_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "flag_detail",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "frames",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "frames_pending",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "frames_pending_string",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "frames_string",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "has_children",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "height",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "is_held",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_shown_in_index",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "jpeg_file_size",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "jpeg_height",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "jpeg_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "jpeg_width",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "md5",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "parent_id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "pool_ids",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "preview_height",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "preview_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "preview_width",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "rating",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sample_file_size",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "sample_height",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "sample_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sample_width",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "score",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "source",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tags",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "votes",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "width",
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
