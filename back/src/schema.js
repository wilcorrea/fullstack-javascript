import { gql } from 'apollo-server-express'

import { PingQuery, PingType, PingResolver } from './Schema/Ping/PingGraphQL'
import { OrderQuery, OrderType, OrderResolver } from './Schema/Order/OrderGrapQL'

/**
 * @type {Object}
 */
export default () => {
  // console.log('#################### schema ##########################')

  const Query = `
  type Query {
    ${PingQuery().join('\n')}
    ${OrderQuery().join('\n')}
  }
`

  /**
   * @type {Array}
   */
  const typeDefs = [
    PingType(),
    OrderType(),
    gql(Query)
  ]

  /**
   * @type {Object}
   */
  const resolvers = {
    Query: {
      ...PingResolver(),
      ...OrderResolver()
    }
  }

  return { typeDefs, resolvers }
}
