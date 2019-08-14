import { RouteConfig } from 'vue-router'

/**
 * @param {string} path
 * @param {string} redirect
 * @returns RouteConfig
 */
export const redirect = (path: string, redirect: string): RouteConfig => {
  return { path, redirect }
}

/**
 * @param {string} path
 * @param {string} name
 * @param {Function} component
 * @param {any} [meta]
 * @returns RouteConfig
 */
export const route = (
  path: string,
  name: string,
  component: Function,
  meta: any = {}
): RouteConfig => {
  return { path, name, component, meta }
}

/**
 * @param {string} path
 * @param {Function} component
 * @param {Array<RouteConfig>>} [children]
 * @returns RouteConfig
 */
export const group = (
  path: string,
  component: Function,
  children: Array<RouteConfig> = []
): RouteConfig => {
  return { path, component, children }
}
