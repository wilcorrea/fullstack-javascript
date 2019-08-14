import { AxiosInstance } from 'axios'
import httpLocal from 'src/settings/httpLocal'

import Http from './Http'

/**
 * @type {Local}
 */
export default class Local extends Http {
  /**
   * @param {AxiosInstance} client
   */
  constructor (client?: AxiosInstance) {
    super(client || httpLocal)
  }
}
