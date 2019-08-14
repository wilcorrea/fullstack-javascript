import { shallowMount } from '@vue/test-utils'
import App from 'src/App.vue'
import $store from 'src/store'
import Http from 'src/app/DataSource/Http'

describe('App', () => {
  const RouterView = { template: '<div>RouterView</div>' }

  const wrapper = shallowMount(App, { components: { RouterView } })

  /**
   * @test
   */
  it('check component markup', () => {
    expect(wrapper.html()).toMatch('')
  })

  /**
   * @test
   */
  it('method notify', () => {
    let confirmed = false
    global.confirm = () => true
    global.location.reload = () => (confirmed = true)
    wrapper.vm.notify('jest')
    expect(true).toEqual(wrapper.vm.confirmed)
    expect(true).toEqual(confirmed)

    confirmed = false
    global.confirm = () => (confirmed = true)
    wrapper.vm.confirmed = true
    wrapper.vm.notify('jest')
    expect(false).toEqual(confirmed)

    wrapper.vm.confirmed = false
    confirmed = false
    global.confirm = () => false
    wrapper.vm.notify('jest')
    expect(false).toEqual(wrapper.vm.confirmed)
  })

  /**
   * @test
   */
  it('method receiveVersion', () => {
    $store.state.version = ''
    wrapper.vm.receiveVersion({ data: 'jest' })
    expect('jest').toEqual($store.state.version)

    $store.state.version = 'this.version'
    wrapper.vm.receiveVersion({ data: 'jest' })
    expect('jest').toEqual($store.state.version)
  })

  /**
   * @test
   */
  it('method fetchVersion', async () => {
    $store.state.version = ''
    Http.mockRegister('version', new Promise((resolve) => resolve({ data: 'jest' })))
    const result = await wrapper.vm.fetchVersion()
    expect('jest').toEqual($store.state.version)
  })

  /**
   * @test
   */
  test('should render content correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
