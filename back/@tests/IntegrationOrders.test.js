import { testGraphql } from './@describers'
import OrderDataSource from 'src/Schema/Order/OrderDataSource'

/**
 * @type {string}
 */
const query = `{ orders { id } }`

/**
 * @type {Object}
 */
const expected = async () => {
  const orders = await OrderDataSource.build().search(0, 10)
  return orders.map((order) => ({
    id: order.id
  }))
}

/**
 * @type {string}
 */
const path = '/orders?offset=0&limit=10'

/**
 * @type {Object}
 */
const setup = { type: 'orders', path, query, expected, variables: {} }

// noinspection JSUnresolvedFunction
describe('Order', testGraphql([setup]))
