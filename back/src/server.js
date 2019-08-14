import express from 'express'
import bodyParser from 'body-parser'
import { makeExecutableSchema } from 'apollo-server-express'
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express'

import schema from './schema'

/**
 * @returns {Express}
 */
export default (endpointURL) => {
  // console.log('#################### server ##########################')

  const app = express()

  if (process.env.NODE_ENV === 'development') {
    // playground
    app.use('/graphql', graphiqlExpress({ endpointURL }))
  }

  // handle CORS
  const cors = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    // intercepts OPTIONS method
    if (req.method === 'OPTIONS') {
      // respond with 200
      res.sendStatus(200)
      return
    }
    next()
  }
  app.use(cors)

  // handle GraphQL
  const graphQL = function (req, res, next) {
    const graphql = graphqlExpress({ schema: makeExecutableSchema(schema()) })
    graphql(req, res, next)
  }
  // noinspection JSCheckFunctionSignatures
  app.use(endpointURL, bodyParser.json(), graphQL)

  return app
}
