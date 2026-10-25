

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { YandereApiV2SDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('PostEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when YANDERE_API_V2_TEST_LIVE=TRUE.
  afterEach(liveDelay('YANDERE_API_V2_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = YandereApiV2SDK.test()
    const ent = testsdk.Post()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('post hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of YandereApiV2SDK.test(offline).Post().stream('list')) { }
    }, /offline/)

    for await (const _item of YandereApiV2SDK.test(offline).Post()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = YandereApiV2SDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Post().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of YandereApiV2SDK.test().Post().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new YandereApiV2SDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Post().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Post().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = YandereApiV2SDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Post().list({"api_version":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.YANDERE_API_V2_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'post.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"actual_preview_height":{"a":true,"h":"Actual Preview Height","n":"actual_preview_height","r":false,"sh":"Actual height of the preview image","t":"`$INTEGER`","key$":"actual_preview_height","index$":0},"actual_preview_width":{"a":true,"h":"Actual Preview Width","n":"actual_preview_width","r":false,"sh":"Actual width of the preview image","t":"`$INTEGER`","key$":"actual_preview_width","index$":1},"author":{"a":true,"h":"Author","n":"author","r":false,"sh":"Username of the post creator","t":"`$STRING`","key$":"author","index$":2},"change":{"a":true,"h":"Change","n":"change","r":false,"sh":"Change number/version","t":"`$INTEGER`","key$":"change","index$":3},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"Unix timestamp of when the post was created","t":"`$INTEGER`","key$":"created_at","index$":4},"creator_id":{"a":true,"h":"Creator Id","n":"creator_id","r":false,"sh":"User ID of the post creator","t":"`$INTEGER`","key$":"creator_id","index$":5},"file_size":{"a":true,"h":"File Size","n":"file_size","r":false,"sh":"File size in bytes","t":"`$INTEGER`","key$":"file_size","index$":6},"file_url":{"a":true,"h":"File Url","n":"file_url","r":false,"sh":"URL to the full-size image","t":"`$STRING`","key$":"file_url","index$":7},"flag_detail":{"a":true,"h":"Flag Detail","n":"flag_detail","r":false,"sh":"Flag details if the post is flagged","t":"`$OBJECT`","key$":"flag_detail","index$":8},"frames":{"a":true,"h":"Frames","n":"frames","r":false,"sh":"Array of frames","t":"`$ARRAY`","key$":"frames","index$":9},"frames_pending":{"a":true,"h":"Frames Pending","n":"frames_pending","r":false,"sh":"Array of pending frames","t":"`$ARRAY`","key$":"frames_pending","index$":10},"frames_pending_string":{"a":true,"h":"Frames Pending String","n":"frames_pending_string","r":false,"sh":"Pending frames information","t":"`$STRING`","key$":"frames_pending_string","index$":11},"frames_string":{"a":true,"h":"Frames String","n":"frames_string","r":false,"sh":"Frames information","t":"`$STRING`","key$":"frames_string","index$":12},"has_children":{"a":true,"h":"Has Children","n":"has_children","r":false,"sh":"Whether the post has child posts","t":"`$BOOLEAN`","key$":"has_children","index$":13},"height":{"a":true,"h":"Height","n":"height","r":false,"sh":"Original image height","t":"`$INTEGER`","key$":"height","index$":14},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Post ID","t":"`$INTEGER`","key$":"id","index$":15},"is_held":{"a":true,"h":"Is Held","n":"is_held","r":false,"sh":"Whether the post is held","t":"`$BOOLEAN`","key$":"is_held","index$":16},"is_shown_in_index":{"a":true,"h":"Is Shown In Index","n":"is_shown_in_index","r":false,"sh":"Whether the post is shown in the index","t":"`$BOOLEAN`","key$":"is_shown_in_index","index$":17},"jpeg_file_size":{"a":true,"h":"Jpeg File Size","n":"jpeg_file_size","r":false,"sh":"File size of the JPEG version in bytes","t":"`$INTEGER`","key$":"jpeg_file_size","index$":18},"jpeg_height":{"a":true,"h":"Jpeg Height","n":"jpeg_height","r":false,"sh":"Height of the JPEG version","t":"`$INTEGER`","key$":"jpeg_height","index$":19},"jpeg_url":{"a":true,"h":"Jpeg Url","n":"jpeg_url","r":false,"sh":"URL to the JPEG version","t":"`$STRING`","key$":"jpeg_url","index$":20},"jpeg_width":{"a":true,"h":"Jpeg Width","n":"jpeg_width","r":false,"sh":"Width of the JPEG version","t":"`$INTEGER`","key$":"jpeg_width","index$":21},"md5":{"a":true,"h":"Md5","n":"md5","r":false,"sh":"MD5 hash of the image file","t":"`$STRING`","key$":"md5","index$":22},"parent_id":{"a":true,"h":"Parent Id","n":"parent_id","r":false,"sh":"ID of the parent post","t":"`$INTEGER`","key$":"parent_id","index$":23},"pool_ids":{"a":true,"h":"Pool Ids","n":"pool_ids","r":false,"sh":"Array of pool IDs this post belongs to (included when include_pools=1)","t":"`$ARRAY`","key$":"pool_ids","index$":24},"preview_height":{"a":true,"h":"Preview Height","n":"preview_height","r":false,"sh":"Height of the preview image","t":"`$INTEGER`","key$":"preview_height","index$":25},"preview_url":{"a":true,"h":"Preview Url","n":"preview_url","r":false,"sh":"URL to the preview/thumbnail image","t":"`$STRING`","key$":"preview_url","index$":26},"preview_width":{"a":true,"h":"Preview Width","n":"preview_width","r":false,"sh":"Width of the preview image","t":"`$INTEGER`","key$":"preview_width","index$":27},"rating":{"a":true,"h":"Rating","n":"rating","r":false,"sh":"Post rating (s=safe, q=questionable, e=explicit)","t":"`$STRING`","key$":"rating","index$":28},"sample_file_size":{"a":true,"h":"Sample File Size","n":"sample_file_size","r":false,"sh":"File size of the sample image in bytes","t":"`$INTEGER`","key$":"sample_file_size","index$":29},"sample_height":{"a":true,"h":"Sample Height","n":"sample_height","r":false,"sh":"Height of the sample image","t":"`$INTEGER`","key$":"sample_height","index$":30},"sample_url":{"a":true,"h":"Sample Url","n":"sample_url","r":false,"sh":"URL to the sample-size image","t":"`$STRING`","key$":"sample_url","index$":31},"sample_width":{"a":true,"h":"Sample Width","n":"sample_width","r":false,"sh":"Width of the sample image","t":"`$INTEGER`","key$":"sample_width","index$":32},"score":{"a":true,"h":"Score","n":"score","r":false,"sh":"Post score","t":"`$INTEGER`","key$":"score","index$":33},"source":{"a":true,"h":"Source","n":"source","r":false,"sh":"Source URL of the image","t":"`$STRING`","key$":"source","index$":34},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"Post status","t":"`$STRING`","key$":"status","index$":35},"tags":{"a":true,"h":"Tags","n":"tags","r":false,"sh":"Space-separated list of tags associated with the post","t":"`$STRING`","key$":"tags","index$":36},"votes":{"a":true,"h":"Votes","n":"votes","r":false,"sh":"Vote information (included when include_votes=1)","t":"`$OBJECT`","key$":"votes","index$":37},"width":{"a":true,"h":"Width","n":"width","r":false,"sh":"Original image width","t":"`$INTEGER`","key$":"width","index$":38}},"id":{"field":"id","name":"id"},"name":"post","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /post.json","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"api_version","or":"api_version","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":0,"k":"query","n":"include_pool","or":"include_pools","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":0,"k":"query","n":"include_tag","or":"include_tags","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"ex":0,"k":"query","n":"include_vote","or":"include_votes","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"ex":20,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"ex":"holds:false","k":"query","n":"tag","or":"tags","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/post.json","q":{"exist":["api_version"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"post.json"}],"t":{"req":"`reqdata`","res":"`body.posts`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"post","name__orig":"post","Name":"Post","name_":"post","name-":"post","NAME":"POST","index$":0}, {"active":true,"entity":"post","key$":"BasicPostFlow","kind":"basic","name":"BasicPostFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"post_ref01"}}],"index$":0}]}, 'Post', {"GET /post.json":{"protocol":"http","parameters":[{"name":"api_version","in":"query","description":"API version - must be set to 2 to use the v2 API","required":true,"schema":{"type":"integer","enum":[2]},"index$":0},{"name":"tags","in":"query","description":"Tag list for searching posts. All tag searches are supported, including meta tags. Separate multiple tags with + (e.g., tag1+tag2). Supports meta tags like holds:false","required":false,"schema":{"type":"string"},"example":"holds:false","index$":1},{"name":"limit","in":"query","description":"Limit the number of responses returned for your query. Must be between 1 and 100.","required":false,"schema":{"type":"integer","minimum":1,"maximum":100,"default":20},"index$":2},{"name":"include_tags","in":"query","description":"Include the tag types (e.g. character, copyright, artist) for each of the tags in the response","required":false,"schema":{"type":"integer","enum":[0,1],"default":0},"index$":3},{"name":"include_votes","in":"query","description":"Include the votes for each post in the response (not currently implemented)","required":false,"schema":{"type":"integer","enum":[0,1],"default":0},"index$":4},{"name":"include_pools","in":"query","description":"Include the pool membership of each post in the response","required":false,"schema":{"type":"integer","enum":[0,1],"default":0},"index$":5},{"name":"filter","in":"query","description":"Filter parameter (functionality unknown)","required":false,"schema":{"type":"integer","enum":[1]},"index$":6}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let post_ref01_data = Object.values(setup.data.existing.post)[0] as any

    // LIST
    const post_ref01_ent = client.Post()
    const post_ref01_match: any = {}

    const post_ref01_list = (await post_ref01_ent.list(post_ref01_match)).map((e: any) => e.data())


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/post/PostTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = YandereApiV2SDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['post01','post02','post03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'YANDERE_API_V2_TEST_POST_ENTID': idmap,
    'YANDERE_API_V2_TEST_LIVE': 'FALSE',
    'YANDERE_API_V2_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['YANDERE_API_V2_TEST_POST_ENTID']

  const live = 'TRUE' === env.YANDERE_API_V2_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['YANDERE_API_V2_TEST_POST_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new YandereApiV2SDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
