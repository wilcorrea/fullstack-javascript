import Vuex from 'vuex'
import storeVuex from 'src/store/vuex'

describe('storeVuex', () => {
  /**
   * @test
   */
  it('check if store is Vuex', () => {
    expect(storeVuex.constructor).toBeInstanceOf(Vuex.constructor)
  })
})
