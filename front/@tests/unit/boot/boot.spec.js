import browse from 'src/boot/browse'
import lang from 'src/boot/lang'
import boot from 'src/boot'

describe('boot', () => {
  const MyVue = { prototype: {} }
  /**
   * @test
   */
  it('check if $lang will be installed in vue prototype', () => {
    lang(MyVue)
    expect(typeof MyVue.prototype.$lang).toEqual('function')
  })

  /**
   * @test
   */
  it('check if $browse will be installed in vue prototype', () => {
    browse(MyVue)
    expect(typeof MyVue.prototype.$browse).toEqual('function')
  })

  /**
   * @test
   */
  it('install all with plugin', () => {
    const MyVue = { prototype: {} }
    expect(typeof boot.install).toEqual('function')
    boot.install(MyVue)
    expect(typeof MyVue.prototype.$lang).toEqual('function')
    expect(typeof MyVue.prototype.$browse).toEqual('function')
  })
})
