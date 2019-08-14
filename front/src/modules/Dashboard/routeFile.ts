import { VueRouter } from 'vue-router/types/router'
import order from 'src/domains/Order/routeFile'
import { group, route } from 'src/app/Util/routing'

// main layout
export const layout = () => import('src/modules/Dashboard/Layout.vue')
// welcome page
export const welcome = () => import('src/views/Welcome.vue')
// about page (use ping)
export const about = () => import('src/views/About.vue')

/**
 * Mais route file of dashboard module
 * @param {VueRouter} router
 * @returns void
 */
export default (router: VueRouter): void => {
  // join all the kids
  const children = [
    route('', 'welcome', welcome),
    route('/dashboard/about', 'about', about),
    ...order(router)
  ]
  // register the routes
  router.addRoutes([group('/dashboard', layout, children)])
}
