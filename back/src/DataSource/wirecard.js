import axios from 'axios'

/**
 * @type {AxiosInstance}
 */
const http = axios.create({
  baseURL: 'https://sandbox.moip.com.br/v2'
})

http.defaults.headers.common['Authorization'] = 'Basic MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDE6QUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQg=='

export default http
