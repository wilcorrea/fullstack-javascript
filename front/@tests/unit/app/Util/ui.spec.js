import Vue from 'vue'
import { register, color } from 'src/app/Util/ui'

describe('ui', () => {
  /**
   * @test
   */
  it('test global register components', () => {
    register('name', { foo: 'bar' })
    const app = new Vue({})
    expect(typeof app.$options.components.name).toMatch('function')
  })

  /**
   * @test
   */
  it('generate random color with color', () => {
    expect(typeof color()).toMatch('string')
  })
})
