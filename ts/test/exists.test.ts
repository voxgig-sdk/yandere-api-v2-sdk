
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { YandereApiV2SDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await YandereApiV2SDK.test()
    equal(null !== testsdk, true)
  })

})
