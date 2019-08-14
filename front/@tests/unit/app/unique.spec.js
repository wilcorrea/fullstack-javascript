const unique = require('src/app/unique')

describe('unique', () => {
  /**
   * @test
   */
  it('generate unique key', () => {
    expect(typeof unique()).toEqual('string')
    expect(typeof unique('nope')).toEqual('string')
    expect(typeof unique('yep', true)).toEqual('string')
  })
})
