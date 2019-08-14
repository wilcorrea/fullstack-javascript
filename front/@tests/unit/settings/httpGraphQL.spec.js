import axios from 'axios'
import httpGraphQL from 'src/settings/httpGraphQL'

describe('httpGraphQL', () => {
  /**
   * @test
   */
  it('check if is axios', () => {
    expect(httpGraphQL.constructor).toEqual(axios.constructor)
  })
})
