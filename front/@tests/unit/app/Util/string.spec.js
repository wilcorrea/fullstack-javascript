import { breakLine, replacement } from 'src/app/Util/string'

describe('string', () => {
  /**
   * @test
   */
  it('test replacement with object', () => {
    const replaced = replacement('....{foo}....', { foo: 'bar' })
    expect(replaced).toMatch('....bar....')
  })

  /**
   * @test
   */
  it('test replacement with object', () => {
    const replaced = replacement('....{0}....', ['bar'])
    expect(replaced).toMatch('....bar....')
  })

  /**
   * @test
   */
  it('test replacement with array and custom regex key', () => {
    // noinspection JSCheckFunctionSignatures
    const replaced = replacement('....:0....', ['bar'], (key) => new RegExp(`:${key}`, 'g'))
    expect(replaced).toMatch('....bar....')
  })

  /**
   * @test
   */
  it('test replacement with object and custom regex key', () => {
    // noinspection JSCheckFunctionSignatures
    const replaced = replacement('....:foo....', { foo: 'bar' }, (key) => new RegExp(`:${key}`, 'g'))
    expect(replaced).toMatch('....bar....')
  })

  /**
   * @test
   */
  it('check breakLine', () => {
    expect(breakLine('Abc Def')).toMatch('<br>')
  })
})
