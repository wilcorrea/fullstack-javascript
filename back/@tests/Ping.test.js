import { testGraphql } from './@describers'
import { answer as expected } from 'src/Schema/Ping/PingGraphQL'

/**
 * @type {string}
 */
const query = `{ ping }`

/**
 * @type {Object}
 */
const setup = { type: 'ping', path: 'ping', query, expected, variables: {} }

// noinspection JSUnresolvedFunction
describe('Ping', testGraphql([setup]))
