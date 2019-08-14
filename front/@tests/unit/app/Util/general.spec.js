import { get, clone, uuid } from 'src/app/Util/general'

describe('general', () => {
  /**
   * @test
   */
  it('use dot notation and bracket notations with get', () => {
    const element = {
      foo: [1, { bar: { label: 'It works!' } }]
    }
    expect(get(element, 'foo.0')).toEqual(1)

    expect(get(element, 'foo.[1].bar.label')).toEqual('It works!')
    expect(get(element, 'foo.1.bar.label')).toEqual('It works!')
  })

  /**
   * @test
   */
  it('clone funnies', () => {
    const a = { x: 0, b: { c: { foo: 'bar' } } }
    expect(clone(a)).toEqual(a)
    expect(clone(a) === a).toBeFalsy()
    const b = clone(a)
    b.x = 1
    expect(a.x === 1).toBeFalsy()
    const c = { ...a }
    c.x = 1
    a.b.c.foo = 'test'
    expect(b.b.c.foo === 'bar').toBeTruthy()
    expect(c.b.c.foo === 'test').toBeTruthy()
    const x = new File([{ key: '' }], 'test')
    const y = new Date()
    const z = {}
    const w = []
    const echo = [x, y, z, w]
    const cloned = clone(echo)
    expect(cloned).toEqual(echo)
    expect(cloned === echo).toBeFalsy()
    expect(x === echo[0]).toBeTruthy()
    expect(x === cloned[0]).toBeFalsy()
    expect(y === echo[1]).toBeTruthy()
    expect(y === cloned[1]).toBeFalsy()
    expect(z === echo[2]).toBeTruthy()
    expect(z === cloned[2]).toBeFalsy()
    expect(w === echo[3]).toBeTruthy()
    expect(w === cloned[3]).toBeFalsy()
  })

  it('uuid must generate a string with 36 bits', () => {
    expect(uuid()).toHaveLength(36)
  })
})
