import { testGraphql } from './@describers'
import Service from 'src/DataSource/Service'

/**
 * @type {string}
 */
const query = `{ order (id:"ORD-4S2P3DSGU5ZK") { id } }`

/**
 * @type {Object}
 */
const expected = { id: 'ORD-4S2P3DSGU5ZK' }

/**
 * @type {string}
 */
const path = '/orders/ORD-4S2P3DSGU5ZK'

/**
 * @type {Object}
 */
const setup = { type: 'order', path, query, expected, variables: {} }

// mock data
Service.mock(path, expected)

// noinspection JSUnresolvedFunction
describe('Order', testGraphql([setup]))
