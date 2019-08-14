import { AxiosInstance } from 'axios'
import httpWirecard from 'src/settings/httpWirecard'

import Http from './Http'

/**
 * @type {Rest}
 */
export default class Rest extends Http {
  /**
   * @type {string}
   */
  path = '/'

  /**
   * @param {AxiosInstance} client
   */
  constructor (client?: AxiosInstance) {
    super(client || httpWirecard)
  }

  /**
   * @param {string} id
   * @returns {Object}
   */
  async read (id: string) {
    const path = `${this.path}/${id}`
    const mock = Http.mockRecover(path)
    if (mock) {
      return mock
    }
    const result = await this.get(path)
    return result.data
  }

  /**
   * @returns {Array}
   */
  async search (offset = 0, limit = 10) {
    const path = `${this.path}?offset=${offset}&limit=${limit}`
    const mock = Http.mockRecover(path)
    if (mock) {
      return mock
    }
    const result = await this.get(path)
    return result.data
  }
}
