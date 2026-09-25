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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"title": "Actual Preview Height",
						"type": "`$INTEGER`",
						"short": "Actual height of the preview image",
					},
					map[string]any{
						"name": "actual_preview_width",
						"title": "Actual Preview Width",
						"type": "`$INTEGER`",
						"short": "Actual width of the preview image",
					},
					map[string]any{
						"name": "author",
						"title": "Author",
						"type": "`$STRING`",
						"short": "Username of the post creator",
					},
					map[string]any{
						"name": "change",
						"title": "Change",
						"type": "`$INTEGER`",
						"short": "Change number/version",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$INTEGER`",
						"short": "Unix timestamp of when the post was created",
					},
					map[string]any{
						"name": "creator_id",
						"title": "Creator Id",
						"type": "`$INTEGER`",
						"short": "User ID of the post creator",
					},
					map[string]any{
						"name": "file_size",
						"title": "File Size",
						"type": "`$INTEGER`",
						"short": "File size in bytes",
					},
					map[string]any{
						"name": "file_url",
						"title": "File Url",
						"type": "`$STRING`",
						"short": "URL to the full-size image",
					},
					map[string]any{
						"name": "flag_detail",
						"title": "Flag Detail",
						"type": "`$OBJECT`",
						"short": "Flag details if the post is flagged",
					},
					map[string]any{
						"name": "frames",
						"title": "Frames",
						"type": "`$ARRAY`",
						"short": "Array of frames",
					},
					map[string]any{
						"name": "frames_pending",
						"title": "Frames Pending",
						"type": "`$ARRAY`",
						"short": "Array of pending frames",
					},
					map[string]any{
						"name": "frames_pending_string",
						"title": "Frames Pending String",
						"type": "`$STRING`",
						"short": "Pending frames information",
					},
					map[string]any{
						"name": "frames_string",
						"title": "Frames String",
						"type": "`$STRING`",
						"short": "Frames information",
					},
					map[string]any{
						"name": "has_children",
						"title": "Has Children",
						"type": "`$BOOLEAN`",
						"short": "Whether the post has child posts",
					},
					map[string]any{
						"name": "height",
						"title": "Height",
						"type": "`$INTEGER`",
						"short": "Original image height",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"short": "Post ID",
					},
					map[string]any{
						"name": "is_held",
						"title": "Is Held",
						"type": "`$BOOLEAN`",
						"short": "Whether the post is held",
					},
					map[string]any{
						"name": "is_shown_in_index",
						"title": "Is Shown In Index",
						"type": "`$BOOLEAN`",
						"short": "Whether the post is shown in the index",
					},
					map[string]any{
						"name": "jpeg_file_size",
						"title": "Jpeg File Size",
						"type": "`$INTEGER`",
						"short": "File size of the JPEG version in bytes",
					},
					map[string]any{
						"name": "jpeg_height",
						"title": "Jpeg Height",
						"type": "`$INTEGER`",
						"short": "Height of the JPEG version",
					},
					map[string]any{
						"name": "jpeg_url",
						"title": "Jpeg Url",
						"type": "`$STRING`",
						"short": "URL to the JPEG version",
					},
					map[string]any{
						"name": "jpeg_width",
						"title": "Jpeg Width",
						"type": "`$INTEGER`",
						"short": "Width of the JPEG version",
					},
					map[string]any{
						"name": "md5",
						"title": "Md5",
						"type": "`$STRING`",
						"short": "MD5 hash of the image file",
					},
					map[string]any{
						"name": "parent_id",
						"title": "Parent Id",
						"type": "`$INTEGER`",
						"short": "ID of the parent post",
					},
					map[string]any{
						"name": "pool_ids",
						"title": "Pool Ids",
						"type": "`$ARRAY`",
						"short": "Array of pool IDs this post belongs to (included when include_pools=1)",
					},
					map[string]any{
						"name": "preview_height",
						"title": "Preview Height",
						"type": "`$INTEGER`",
						"short": "Height of the preview image",
					},
					map[string]any{
						"name": "preview_url",
						"title": "Preview Url",
						"type": "`$STRING`",
						"short": "URL to the preview/thumbnail image",
					},
					map[string]any{
						"name": "preview_width",
						"title": "Preview Width",
						"type": "`$INTEGER`",
						"short": "Width of the preview image",
					},
					map[string]any{
						"name": "rating",
						"title": "Rating",
						"type": "`$STRING`",
						"short": "Post rating (s=safe, q=questionable, e=explicit)",
					},
					map[string]any{
						"name": "sample_file_size",
						"title": "Sample File Size",
						"type": "`$INTEGER`",
						"short": "File size of the sample image in bytes",
					},
					map[string]any{
						"name": "sample_height",
						"title": "Sample Height",
						"type": "`$INTEGER`",
						"short": "Height of the sample image",
					},
					map[string]any{
						"name": "sample_url",
						"title": "Sample Url",
						"type": "`$STRING`",
						"short": "URL to the sample-size image",
					},
					map[string]any{
						"name": "sample_width",
						"title": "Sample Width",
						"type": "`$INTEGER`",
						"short": "Width of the sample image",
					},
					map[string]any{
						"name": "score",
						"title": "Score",
						"type": "`$INTEGER`",
						"short": "Post score",
					},
					map[string]any{
						"name": "source",
						"title": "Source",
						"type": "`$STRING`",
						"short": "Source URL of the image",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"short": "Post status",
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$STRING`",
						"short": "Space-separated list of tags associated with the post",
					},
					map[string]any{
						"name": "votes",
						"title": "Votes",
						"type": "`$OBJECT`",
						"short": "Vote information (included when include_votes=1)",
					},
					map[string]any{
						"name": "width",
						"title": "Width",
						"type": "`$INTEGER`",
						"short": "Original image width",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "post",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/post.json",
								"segments": []any{
									map[string]any{
										"lit": "post.json",
									},
								},
								"parts": []any{
									"post.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "api_version",
											"orig": "api_version",
											"type": "`$INTEGER`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "include_pool",
											"orig": "include_pool",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "include_tag",
											"orig": "include_tag",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "include_vote",
											"orig": "include_vote",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "tag",
											"orig": "tag",
											"type": "`$STRING`",
											"kind": "query",
											"example": "holds:false",
										},
									},
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
