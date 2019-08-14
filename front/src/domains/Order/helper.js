/**
 * @returns {Object}
 */
export const statusBackgrounds = () => ({
  WAITING: 'rgb(42, 91, 185)',
  PAID: 'rgb(0, 253, 198)',
  NOT_PAID: 'rgb(255, 0, 0)', // TODO: apply the correct color
  REVERTED: 'rgb(255, 150, 0)' // TODO: apply the correct color
})

/**
 * @returns {Object}
 */
export const statusForegrounds = () => ({
  WAITING: 'rgb(255, 255, 255)',
  PAID: 'rgb(66, 66, 66)',
  NOT_PAID: 'rgb(255, 255, 255)',
  REVERTED: 'rgb(255, 255, 255)'
})
