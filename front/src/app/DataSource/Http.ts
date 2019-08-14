import { AxiosInstance, AxiosRequestConfig } from 'axios'

/**
 * @type {Http}
 */
export default class Http {
  /**
   * @type {string}
   */
  path = '/'

  /**
   * @type {{}}
   */
  static mocks = {}

  /**
   * @type {AxiosInstance}
   */
  private client: AxiosInstance

  /**
   * @type {Http}
   */
  private static single: Http

  /**
   * @param {AxiosInstance} client
   * @returns {this}
   */
  static instance (client?: AxiosInstance) {
    if (!this.single) {
      // @ts-ignore
      this.single = new this(client)
    }
    return this.single
  }

  /**
   * @param {AxiosInstance} client
   * @returns {this}
   */
  static build (client?: AxiosInstance) {
    // @ts-ignore
    return new this(client)
  }

  /**
   * @param {AxiosInstance} client
   */
  constructor (client: AxiosInstance) {
    this.client = client
  }

  /**
   * @param {string} url
   * @param data
   * @param {AxiosRequestConfig} config
   * @returns {Promise<any>}
   */
  post (url: string = '', data?: any, config?: AxiosRequestConfig): Promise<any> {
    const mock = Http.mockRecover(url)
    if (mock) {
      return mock
    }
    return this.client.post(url, data, config)
  }

  /**
   * @param {string} url
   * @param {AxiosRequestConfig} config
   * @returns {Promise<any>}
   */
  get (url: string = '', config?: AxiosRequestConfig): Promise<any> {
    const mock = Http.mockRecover(url)
    if (mock) {
      return mock
    }
    return this.client.get(url, config)
  }

  /**
   * @param {string} url
   * @param {AxiosRequestConfig} config
   * @returns {Promise<any>}
   */
  head (url: string, config?: AxiosRequestConfig): Promise<any> {
    const mock = Http.mockRecover(url)
    if (mock) {
      return mock
    }
    return this.client.head(url, config)
  }

  /**
   * @param {string} url
   * @param data
   * @param {AxiosRequestConfig} config
   * @returns {Promise<any>}
   */
  put (url: string, data?: any, config?: AxiosRequestConfig): Promise<any> {
    const mock = Http.mockRecover(url)
    if (mock) {
      return mock
    }
    return this.client.put(url, data, config)
  }

  /**
   * @param {string} url
   * @param data
   * @param {AxiosRequestConfig} config
   * @returns {Promise<any>}
   */
  patch (url: string, data?: any, config?: AxiosRequestConfig): Promise<any> {
    const mock = Http.mockRecover(url)
    if (mock) {
      return mock
    }
    return this.client.patch(url, data, config)
  }

  /**
   * @param {string} url
   * @param {AxiosRequestConfig} config
   * @returns {Promise<any>}
   */
  delete (url: string, config?: AxiosRequestConfig): Promise<any> {
    const mock = Http.mockRecover(url)
    if (mock) {
      return mock
    }
    return this.client.delete(url, config)
  }

  /**
   * @param {string} path
   * @param value
   */
  static mockRegister (path: string, value: any = null): void {
    // @ts-ignore
    Http.mocks[path] = value
  }

  /**
   * @param {string} path
   * @returns {any}
   */
  static mockRecover (path: string): any {
    // @ts-ignore
    return Http.mocks[path]
  }
}
