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
            "include_pool": "v1",
            "include_tag": "v1",
            "include_vote": "v1",
            "limit": "v1",
            "tag": "v1"
        },
        "headers": [],
        "query": [
            "api_version",
            "tags",
            "limit",
            "include_tags",
            "include_votes",
            "include_pools",
            "filter"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "posts": [
                {
                    "actual_preview_height": 1,
                    "actual_preview_width": 1,
                    "author": "x",
                    "change": 1,
                    "created_at": 1,
                    "creator_id": 1,
                    "file_size": 1,
                    "file_url": "x",
                    "flag_detail": {},
                    "frames": [
                        "x"
                    ],
                    "frames_pending": [
                        "x"
                    ],
                    "frames_pending_string": "x",
                    "frames_string": "x",
                    "has_children": true,
                    "height": 1,
                    "id": 1,
                    "is_held": true,
                    "is_shown_in_index": true,
                    "jpeg_file_size": 1,
                    "jpeg_height": 1,
                    "jpeg_url": "x",
                    "jpeg_width": 1,
                    "md5": "x",
                    "parent_id": 1,
                    "pool_ids": [
                        1
                    ],
                    "preview_height": 1,
                    "preview_url": "x",
                    "preview_width": 1,
                    "rating": "x",
                    "sample_file_size": 1,
                    "sample_height": 1,
                    "sample_url": "x",
                    "sample_width": 1,
                    "score": 1,
                    "source": "x",
                    "status": "x",
                    "tags": "x",
                    "votes": {
                        "down": 1,
                        "up": 1
                    },
                    "width": 1
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