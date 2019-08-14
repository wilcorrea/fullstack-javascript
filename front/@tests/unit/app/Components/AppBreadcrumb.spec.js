import { shallowMount } from '@vue/test-utils'
import AppBreadcrumb from 'src/app/Components/Breadcrumb/AppBreadcrumb'
import $lang from 'src/lang'

describe('AppBreadcrumb', () => {
  /**
   * @test
   */
  it('create with a invalid path', () => {
    const routes = [{ path: '/404' }]
    const wrapper = shallowMount(AppBreadcrumb, { propsData: { routes } })
    expect(wrapper.html()).toMatch('<ul class="app-breadcrumb"></ul>')
  })

  const routes = [{ path: '/dashboard' }]
  const wrapper = shallowMount(AppBreadcrumb, { propsData: { routes } })
  /**
   * @test
   */
  it('create with valid path', () => {
    expect(wrapper.find('ul > li > a').text()).toMatch($lang('pages./dashboard.crumb'))
  })

  /**
   * @test
   */
  test('should render content correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
