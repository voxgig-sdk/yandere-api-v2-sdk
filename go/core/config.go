package core

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
			"auth": map[string]any{
				"prefix": "Bearer",
			},
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
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "actual_preview_width",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "author",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "change",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "created_at",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "creator_id",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "file_size",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "file_url",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "flag_detail",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "frame",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "frames_pending",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "frames_pending_string",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "frames_string",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "has_child",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 13,
					},
					map[string]any{
						"name": "height",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 14,
					},
					map[string]any{
						"name": "id",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 15,
					},
					map[string]any{
						"name": "is_held",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 16,
					},
					map[string]any{
						"name": "is_shown_in_index",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 17,
					},
					map[string]any{
						"name": "jpeg_file_size",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 18,
					},
					map[string]any{
						"name": "jpeg_height",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 19,
					},
					map[string]any{
						"name": "jpeg_url",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 20,
					},
					map[string]any{
						"name": "jpeg_width",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 21,
					},
					map[string]any{
						"name": "md5",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 22,
					},
					map[string]any{
						"name": "parent_id",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 23,
					},
					map[string]any{
						"name": "pool_id",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 24,
					},
					map[string]any{
						"name": "preview_height",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 25,
					},
					map[string]any{
						"name": "preview_url",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 26,
					},
					map[string]any{
						"name": "preview_width",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 27,
					},
					map[string]any{
						"name": "rating",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 28,
					},
					map[string]any{
						"name": "sample_file_size",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 29,
					},
					map[string]any{
						"name": "sample_height",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 30,
					},
					map[string]any{
						"name": "sample_url",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 31,
					},
					map[string]any{
						"name": "sample_width",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 32,
					},
					map[string]any{
						"name": "score",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 33,
					},
					map[string]any{
						"name": "source",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 34,
					},
					map[string]any{
						"name": "status",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 35,
					},
					map[string]any{
						"name": "tag",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 36,
					},
					map[string]any{
						"name": "vote",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 37,
					},
					map[string]any{
						"name": "width",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 38,
					},
				},
				"name": "post",
				"op": map[string]any{
					"list": map[string]any{
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
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "include_pool",
											"orig": "include_pool",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "include_tag",
											"orig": "include_tag",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "include_vote",
											"orig": "include_vote",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": "holds:false",
											"kind": "query",
											"name": "tag",
											"orig": "tag",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
