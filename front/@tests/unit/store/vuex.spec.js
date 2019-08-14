import $store, { createStore, StoreState } from 'src/store'

describe('$store', () => {
  /**
   * @test
   */
  it('check if observable store is ok', () => {
    $store.commit('updateVersion', 'test')
    expect('test').toEqual($store.state.version)
  })

  /**
   * @test
   */
  it('create a custom observable store', () => {
    const store = createStore({
      state: { demo: '' },
      mutations: { updateDemo: (state, demo) => (state.demo = demo) }
    })
    store.commit('updateDemo', 'test')
    expect('test').toEqual(store.state.demo)
  })
})
