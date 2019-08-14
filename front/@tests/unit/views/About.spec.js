import { shallowMount } from '@vue/test-utils'
import About from 'src/views/About.vue'
import $lang from 'src/lang'

describe('About', () => {
  const wrapper = shallowMount(About, { mocks: { $lang } })

  /**
   * @test
   */
  it('check component markup', () => {
    expect(wrapper.html()).toMatch(`<h1>${$lang('views.about.title')}</h1>`)
  })

  /**
   * @test
   */
  test('should render content correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
