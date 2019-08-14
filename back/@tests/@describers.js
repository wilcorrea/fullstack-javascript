import { graphql } from 'graphql'
import { makeExecutableSchema } from 'apollo-server-express'
import schema from 'src/schema'

/**
 * @param {Array} cases
 * @returns {Function}
 */
export const testGraphql = (cases) => {
  return () => {
    const perform = ($case) => {
      const { type, path, query, variables, context, expected } = $case

      test('query: ' + path, async () => {
        // noinspection JSCheckFunctionSignatures
        const result = await graphql(makeExecutableSchema(schema()), query, null, context, variables)
        if (typeof expected === 'function') {
          // noinspection JSUnresolvedFunction
          return expect(result.data[type]).toEqual(await expected())
        }
        // noinspection JSUnresolvedFunction
        return expect(result.data[type]).toEqual(expected)
      })
    }
    cases.forEach(perform)
  }
}
