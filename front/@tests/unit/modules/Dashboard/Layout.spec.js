import { shallowMount } from '@vue/test-utils'
import Layout from 'src/modules/Dashboard/Layout.vue'

describe('Layout', () => {
  const AppBreadcrumb = { template: '<div>AppBreadcrumb</div>' }
  const AppMenu = { template: '<div>AppMenu</div>' }
  const RouterView = { template: '<div>RouterView</div>' }

  const wrapper = shallowMount(Layout, { components: { AppBreadcrumb, AppMenu, RouterView } })

  /**
   * @test
   */
  it('check component markup', () => {
    expect(wrapper.html()).toMatch('')
  })

  /**
   * @test
   */
  test('should render content correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
