import { Route } from 'vue-router'
import $lang from 'src/lang'
import { env } from 'src/settings'

/**
 * Perform the change of document title with title related to page
 * It will use i18n and route path to get the title
 * > It works better in afterEach
 * @param {Route} to
 * @middleware beforeEach(to: Route, from: Route, next: Function)
 * @middleware afterEach(to: Route, from: Route)
 */
export const updateTitle = (to: Route) => {
  // get the last match
  const route = to.matched[to.matched.length - 1]
  // update the document title
  if (window && window.document) {
    window.document.title = $lang(`pages.${route.path}.title`, env('VUE_APP_DEFAULT_TITLE'))
  }
}
