import 'src/boot/polyfill.js'
import { money, unMoney } from 'src/app/Util/currency'

describe('currency', () => {
  /**
   * @test
   */
  it('convert numbers to money', () => {
    expect(money(1)).toEqual('R$ 1,00')
    expect(unMoney('R$ 1,00')).toEqual(1.00)
  })

  /**
   * @test
   */
  it('thousands format', () => {
    expect(money(1234)).toEqual('R$ 1.234,00')
    expect(unMoney('R$ 1.234,00')).toEqual(1234)
  })

  /**
   * @test
   */
  it('decimals format', () => {
    expect(money(12.34)).toEqual('R$ 12,34')
    expect(unMoney('R$ 12,34')).toEqual(12.34)
  })

  /**
   * @test
   */
  it('huge numbers', () => {
    expect(money(90071992547409.23))
      .toEqual('R$ 90.071.992.547.409,23')
    expect(unMoney('R$ 90.071.992.547.409,23'))
      .toEqual(90071992547409.23)
  })

  /**
   * @test
   */
  it('custom arguments', () => {
    expect(money(1900.2334, 3, ',', '.', '$ '))
      .toEqual('$ 1,900.233')
    expect(unMoney('$ 1,900.233', ',', '.', '$ '))
      .toEqual(1900.233)

    expect(money(1900.2334, 3, '@', '#', '~> '))
      .toEqual('~> 1@900#233')
    expect(unMoney('~> 1@900#233', '@', '#', '~> '))
      .toEqual(1900.233)

    expect(money(1900.2334, 5, undefined, undefined, ''))
      .toEqual('1.900,23340')
    expect(money(1900.2734, 1, undefined, undefined, ''))
      .toEqual('1.900,3')
  })

  /**
   * @test
   */
  it('bad arguments', () => {
    expect(money('12,34')).toEqual('R$ NaN,00')
    expect(unMoney('$ 1@900#233', '@', '#', '~>'))
      .toBeNaN()
  })
})
