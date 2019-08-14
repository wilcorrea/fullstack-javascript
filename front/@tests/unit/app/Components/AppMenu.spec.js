import { shallowMount } from '@vue/test-utils'
import AppMenu from 'src/app/Components/Menu/AppMenu.vue'
import AppIcon from 'src/app/Components/Icon/AppIcon'

import { register } from 'src/app/Util/ui'

register('AppIcon', AppIcon)

const label = 'Test'
register('RouterLink', { template: `<a>${label}</a>` })

describe('AppMenu', () => {
  const spy = jest.spyOn(console, 'error')

  /**
   * @test
   */
  it('"links" is required', () => {
    shallowMount(AppMenu)
    expect(spy).toBeCalledWith(expect.stringContaining('[Vue warn]: Missing required prop: "links"'))
  })

  const links = [{ path: '/test', label }]
  const wrapper = shallowMount(AppMenu, { propsData: { links } })

  /**
   * @test
   */
  it('create a simple menu', () => {
    expect(wrapper.find('ul > li > router-link-stub').text()).toMatch(label)
  })

  wrapper.vm.showMenu = true

  /**
   * @test
   */
  it('method appMenuToggle', () => {
    wrapper.vm.appMenuToggle()
    expect(false).toEqual(wrapper.vm.showMenu)
  })

  /**
   * @test
   */
  test('should render content correctly', () => {
    expect(wrapper.vm.$el).toMatchSnapshot('closed')
  })

  /**
   * @test
   */
  it('method appMenuToggle', () => {
    wrapper.vm.appMenuToggle()
    expect(true).toEqual(wrapper.vm.showMenu)
  })

  /**
   * @test
   */
  test('should render content correctly', () => {
    expect(wrapper.vm.$el).toMatchSnapshot('open')
  })
})
