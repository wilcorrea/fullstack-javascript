import axios from 'axios'
import httpLocal from 'src/settings/httpLocal'

describe('httpLocal', () => {
  /**
   * @test
   */
  it('check if is axios', () => {
    expect(httpLocal.constructor).toEqual(axios.constructor)
  })
})
