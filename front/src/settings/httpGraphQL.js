import axios from 'axios'
import { graphQL } from 'src/settings'

/**
 * @type {AxiosInstance}
 */
const http = axios.create(graphQL())

/**
 * It is just an axios instance to execute the graphql queries
 */
export default http
