import { testGraphql } from './@describers'
import OrderDataSource from 'src/Schema/Order/OrderDataSource'

/**
 * @type {string}
 */
const query = `{ order (id:"ORD-4S2P3DSGU5ZK") { id } }`

/**
 * @type {Object}
 */
const expected = async () => {
  const order = await OrderDataSource.build().get('ORD-4S2P3DSGU5ZK')
  return { id: order.id }
}

/**
 * @type {string}
 */
const path = '/order/integration'

/**
 * @type {Object}
 */
const setup = { type: 'order', path, query, expected, variables: {} }

// noinspection JSUnresolvedFunction
describe('Order', testGraphql([setup]))
