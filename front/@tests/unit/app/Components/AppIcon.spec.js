import { shallowMount } from '@vue/test-utils'
import AppIcon from 'src/app/Components/Icon/AppIcon'

describe('AppIcon', () => {
  const name = 'vue'

  /**
   * @test
   */
  it('try without a name', () => {
    const wrapper = shallowMount(AppIcon)
    expect(wrapper.html()).toMatch(
      '<span class="app-icon material-icons">warning</span>'
    )
  })

  /**
   * @test
   */
  it('check if click produce cursor pointer', () => {
    const wrapper = shallowMount(
      AppIcon, { propsData: { name }, listeners: { click: () => undefined } }
    )
    expect(wrapper.html()).toMatch(
      `<span class="app-icon material-icons" style="cursor: pointer;">${name}</span>`
    )
  })

  const color = 'black'
  const wrapper = shallowMount(AppIcon, { propsData: { name, color } })
  /**
   * @test
   */
  it('create a simple icon', () => {
    expect(wrapper.html()).toMatch(
      `<span class="app-icon material-icons" style="color: ${color};">${name}</span>`
    )
  })

  /**
   * @test
   */
  test('should render content correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
