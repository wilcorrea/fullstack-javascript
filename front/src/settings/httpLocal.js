import axios from 'axios'

/**
 * @type {AxiosInstance}
 */
const http = axios.create()

/**
 * It is just an axios instance to execute the perform http local queries
 */
export default http
