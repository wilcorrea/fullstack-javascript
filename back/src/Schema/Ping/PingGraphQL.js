/**
 * @type {string}
 */
export const answer = 'pong!!!'

/**
 * @returns {Array}
 */
export const PingQuery = () => [
  'ping: String'
]

/**
 * @returns {string}
 */
export const PingType = () => ''

/**
 * @returns {Object}
 */
export const PingResolver = () => {
  // console.log('#################### PingResolver ####################')

  return {
    ping: () => answer
  }
}
