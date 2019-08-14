import Vue from 'vue'
import Router from 'vue-router'
import { redirect } from 'src/app/Util/routing'

import dashboard from 'src/modules/Dashboard/routeFile'
import { updateTitle } from 'src/router/middleware'

Vue.use(Router)

/**
 * @type {string}
 */
export const otherwise = '/dashboard'

/**
 * @type {VueRouter}
 */
const router = new Router()

// after create the router will call the plugin to setup routes and middleware
// the plugin approach allow distribute the router logic to each responsible domain
dashboard(router)

// special route to otherwise
router.addRoutes([redirect('*', otherwise)])

// just a simple middleware
router.afterEach(updateTitle)

export default router
