import dayJS from 'dayjs'

/**
 * @param {string} date
 * @param {string} format
 * @returns {string}
 */
export const format = (date: string, format: string = 'DD/MM/YYYY'): string => {
  return dayJS(date).format(format)
}
