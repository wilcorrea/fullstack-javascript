import wirecard from './wirecard'

/**
 * @type {Service}
 */
export default class Service {
  /**
   * @type {string}
   */
  path = '/'

  /**
   * @type {{}}
   */
  static mocks = {}

  /**
   * @returns {this}
   */
  static build () {
    return new this()
  }

  /**
   * @param {AxiosInstance} http
   */
  constructor (http) {
    this.http = http || wirecard
  }

  /**
   * @param {string} id
   * @returns {Object}
   */
  async get (id) {
    const path = `${this.path}/${id}`
    if (this.constructor.mocks[path]) {
      return this.constructor.mocks[path]
    }
    const result = await this.http.get(path)
    return result.data
  }

  /**
   * @returns {Array}
   */
  async search (offset = 0, limit = 10) {
    const path = `${this.path}?offset=${offset}&limit=${limit}`
    if (this.constructor.mocks[path]) {
      return this.constructor.mocks[path]
    }
    const result = await this.http.get(path)
    return result.data.orders
  }

  /**
   * @param {string} path
   * @param {*} value
   */
  static mock (path, value) {
    Service.mocks[path] = value
  }
}
