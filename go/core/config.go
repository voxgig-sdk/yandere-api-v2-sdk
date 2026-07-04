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
						"active": true,
						"name": "actual_preview_height",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "actual_preview_width",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "author",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "change",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "creator_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "file_size",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "file_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "flag_detail",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "frame",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "frames_pending",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "frames_pending_string",
						"req": false,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "frames_string",
						"req": false,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "has_child",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "height",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "is_held",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "is_shown_in_index",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "jpeg_file_size",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "jpeg_height",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "jpeg_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "jpeg_width",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "md5",
						"req": false,
						"type": "`$STRING`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "parent_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "pool_id",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 24,
					},
					map[string]any{
						"active": true,
						"name": "preview_height",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 25,
					},
					map[string]any{
						"active": true,
						"name": "preview_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 26,
					},
					map[string]any{
						"active": true,
						"name": "preview_width",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 27,
					},
					map[string]any{
						"active": true,
						"name": "rating",
						"req": false,
						"type": "`$STRING`",
						"index$": 28,
					},
					map[string]any{
						"active": true,
						"name": "sample_file_size",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 29,
					},
					map[string]any{
						"active": true,
						"name": "sample_height",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 30,
					},
					map[string]any{
						"active": true,
						"name": "sample_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 31,
					},
					map[string]any{
						"active": true,
						"name": "sample_width",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 32,
					},
					map[string]any{
						"active": true,
						"name": "score",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 33,
					},
					map[string]any{
						"active": true,
						"name": "source",
						"req": false,
						"type": "`$STRING`",
						"index$": 34,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": false,
						"type": "`$STRING`",
						"index$": 35,
					},
					map[string]any{
						"active": true,
						"name": "tag",
						"req": false,
						"type": "`$STRING`",
						"index$": 36,
					},
					map[string]any{
						"active": true,
						"name": "vote",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 37,
					},
					map[string]any{
						"active": true,
						"name": "width",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 38,
					},
				},
				"name": "post",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "api_version",
											"orig": "api_version",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "include_pool",
											"orig": "include_pool",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "include_tag",
											"orig": "include_tag",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "include_vote",
											"orig": "include_vote",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 20,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": "holds:false",
											"kind": "query",
											"name": "tag",
											"orig": "tag",
											"reqd": false,
											"type": "`$STRING`",
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
								"index$": 0,
							},
						},
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
