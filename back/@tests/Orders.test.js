import { testGraphql } from './@describers'
import Service from 'src/DataSource/Service'

/**
 * @type {string}
 */
const query = `{ orders { id } }`

/**
 * @type {Object}
 */
const expected = [{ id: 'ORD-4S2P3DSGU5ZK' }]

/**
 * @type {string}
 */
const path = '/orders?offset=0&limit=10'

/**
 * @type {Object}
 */
const setup = { type: 'orders', path, query, expected, variables: {} }

// mock data
Service.mock(path, expected)

// noinspection JSUnresolvedFunction
describe('Orders', testGraphql([setup]))
