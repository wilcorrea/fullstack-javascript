import { mount, shallowMount } from '@vue/test-utils'
import 'src/boot/polyfill.js'

import $lang from 'src/lang'
import { money } from 'src/app/Util/currency'
import { breakLine } from 'src/app/Util/string'
import AppIcon from 'src/app/Components/Icon/AppIcon'

import { statusBackgrounds } from 'src/domains/Order/helper'
import { amount, payments, paymentMethods, status, customer } from 'src/domains/Order/helperTable'

/**
 * @param render
 * @param more
 * @returns {Wrapper<Vue>}
 */
const mounted = (render, more) => mount({
  render (h) {
    return render({ h, ...more })
  },
  ...more
})

/**
 * @param render
 * @param more
 * @returns {Wrapper<Vue>}
 */
const shallowMounted = (render, more) => shallowMount({
  render (h) {
    return h('div', render({ h, ...more }))
  },
  ...more
})

describe('helperTable', () => {
  /**
   * @test
   */
  it('check tableFormat amount', () => {
    const total = Math.random()
    expect(amount({ value: total })).toEqual(money(total))
  })

  /**
   * @test
   */
  it('check tableComponent payments', () => {
    const build = (method, icon) => {
      const record = { payments: [{ fundingInstrument: { method } }] }
      const components = { AppIcon }
      const wrapper = mounted(payments, { record, components })
      return wrapper.html()
    }
    const options = paymentMethods()
    Object.keys(options).forEach((key) => {
      const html = build(key)
      expect(html).toEqual(`<span class="app-icon material-icons">${options[key]}</span>`)
      expect(html).toMatchSnapshot(`payments: ${key}`)
    })
  })

  /**
   * @test
   */
  it('check tableComponent status', () => {
    const build = (value) => {
      const wrapper = mounted(status, { value })
      return wrapper.html()
    }
    const options = statusBackgrounds()
    Object.keys(options).forEach((key) => {
      const html = build(key)
      expect(html).toMatch(`2px solid ${options[key]}`)
      const text = $lang(`domains.order.status.${key}`)
      expect(html).toMatch(breakLine(text))
      expect(html).toMatchSnapshot(`status: ${key}`)
    })
  })

  /**
   * @test
   */
  it('check tableComponent customer', () => {
    const build = (fullname) => {
      const value = { fullname }
      const components = { AppAvatar: { render () { } } }
      const wrapper = shallowMounted(customer, { components, value })
      return wrapper.html()
    }
    const name = 'William Correa'
    const html = build(name)
    expect(html).toMatch(name)
  })
})
