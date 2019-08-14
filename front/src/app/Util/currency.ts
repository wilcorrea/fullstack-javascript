/**
 * @param value
 * @param {currency} precision
 * @param {string} thousands
 * @param {string} decimal
 * @param {string} currency
 * @returns {string}
 */
export const money = (
  value: number,
  precision: number = 2,
  thousands: string = '.',
  decimal: string = ',',
  currency: string = 'R$ '
): string => {
  const pieces = Number(value).toFixed(precision).split('.')
  const left: any = pieces[0]
  const right = (pieces.length === 1 ? '' : pieces[1]).padEnd(precision, '0')
  // noinspection RegExpRedundantEscape
  const answer = left
    .reverse()
    .replace(/(\d{3})/g, `$1${thousands}`)
    .reverse()
    .replace(new RegExp(`^\\${thousands}`, 'g'), '')
    .concat(`${decimal}${right}`)
  if (!currency) {
    return answer
  }
  return `${currency}${answer}`
}

/**
 * @param value
 * @param {string} thousands
 * @param {string} decimal
 * @param {string} currency
 * @returns {number | any}
 */
export const unMoney = (
  value: string,
  thousands: string = '.',
  decimal: string = ',',
  currency: string = 'R$ '
): number => {
  // noinspection RegExpRedundantEscape
  const string = String(value)
    .replace(currency, '')
    .replace(new RegExp(`\\${thousands}`, 'g'), '')
    .replace(new RegExp(`\\${decimal}`, 'g'), '.')
  return Number(string)
}
