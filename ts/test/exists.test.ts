
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { YandereApiV2SDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = YandereApiV2SDK.test()
    equal(testsdk instanceof YandereApiV2SDK, true,
      'YandereApiV2SDK.test() must return a client synchronously')
  })

})
