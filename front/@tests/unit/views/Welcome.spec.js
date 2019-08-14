import { shallowMount } from '@vue/test-utils'
import Welcome from 'src/views/Welcome.vue'
import $lang from 'src/lang'

describe('Welcome', () => {
  const wrapper = shallowMount(Welcome, { mocks: { $lang } })

  /**
   * @test
   */
  it('check component markup', () => {
    expect(wrapper.html()).toMatch(`<h1>${$lang('views.welcome.title')}</h1>`)
  })

  /**
   * @test
   */
  test('should render content correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
