"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "post",
        "accessor": "Post",
        "op": "list",
        "method": "GET",
        "path": "/post.json",
        "args": [],
        "select": {
            "api_version": "v1",
            "filter": "v1",
            "include_pool": 0,
            "include_tag": 0,
            "include_vote": 0,
            "limit": 20,
            "tag": "holds:false"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "api_version",
            "tags",
            "limit",
            "include_tags",
            "include_votes",
            "include_pools",
            "filter"
        ],
        "queryArgs": [
            {
                "name": "api_version",
                "wire": "api_version"
            },
            {
                "name": "filter",
                "wire": "filter"
            },
            {
                "name": "include_pool",
                "wire": "include_pools"
            },
            {
                "name": "include_tag",
                "wire": "include_tags"
            },
            {
                "name": "include_vote",
                "wire": "include_votes"
            },
            {
                "name": "limit",
                "wire": "limit"
            },
            {
                "name": "tag",
                "wire": "tags"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "posts": [
                {
                    "id": 1,
                    "tags": "x",
                    "created_at": 1,
                    "creator_id": 1,
                    "author": "x",
                    "change": 1,
                    "source": "x",
                    "score": 1,
                    "md5": "x",
                    "file_size": 1,
                    "file_url": "x",
                    "is_shown_in_index": true,
                    "preview_url": "x",
                    "preview_width": 1,
                    "preview_height": 1,
                    "actual_preview_width": 1,
                    "actual_preview_height": 1,
                    "sample_url": "x",
                    "sample_width": 1,
                    "sample_height": 1,
                    "sample_file_size": 1,
                    "jpeg_url": "x",
                    "jpeg_width": 1,
                    "jpeg_height": 1,
                    "jpeg_file_size": 1,
                    "rating": "x",
                    "has_children": true,
                    "parent_id": 1,
                    "status": "x",
                    "width": 1,
                    "height": 1,
                    "is_held": true,
                    "frames_pending_string": "x",
                    "frames_pending": [
                        "x"
                    ],
                    "frames_string": "x",
                    "frames": [
                        "x"
                    ],
                    "flag_detail": {},
                    "votes": {
                        "up": 1,
                        "down": 1
                    },
                    "pool_ids": [
                        1
                    ]
                }
            ],
            "tags": {},
            "pools": {}
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map