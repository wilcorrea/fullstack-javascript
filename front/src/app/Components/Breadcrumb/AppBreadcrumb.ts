import { CreateElement, RenderContext } from 'vue'
import { RouteRecord } from 'vue-router'
import $router from 'src/router'
import $lang from 'src/lang'
import { browse } from 'src/app/Util/general'

/**
 * @type {string}
 */
const block = 'app-breadcrumb'

/**
 * @param {CreateElement} h
 * @param {Array<RouteRecord>} routes
 * @returns {VNode}
 */
const ul = (h: CreateElement, routes: Array<RouteRecord>) => {
  const data = { class: block }
  const children = routes.map((route) => li(h, route))
  return h('ul', data, children)
}

/**
 * @param {CreateElement} h
 * @param {RouteRecord} route
 * @returns {VNode}
 */
const li = (h: CreateElement, route: RouteRecord) => {
  let expression = $lang(`pages.${route.path}.crumb`)
  if (!expression) {
    return
  }

  if (typeof expression === 'function') {
    // @ts-ignore
    expression = expression({ route: $router.currentRoute })
  }
  const data = { class: `${block}__item` }
  const children = [a(h, String(expression), route.path, String(route.name))]

  return h('li', data, children)
}

/**
 * @param {CreateElement} h
 * @param {string} crumb
 * @param {string} path
 * @param {string} name
 * @returns {VNode}
 */
const a = (h: CreateElement, crumb: string, path: string, name: string) => {
  const data = {
    class: `${block}__item__a ${name}`,
    on: { click: () => browse(path) }
  }

  return h('a', data, crumb)
}

/**
 * @component {AppBreadcrumb}
 */
const AppBreadcrumb = {
  /**
   */
  functional: true,
  /**
   */
  name: 'AppBreadcrumb',
  /**
   * @param {CreateElement} h
   * @param {RenderContext} context
   */
  render (h: CreateElement, context: RenderContext) {
    const { parent, props } = context

    return ul(h, parent.$route ? parent.$route.matched : props.routes)
  }
}

export default AppBreadcrumb
