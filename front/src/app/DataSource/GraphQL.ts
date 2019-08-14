import { AxiosInstance } from 'axios'
import httpGraphQL from 'src/settings/httpGraphQL'

import { get } from 'src/app/Util/general'
import { replacement } from 'src/app/Util/string'

import Http from './Http'
import { GraphQLQuery } from './graphQL.d'

/**
 * @type {GraphQL}
 */
export default class GraphQL extends Http {
  /**
   * @type {string}
   */
  namespace = '/root'

  /**
   * @type {GraphQLQuery}
   */
  protected getter: GraphQLQuery = { query: '', name: '' }

  /**
   * @type {GraphQLQuery}
   */
  protected searcher: GraphQLQuery = { query: '', name: '' }

  /**
   * @param {AxiosInstance} client
   */
  constructor (client?: AxiosInstance) {
    super(client || httpGraphQL)
  }

  /**
   * @param {string} id
   * @returns {Object}
   */
  async read (id: string) {
    const path = `${this.namespace}/get/${id}`
    const mock = Http.mockRecover(path)
    if (mock) {
      return mock
    }
    const result = await this.query(this.getter, { id })
    return get(result, `data`, {})
  }

  /**
   * @returns {Array}
   */
  async search (offset = 0, limit = 10) {
    const path = `${this.namespace}/search/offset=${offset}/limit=${limit}`
    const mock = Http.mockRecover(path)
    if (mock) {
      return mock
    }
    const result = await this.query(this.searcher, { offset, limit })
    return get(result, `data`, {})
  }

  /**
   * @param {string} graphQL
   * @param variables
   * @returns {Promise<void>}
   */
  async query (graphQL: GraphQLQuery, variables: any) {
    const data = {
      query: `{
        ${graphQL.name} ${replacement(graphQL.query, variables)}
      }`
    }
    try {
      const result = await this.post('', data)
      return get(result, 'data')
    } catch (e) {
      // TODO: report errors
      console.error(e)
    }
  }
}
