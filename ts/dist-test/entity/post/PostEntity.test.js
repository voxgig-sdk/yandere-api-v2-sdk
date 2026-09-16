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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "actual_preview_height", "req": false, "short": "Actual height of the preview image", "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "actual_preview_width", "req": false, "short": "Actual width of the preview image", "type": "`$INTEGER`", "index$": 1 }, { "active": true, "name": "author", "req": false, "short": "Username of the post creator", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "change", "req": false, "short": "Change number/version", "type": "`$INTEGER`", "index$": 3 }, { "active": true, "name": "created_at", "req": false, "short": "Unix timestamp of when the post was created", "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "creator_id", "req": false, "short": "User ID of the post creator", "type": "`$INTEGER`", "index$": 5 }, { "active": true, "name": "file_size", "req": false, "short": "File size in bytes", "type": "`$INTEGER`", "index$": 6 }, { "active": true, "name": "file_url", "req": false, "short": "URL to the full-size image", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "flag_detail", "req": false, "short": "Flag details if the post is flagged", "type": "`$OBJECT`", "index$": 8 }, { "active": true, "name": "frames", "req": false, "short": "Array of frames", "type": "`$ARRAY`", "index$": 9 }, { "active": true, "name": "frames_pending", "req": false, "short": "Array of pending frames", "type": "`$ARRAY`", "index$": 10 }, { "active": true, "name": "frames_pending_string", "req": false, "short": "Pending frames information", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "frames_string", "req": false, "short": "Frames information", "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "has_children", "req": false, "short": "Whether the post has child posts", "type": "`$BOOLEAN`", "index$": 13 }, { "active": true, "name": "height", "req": false, "short": "Original image height", "type": "`$INTEGER`", "index$": 14 }, { "active": true, "name": "id", "req": false, "short": "Post ID", "type": "`$INTEGER`", "index$": 15 }, { "active": true, "name": "is_held", "req": false, "short": "Whether the post is held", "type": "`$BOOLEAN`", "index$": 16 }, { "active": true, "name": "is_shown_in_index", "req": false, "short": "Whether the post is shown in the index", "type": "`$BOOLEAN`", "index$": 17 }, { "active": true, "name": "jpeg_file_size", "req": false, "short": "File size of the JPEG version in bytes", "type": "`$INTEGER`", "index$": 18 }, { "active": true, "name": "jpeg_height", "req": false, "short": "Height of the JPEG version", "type": "`$INTEGER`", "index$": 19 }, { "active": true, "name": "jpeg_url", "req": false, "short": "URL to the JPEG version", "type": "`$STRING`", "index$": 20 }, { "active": true, "name": "jpeg_width", "req": false, "short": "Width of the JPEG version", "type": "`$INTEGER`", "index$": 21 }, { "active": true, "name": "md5", "req": false, "short": "MD5 hash of the image file", "type": "`$STRING`", "index$": 22 }, { "active": true, "name": "parent_id", "req": false, "short": "ID of the parent post", "type": "`$INTEGER`", "index$": 23 }, { "active": true, "name": "pool_ids", "req": false, "short": "Array of pool IDs this post belongs to (included when include_pools=1)", "type": "`$ARRAY`", "index$": 24 }, { "active": true, "name": "preview_height", "req": false, "short": "Height of the preview image", "type": "`$INTEGER`", "index$": 25 }, { "active": true, "name": "preview_url", "req": false, "short": "URL to the preview/thumbnail image", "type": "`$STRING`", "index$": 26 }, { "active": true, "name": "preview_width", "req": false, "short": "Width of the preview image", "type": "`$INTEGER`", "index$": 27 }, { "active": true, "name": "rating", "req": false, "short": "Post rating (s=safe, q=questionable, e=explicit)", "type": "`$STRING`", "index$": 28 }, { "active": true, "name": "sample_file_size", "req": false, "short": "File size of the sample image in bytes", "type": "`$INTEGER`", "index$": 29 }, { "active": true, "name": "sample_height", "req": false, "short": "Height of the sample image", "type": "`$INTEGER`", "index$": 30 }, { "active": true, "name": "sample_url", "req": false, "short": "URL to the sample-size image", "type": "`$STRING`", "index$": 31 }, { "active": true, "name": "sample_width", "req": false, "short": "Width of the sample image", "type": "`$INTEGER`", "index$": 32 }, { "active": true, "name": "score", "req": false, "short": "Post score", "type": "`$INTEGER`", "index$": 33 }, { "active": true, "name": "source", "req": false, "short": "Source URL of the image", "type": "`$STRING`", "index$": 34 }, { "active": true, "name": "status", "req": false, "short": "Post status", "type": "`$STRING`", "index$": 35 }, { "active": true, "name": "tags", "req": false, "short": "Space-separated list of tags associated with the post", "type": "`$STRING`", "index$": 36 }, { "active": true, "name": "votes", "req": false, "short": "Vote information (included when include_votes=1)", "type": "`$OBJECT`", "index$": 37 }, { "active": true, "name": "width", "req": false, "short": "Original image width", "type": "`$INTEGER`", "index$": 38 }], "id": { "field": "id", "name": "id" }, "name": "post", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "api_version", "orig": "api_version", "reqd": true, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "kind": "query", "name": "filter", "orig": "filter", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "example": 0, "kind": "query", "name": "include_pool", "orig": "include_pool", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "example": 0, "kind": "query", "name": "include_tag", "orig": "include_tag", "reqd": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "example": 0, "kind": "query", "name": "include_vote", "orig": "include_vote", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "example": 20, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 5 }, { "active": true, "example": "holds:false", "kind": "query", "name": "tag", "orig": "tag", "reqd": false, "type": "`$STRING`", "index$": 6 }] }, "contract": { "id": "GET /post.json", "json": "{\"operationId\":\"searchPosts\",\"parameters\":[{\"description\":\"API version - must be set to 2 to use the v2 API\",\"in\":\"query\",\"name\":\"api_version\",\"required\":true,\"schema\":{\"enum\":[2],\"type\":\"integer\"}},{\"description\":\"Tag list for searching posts. All tag searches are supported, including meta tags. Separate multiple tags with + (e.g., tag1+tag2). Supports meta tags like holds:false\",\"example\":\"holds:false\",\"in\":\"query\",\"name\":\"tags\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Limit the number of responses returned for your query. Must be between 1 and 100.\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":20,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Include the tag types (e.g. character, copyright, artist) for each of the tags in the response\",\"in\":\"query\",\"name\":\"include_tags\",\"required\":false,\"schema\":{\"default\":0,\"enum\":[0,1],\"type\":\"integer\"}},{\"description\":\"Include the votes for each post in the response (not currently implemented)\",\"in\":\"query\",\"name\":\"include_votes\",\"required\":false,\"schema\":{\"default\":0,\"enum\":[0,1],\"type\":\"integer\"}},{\"description\":\"Include the pool membership of each post in the response\",\"in\":\"query\",\"name\":\"include_pools\",\"required\":false,\"schema\":{\"default\":0,\"enum\":[0,1],\"type\":\"integer\"}},{\"description\":\"Filter parameter (functionality unknown)\",\"in\":\"query\",\"name\":\"filter\",\"required\":false,\"schema\":{\"enum\":[1],\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"pools\":{\"additionalProperties\":{\"properties\":{\"description\":{\"type\":\"string\"},\"id\":{\"type\":\"integer\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"},\"description\":\"Pool information (included when include_pools=1)\",\"type\":\"object\"},\"posts\":{\"items\":{\"properties\":{\"actual_preview_height\":{\"description\":\"Actual height of the preview image\",\"type\":\"integer\"},\"actual_preview_width\":{\"description\":\"Actual width of the preview image\",\"type\":\"integer\"},\"author\":{\"description\":\"Username of the post creator\",\"type\":\"string\"},\"change\":{\"description\":\"Change number/version\",\"type\":\"integer\"},\"created_at\":{\"description\":\"Unix timestamp of when the post was created\",\"type\":\"integer\"},\"creator_id\":{\"description\":\"User ID of the post creator\",\"type\":\"integer\"},\"file_size\":{\"description\":\"File size in bytes\",\"type\":\"integer\"},\"file_url\":{\"description\":\"URL to the full-size image\",\"type\":\"string\"},\"flag_detail\":{\"description\":\"Flag details if the post is flagged\",\"type\":\"object\"},\"frames\":{\"description\":\"Array of frames\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"frames_pending\":{\"description\":\"Array of pending frames\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"frames_pending_string\":{\"description\":\"Pending frames information\",\"type\":\"string\"},\"frames_string\":{\"description\":\"Frames information\",\"type\":\"string\"},\"has_children\":{\"description\":\"Whether the post has child posts\",\"type\":\"boolean\"},\"height\":{\"description\":\"Original image height\",\"type\":\"integer\"},\"id\":{\"description\":\"Post ID\",\"type\":\"integer\"},\"is_held\":{\"description\":\"Whether the post is held\",\"type\":\"boolean\"},\"is_shown_in_index\":{\"description\":\"Whether the post is shown in the index\",\"type\":\"boolean\"},\"jpeg_file_size\":{\"description\":\"File size of the JPEG version in bytes\",\"type\":\"integer\"},\"jpeg_height\":{\"description\":\"Height of the JPEG version\",\"type\":\"integer\"},\"jpeg_url\":{\"description\":\"URL to the JPEG version\",\"type\":\"string\"},\"jpeg_width\":{\"description\":\"Width of the JPEG version\",\"type\":\"integer\"},\"md5\":{\"description\":\"MD5 hash of the image file\",\"type\":\"string\"},\"parent_id\":{\"description\":\"ID of the parent post\",\"nullable\":true,\"type\":\"integer\"},\"pool_ids\":{\"description\":\"Array of pool IDs this post belongs to (included when include_pools=1)\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"preview_height\":{\"description\":\"Height of the preview image\",\"type\":\"integer\"},\"preview_url\":{\"description\":\"URL to the preview/thumbnail image\",\"type\":\"string\"},\"preview_width\":{\"description\":\"Width of the preview image\",\"type\":\"integer\"},\"rating\":{\"description\":\"Post rating (s=safe, q=questionable, e=explicit)\",\"type\":\"string\"},\"sample_file_size\":{\"description\":\"File size of the sample image in bytes\",\"type\":\"integer\"},\"sample_height\":{\"description\":\"Height of the sample image\",\"type\":\"integer\"},\"sample_url\":{\"description\":\"URL to the sample-size image\",\"type\":\"string\"},\"sample_width\":{\"description\":\"Width of the sample image\",\"type\":\"integer\"},\"score\":{\"description\":\"Post score\",\"type\":\"integer\"},\"source\":{\"description\":\"Source URL of the image\",\"type\":\"string\"},\"status\":{\"description\":\"Post status\",\"type\":\"string\"},\"tags\":{\"description\":\"Space-separated list of tags associated with the post\",\"type\":\"string\"},\"votes\":{\"description\":\"Vote information (included when include_votes=1)\",\"properties\":{\"down\":{\"type\":\"integer\"},\"up\":{\"type\":\"integer\"}},\"type\":\"object\"},\"width\":{\"description\":\"Original image width\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"tags\":{\"additionalProperties\":{\"properties\":{\"type\":{\"description\":\"Tag type (e.g., character, copyright, artist, general)\",\"type\":\"string\"}},\"type\":\"object\"},\"description\":\"Tag type information (included when include_tags=1)\",\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with post data\"},\"400\":{\"description\":\"Bad request - invalid parameters\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/post.json", "segments": [{ "lit": "post.json" }], "select": { "exist": ["api_version", "filter", "include_pool", "include_tag", "include_vote", "limit", "tag"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "post", "name__orig": "post", "Name": "Post", "name_": "post", "name-": "post", "NAME": "POST", "index$": 0 }, { "active": true, "entity": "post", "key$": "BasicPostFlow", "kind": "basic", "name": "BasicPostFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "post_ref01" } }], "index$": 0 }] }, 'Post');
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