
import { Context } from './Context'


class YandereApiV2Error extends Error {

  isYandereApiV2Error = true

  sdk = 'YandereApiV2'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  YandereApiV2Error
}

