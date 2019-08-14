import { env, graphQL, wirecard, i18n } from 'src/settings'
import messages from 'src/lang/messages'

describe('settings', () => {
  /**
   * @test
   */
  it('check i18n returns a string', () => {
    expect(typeof i18n()).toEqual('string')
  })
  it('check i18n string has messages', () => {
    expect(typeof messages(i18n())).toEqual('object')
  })
  it('check wirecard settings are valid', () => {
    const options = wirecard()
    expect(typeof options.authorization).toEqual('string')
    expect(typeof options.baseURL).toEqual('string')
  })
  it('check graphQL settings', () => {
    const options = graphQL()
    expect(typeof options.baseURL).toEqual('string')
  })
  it('test env helper function', () => {
    const value = env('VUE_APP_I18N')
    if (typeof value !== 'undefined') {
      expect(value).toEqual(env('VUE_APP_I18N'))
    }
    const fallback = 'en-us'
    expect(env('VUE_APP_I18N--INVALID', fallback)).toEqual(fallback)
  })
})
