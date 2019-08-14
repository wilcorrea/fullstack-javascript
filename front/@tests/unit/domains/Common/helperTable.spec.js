import { shallowMount } from '@vue/test-utils'
import { status, style } from 'src/domains/Common/helperTable'

describe('helperTable', () => {
  const values = { yes: 'green', no: 'red' }
  const lang = ':/'
  const wrapper = (value) => shallowMount({
    render (h) {
      return status(values, value, lang)({ h })
    }
  })

  /**
   * @test
   */
  it('status composition function: yes', async () => {
    const component = wrapper('yes')
    const html = component.html()
    const styles = style('green')
    Object.keys(styles).forEach((key) => {
      expect(html).toMatch(`${key}: ${styles[key]}`)
    })
    expect(component.text()).toMatch('yes')
    expect(html).toMatchSnapshot('yes')
  })

  /**
   * @test
   */
  it('status composition function: no', async () => {
    const component = wrapper('no')
    const html = component.html()
    const styles = style('red')
    Object.keys(styles).forEach((key) => {
      expect(html).toMatch(`${key}: ${styles[key]}`)
    })
    expect(component.text()).toMatch('no')
    expect(html).toMatchSnapshot('no')
  })
})
