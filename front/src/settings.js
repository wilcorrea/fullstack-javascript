/**
 * Function to get default app lang
 * @returns {string}
 */
export const i18n = () => env('VUE_APP_I18N', 'pt-br')

/**
 * Casting to wirecard settings
 * Just useful to use Rest (we can use the both in this project =)
 * @returns {{authorization: string, baseURL: string}}
 */
export const wirecard = () => {
  return {
    baseURL: env('VUE_APP_WIRECARD_BASE_URL'),
    authorization: env('VUE_APP_WIRECARD_AUTHORIZATION')
  }
}

/**
 * GraphQL settings to access the backend graphql services
 * @returns {{baseURL: string}}
 */
export const graphQL = () => {
  return { baseURL: env('VUE_APP_GRAPH_QL_BASE_URL') }
}

/**
 * Small helper to access the env
 * ##### I dont know if it is useful, maybe not (it's a WIP) :/ #####
 * @param {string} name
 * @param {*} fallback
 * @returns {string|*}
 */
export const env = (name, fallback = undefined) => {
  try {
    if (process.env[name]) {
      return process.env[name]
    }
  } catch (e) {
    // silent
    console.error(e)
  }
  return fallback
}
