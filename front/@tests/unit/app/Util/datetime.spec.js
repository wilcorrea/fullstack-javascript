import { format } from 'src/app/Util/datetime'

describe('datetime', () => {
  /**
   * @test
   */
  it('call format with default formatter', () => {
    expect(format('2018-12-31T01:18:28-0300')).toMatch('31/12/2018')
  })

  /**
   * @test
   */
  it('call format with custom formatter', () => {
    expect(format('2018-12-31 01:18:28', 'DD/MM/YYYY • HH:mm')).toMatch('31/12/2018 • 01:18')
  })
  /**
   * @test
   */
  it('call format with default formatter', () => {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const formatted = `${hours}:${minutes}`
    expect(format(date.toString(), 'HH:mm')).toMatch(formatted)
  })
})
