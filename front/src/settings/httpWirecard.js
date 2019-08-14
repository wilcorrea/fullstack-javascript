import axios from 'axios'
import { wirecard } from 'src/settings'

const options = wirecard()

/**
 * @type {AxiosInstance}
 */
const http = axios.create({
  baseURL: options.baseURL
})

// set the auth headers
http.defaults.headers.common['Authorization'] = options.authorization

/**
 * Provide a connection to wirecard api
 */
export default http
