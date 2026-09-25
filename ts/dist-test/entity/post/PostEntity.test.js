"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('PostEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when YANDERE_API_V2_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('YANDERE_API_V2_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.YandereApiV2SDK.test();
        const ent = testsdk.Post();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.YANDERE_API_V2_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'post.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "actual_preview_height": { "a": true, "h": "Actual Preview Height", "n": "actual_preview_height", "r": false, "sh": "Actual height of the preview image", "t": "`$INTEGER`", "key$": "actual_preview_height", "index$": 0 }, "actual_preview_width": { "a": true, "h": "Actual Preview Width", "n": "actual_preview_width", "r": false, "sh": "Actual width of the preview image", "t": "`$INTEGER`", "key$": "actual_preview_width", "index$": 1 }, "author": { "a": true, "h": "Author", "n": "author", "r": false, "sh": "Username of the post creator", "t": "`$STRING`", "key$": "author", "index$": 2 }, "change": { "a": true, "h": "Change", "n": "change", "r": false, "sh": "Change number/version", "t": "`$INTEGER`", "key$": "change", "index$": 3 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "sh": "Unix timestamp of when the post was created", "t": "`$INTEGER`", "key$": "created_at", "index$": 4 }, "creator_id": { "a": true, "h": "Creator Id", "n": "creator_id", "r": false, "sh": "User ID of the post creator", "t": "`$INTEGER`", "key$": "creator_id", "index$": 5 }, "file_size": { "a": true, "h": "File Size", "n": "file_size", "r": false, "sh": "File size in bytes", "t": "`$INTEGER`", "key$": "file_size", "index$": 6 }, "file_url": { "a": true, "h": "File Url", "n": "file_url", "r": false, "sh": "URL to the full-size image", "t": "`$STRING`", "key$": "file_url", "index$": 7 }, "flag_detail": { "a": true, "h": "Flag Detail", "n": "flag_detail", "r": false, "sh": "Flag details if the post is flagged", "t": "`$OBJECT`", "key$": "flag_detail", "index$": 8 }, "frames": { "a": true, "h": "Frames", "n": "frames", "r": false, "sh": "Array of frames", "t": "`$ARRAY`", "key$": "frames", "index$": 9 }, "frames_pending": { "a": true, "h": "Frames Pending", "n": "frames_pending", "r": false, "sh": "Array of pending frames", "t": "`$ARRAY`", "key$": "frames_pending", "index$": 10 }, "frames_pending_string": { "a": true, "h": "Frames Pending String", "n": "frames_pending_string", "r": false, "sh": "Pending frames information", "t": "`$STRING`", "key$": "frames_pending_string", "index$": 11 }, "frames_string": { "a": true, "h": "Frames String", "n": "frames_string", "r": false, "sh": "Frames information", "t": "`$STRING`", "key$": "frames_string", "index$": 12 }, "has_children": { "a": true, "h": "Has Children", "n": "has_children", "r": false, "sh": "Whether the post has child posts", "t": "`$BOOLEAN`", "key$": "has_children", "index$": 13 }, "height": { "a": true, "h": "Height", "n": "height", "r": false, "sh": "Original image height", "t": "`$INTEGER`", "key$": "height", "index$": 14 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Post ID", "t": "`$INTEGER`", "key$": "id", "index$": 15 }, "is_held": { "a": true, "h": "Is Held", "n": "is_held", "r": false, "sh": "Whether the post is held", "t": "`$BOOLEAN`", "key$": "is_held", "index$": 16 }, "is_shown_in_index": { "a": true, "h": "Is Shown In Index", "n": "is_shown_in_index", "r": false, "sh": "Whether the post is shown in the index", "t": "`$BOOLEAN`", "key$": "is_shown_in_index", "index$": 17 }, "jpeg_file_size": { "a": true, "h": "Jpeg File Size", "n": "jpeg_file_size", "r": false, "sh": "File size of the JPEG version in bytes", "t": "`$INTEGER`", "key$": "jpeg_file_size", "index$": 18 }, "jpeg_height": { "a": true, "h": "Jpeg Height", "n": "jpeg_height", "r": false, "sh": "Height of the JPEG version", "t": "`$INTEGER`", "key$": "jpeg_height", "index$": 19 }, "jpeg_url": { "a": true, "h": "Jpeg Url", "n": "jpeg_url", "r": false, "sh": "URL to the JPEG version", "t": "`$STRING`", "key$": "jpeg_url", "index$": 20 }, "jpeg_width": { "a": true, "h": "Jpeg Width", "n": "jpeg_width", "r": false, "sh": "Width of the JPEG version", "t": "`$INTEGER`", "key$": "jpeg_width", "index$": 21 }, "md5": { "a": true, "h": "Md5", "n": "md5", "r": false, "sh": "MD5 hash of the image file", "t": "`$STRING`", "key$": "md5", "index$": 22 }, "parent_id": { "a": true, "h": "Parent Id", "n": "parent_id", "r": false, "sh": "ID of the parent post", "t": "`$INTEGER`", "key$": "parent_id", "index$": 23 }, "pool_ids": { "a": true, "h": "Pool Ids", "n": "pool_ids", "r": false, "sh": "Array of pool IDs this post belongs to (included when include_pools=1)", "t": "`$ARRAY`", "key$": "pool_ids", "index$": 24 }, "preview_height": { "a": true, "h": "Preview Height", "n": "preview_height", "r": false, "sh": "Height of the preview image", "t": "`$INTEGER`", "key$": "preview_height", "index$": 25 }, "preview_url": { "a": true, "h": "Preview Url", "n": "preview_url", "r": false, "sh": "URL to the preview/thumbnail image", "t": "`$STRING`", "key$": "preview_url", "index$": 26 }, "preview_width": { "a": true, "h": "Preview Width", "n": "preview_width", "r": false, "sh": "Width of the preview image", "t": "`$INTEGER`", "key$": "preview_width", "index$": 27 }, "rating": { "a": true, "h": "Rating", "n": "rating", "r": false, "sh": "Post rating (s=safe, q=questionable, e=explicit)", "t": "`$STRING`", "key$": "rating", "index$": 28 }, "sample_file_size": { "a": true, "h": "Sample File Size", "n": "sample_file_size", "r": false, "sh": "File size of the sample image in bytes", "t": "`$INTEGER`", "key$": "sample_file_size", "index$": 29 }, "sample_height": { "a": true, "h": "Sample Height", "n": "sample_height", "r": false, "sh": "Height of the sample image", "t": "`$INTEGER`", "key$": "sample_height", "index$": 30 }, "sample_url": { "a": true, "h": "Sample Url", "n": "sample_url", "r": false, "sh": "URL to the sample-size image", "t": "`$STRING`", "key$": "sample_url", "index$": 31 }, "sample_width": { "a": true, "h": "Sample Width", "n": "sample_width", "r": false, "sh": "Width of the sample image", "t": "`$INTEGER`", "key$": "sample_width", "index$": 32 }, "score": { "a": true, "h": "Score", "n": "score", "r": false, "sh": "Post score", "t": "`$INTEGER`", "key$": "score", "index$": 33 }, "source": { "a": true, "h": "Source", "n": "source", "r": false, "sh": "Source URL of the image", "t": "`$STRING`", "key$": "source", "index$": 34 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "Post status", "t": "`$STRING`", "key$": "status", "index$": 35 }, "tags": { "a": true, "h": "Tags", "n": "tags", "r": false, "sh": "Space-separated list of tags associated with the post", "t": "`$STRING`", "key$": "tags", "index$": 36 }, "votes": { "a": true, "h": "Votes", "n": "votes", "r": false, "sh": "Vote information (included when include_votes=1)", "t": "`$OBJECT`", "key$": "votes", "index$": 37 }, "width": { "a": true, "h": "Width", "n": "width", "r": false, "sh": "Original image width", "t": "`$INTEGER`", "key$": "width", "index$": 38 } }, "id": { "field": "id", "name": "id" }, "name": "post", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /post.json", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "api_version", "or": "api_version", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "filter", "or": "filter", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": 0, "k": "query", "n": "include_pool", "or": "include_pool", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": 0, "k": "query", "n": "include_tag", "or": "include_tag", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "ex": 0, "k": "query", "n": "include_vote", "or": "include_vote", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "ex": 20, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "ex": "holds:false", "k": "query", "n": "tag", "or": "tag", "r": false, "t": "`$STRING`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/post.json", "q": { "exist": ["api_version", "filter", "include_pool", "include_tag", "include_vote", "limit", "tag"] }, "r": {}, "s": [{ "lit": "post.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "post", "name__orig": "post", "Name": "Post", "name_": "post", "name-": "post", "NAME": "POST", "index$": 0 }, { "active": true, "entity": "post", "key$": "BasicPostFlow", "kind": "basic", "name": "BasicPostFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "post_ref01" } }], "index$": 0 }] }, 'Post', { "GET /post.json": { "protocol": "http", "operationId": "searchPosts", "responses": { "200": { "description": "Successful response with post data", "content": { "application/json": { "schema": { "type": "object", "properties": { "posts": { "items": { "properties": { "actual_preview_height": { "description": "Actual height of the preview image", "type": "integer", "key$": "actual_preview_height" }, "actual_preview_width": { "description": "Actual width of the preview image", "type": "integer", "key$": "actual_preview_width" }, "author": { "description": "Username of the post creator", "type": "string", "key$": "author" }, "change": { "description": "Change number/version", "type": "integer", "key$": "change" }, "created_at": { "description": "Unix timestamp of when the post was created", "type": "integer", "key$": "created_at" }, "creator_id": { "description": "User ID of the post creator", "type": "integer", "key$": "creator_id" }, "file_size": { "description": "File size in bytes", "type": "integer", "key$": "file_size" }, "file_url": { "description": "URL to the full-size image", "type": "string", "key$": "file_url" }, "flag_detail": { "description": "Flag details if the post is flagged", "type": "object", "key$": "flag_detail" }, "frames": { "description": "Array of frames", "items": { "type": "string" }, "type": "array", "key$": "frames" }, "frames_pending": { "description": "Array of pending frames", "items": { "type": "string" }, "type": "array", "key$": "frames_pending" }, "frames_pending_string": { "description": "Pending frames information", "type": "string", "key$": "frames_pending_string" }, "frames_string": { "description": "Frames information", "type": "string", "key$": "frames_string" }, "has_children": { "description": "Whether the post has child posts", "type": "boolean", "key$": "has_children" }, "height": { "description": "Original image height", "type": "integer", "key$": "height" }, "id": { "description": "Post ID", "type": "integer", "key$": "id" }, "is_held": { "description": "Whether the post is held", "type": "boolean", "key$": "is_held" }, "is_shown_in_index": { "description": "Whether the post is shown in the index", "type": "boolean", "key$": "is_shown_in_index" }, "jpeg_file_size": { "description": "File size of the JPEG version in bytes", "type": "integer", "key$": "jpeg_file_size" }, "jpeg_height": { "description": "Height of the JPEG version", "type": "integer", "key$": "jpeg_height" }, "jpeg_url": { "description": "URL to the JPEG version", "type": "string", "key$": "jpeg_url" }, "jpeg_width": { "description": "Width of the JPEG version", "type": "integer", "key$": "jpeg_width" }, "md5": { "description": "MD5 hash of the image file", "type": "string", "key$": "md5" }, "parent_id": { "description": "ID of the parent post", "nullable": true, "type": "integer", "key$": "parent_id" }, "pool_ids": { "description": "Array of pool IDs this post belongs to (included when include_pools=1)", "items": { "type": "integer" }, "type": "array", "key$": "pool_ids" }, "preview_height": { "description": "Height of the preview image", "type": "integer", "key$": "preview_height" }, "preview_url": { "description": "URL to the preview/thumbnail image", "type": "string", "key$": "preview_url" }, "preview_width": { "description": "Width of the preview image", "type": "integer", "key$": "preview_width" }, "rating": { "description": "Post rating (s=safe, q=questionable, e=explicit)", "type": "string", "key$": "rating" }, "sample_file_size": { "description": "File size of the sample image in bytes", "type": "integer", "key$": "sample_file_size" }, "sample_height": { "description": "Height of the sample image", "type": "integer", "key$": "sample_height" }, "sample_url": { "description": "URL to the sample-size image", "type": "string", "key$": "sample_url" }, "sample_width": { "description": "Width of the sample image", "type": "integer", "key$": "sample_width" }, "score": { "description": "Post score", "type": "integer", "key$": "score" }, "source": { "description": "Source URL of the image", "type": "string", "key$": "source" }, "status": { "description": "Post status", "type": "string", "key$": "status" }, "tags": { "description": "Space-separated list of tags associated with the post", "type": "string", "key$": "tags" }, "votes": { "description": "Vote information (included when include_votes=1)", "properties": { "down": { "type": "integer" }, "up": { "type": "integer" } }, "type": "object", "key$": "votes" }, "width": { "description": "Original image width", "type": "integer", "key$": "width" } }, "type": "object", "x-ref": "#/components/schemas/Post", "index$": 0 }, "key$": "posts", "type": "array" }, "tags": { "additionalProperties": { "properties": { "type": { "description": "Tag type (e.g., character, copyright, artist, general)", "type": "string" } }, "type": "object" }, "description": "Tag type information (included when include_tags=1)", "key$": "tags", "type": "object" }, "pools": { "additionalProperties": { "properties": { "description": { "type": "string" }, "id": { "type": "integer" }, "name": { "type": "string" } }, "type": "object" }, "description": "Pool information (included when include_pools=1)", "key$": "pools", "type": "object" } } } } } }, "400": { "description": "Bad request - invalid parameters" }, "500": { "description": "Internal server error" } }, "parameters": [{ "name": "api_version", "in": "query", "description": "API version - must be set to 2 to use the v2 API", "required": true, "schema": { "type": "integer", "enum": [2] }, "index$": 0 }, { "name": "tags", "in": "query", "description": "Tag list for searching posts. All tag searches are supported, including meta tags. Separate multiple tags with + (e.g., tag1+tag2). Supports meta tags like holds:false", "required": false, "schema": { "type": "string" }, "example": "holds:false", "index$": 1 }, { "name": "limit", "in": "query", "description": "Limit the number of responses returned for your query. Must be between 1 and 100.", "required": false, "schema": { "type": "integer", "minimum": 1, "maximum": 100, "default": 20 }, "index$": 2 }, { "name": "include_tags", "in": "query", "description": "Include the tag types (e.g. character, copyright, artist) for each of the tags in the response", "required": false, "schema": { "type": "integer", "enum": [0, 1], "default": 0 }, "index$": 3 }, { "name": "include_votes", "in": "query", "description": "Include the votes for each post in the response (not currently implemented)", "required": false, "schema": { "type": "integer", "enum": [0, 1], "default": 0 }, "index$": 4 }, { "name": "include_pools", "in": "query", "description": "Include the pool membership of each post in the response", "required": false, "schema": { "type": "integer", "enum": [0, 1], "default": 0 }, "index$": 5 }, { "name": "filter", "in": "query", "description": "Filter parameter (functionality unknown)", "required": false, "schema": { "type": "integer", "enum": [1] }, "index$": 6 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let post_ref01_data = Object.values(setup.data.existing.post)[0];
        // LIST
        const post_ref01_ent = client.Post();
        const post_ref01_match = {};
        const post_ref01_list = (await post_ref01_ent.list(post_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/post/PostTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.YandereApiV2SDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['post01', 'post02', 'post03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'YANDERE_API_V2_TEST_POST_ENTID': idmap,
        'YANDERE_API_V2_TEST_LIVE': 'FALSE',
        'YANDERE_API_V2_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['YANDERE_API_V2_TEST_POST_ENTID'];
    const live = 'TRUE' === env.YANDERE_API_V2_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['YANDERE_API_V2_TEST_POST_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.YandereApiV2SDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.YANDERE_API_V2_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=PostEntity.test.js.map