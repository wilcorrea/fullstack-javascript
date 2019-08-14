import { RouteConfig, VueRouter } from 'vue-router/types/router'
import { group, route } from 'src/app/Util/routing'

/** @type {string} */
export const orderPath = '/dashboard/orders'

// index of Order
export const index = () => import('src/modules/Dashboard/Group.vue')

// Orders page
export const orders = () => import('src/views/Orders.vue')

// Order details page
export const order = () => import('src/views/Order.vue')

/**
 * @param {VueRouter} router
 * @returns Array<RouteConfig>
 */
export default (router: VueRouter): Array<RouteConfig> => {
  // the kids together
  const children = [
    route('', 'orders', orders),
    route(`${orderPath}/:id`, 'order', order)
  ]

  return [
    group(orderPath, index, children)
  ]
}
