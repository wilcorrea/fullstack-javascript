import { shallowMount } from '@vue/test-utils'
import AppAvatar, { colorFallback, backgroundFallback } from 'src/app/Components/Avatar/AppAvatar'

describe('AppAvatar', () => {
  /**
   * @test
   */
  it('create without src', () => {
    const letter = 'W'
    const background = 'black'
    const color = 'black'
    const wrapper = shallowMount(AppAvatar, { propsData: { letter, background, color } })
    expect(wrapper.html()).toMatch(
      '<div' +
      ' class="app-avatar app-avatar__fallback"' +
      ` style="background: ${background}; color: ${color};"` +
      '>' +
      `${letter}` +
      '</div>'
    )
  })

  /**
   * @test
   */
  it('create with src', () => {
    const src = 'http://img.com'
    const wrapper = shallowMount(AppAvatar, { propsData: { src } })
    expect(wrapper.html()).toMatch(
      '<div' +
      ' class="app-avatar app-avatar__figure"' +
      '>' +
      `<img src="${src}">` +
      '</div>'
    )
  })

  const wrapper = shallowMount(AppAvatar)
  /**
   * @test
   */
  it('create without props', () => {
    expect(wrapper.html()).toMatch(
      '<div ' +
      'class="app-avatar app-avatar__fallback"' +
      ` style="background: ${backgroundFallback}; color: ${colorFallback};"` +
      '>' +
      '?' +
      '</div>'
    )
  })

  /**
   * @test
   */
  test('should render content correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
