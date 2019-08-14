import https from 'https'
import http from 'http'
import environments from 'src/environments'
import app from './server'

export const endpointURL = '/v1'

let server
const startServer = () => {
  // console.log('#################### index ###########################')

  const listen = (server) => {
    server.listen({ port: config.port }, () => {
      console.log(
        '#################### start ###########################',
        '\n',
        `🚀 Server ready at port '${config.port}'`
      )
    })
    return server
  }

  const config = environments[process.env.NODE_ENV]
  if (config.ssl) {
    server = https.createServer({ key: config.key, cert: config.cert }, app(endpointURL))
    return listen(server)
  }
  server = http.createServer(app(endpointURL))
  return listen(server)
}

startServer()

if (module.hot) {
  module.hot.accept(['./server', './schema'], () => {
    server.close(() => console.log('Server closed!'))
    server = undefined
    startServer()
  })
}
