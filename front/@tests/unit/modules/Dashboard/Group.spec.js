import { shallowMount } from '@vue/test-utils'
import Group from 'src/modules/Dashboard/Group.vue'

describe('Group', () => {
  const RouterView = { template: '<div>RouterView</div>' }

  const wrapper = shallowMount(Group, { components: { RouterView } })

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
