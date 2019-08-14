import axios from 'axios'
import httpWirecard from 'src/settings/httpWirecard'

describe('httpWirecard', () => {
  /**
   * @test
   */
  it('check if is axios', () => {
    expect(httpWirecard.constructor).toEqual(axios.constructor)
  })
})
