import GraphQL from 'src/app/DataSource/GraphQL'
import { GraphQLQuery } from 'src/app/DataSource/graphQL.d'

/**
 * @type {PingService}
 */
export default class PingService extends GraphQL {
  /**
   * @type {GraphQLQuery}
   */
  protected getter: GraphQLQuery = {
    name: 'ping',
    query: ''
  }

  /**
   * @type {GraphQLQuery}
   */
  protected searcher: GraphQLQuery = {
    name: 'ping',
    query: ''
  }
}
