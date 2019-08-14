import $router from 'src/router'
import { replacement } from './string'

/**
 * @param {Object} element
 * @param {String|Array} path
 * @param {any} fallback
 * @returns {*}
 */
export const get = (element: any, path: any, fallback?: any): any => {
  if (element === undefined || element === null) {
    return fallback
  }

  const search = Array.isArray(path)
    ? path
    : path.split('.').filter((pieces: any) => pieces && pieces.length)

  if (!search.length) {
    return element
  }

  let property = search.shift()
  if (Array.isArray(element)) {
    // eslint-disable-next-line no-useless-escape
    property = String(property).replace(/[\[\]]+/g, '')
  }
  return get(element[property], search, fallback)
}

/**
 * @param target
 * @param options
 */
export const browse = (target: any, options: any = undefined) => {
  if (typeof target === 'string' && options && options.blank) {
    window.location.assign(target)
    return
  }

  if (typeof target === 'number') {
    $router.go(target)
    return
  }

  if (typeof target === 'string') {
    target = { path: target, query: {} }
  }

  if (options === true || (options && typeof options === 'object' && options.keep)) {
    target.query = { ...target.query, ...$router.currentRoute.query }
  }

  const regex = (expression: string) => new RegExp(`:${expression}`, 'g')
  target.path = replacement(target.path, $router.currentRoute.params, regex)

  $router.push(target)
}

/**
 * @param {*} element
 * @param {Function} action
 * @returns {*}
 */
export const clone = (element: any, action: Function = (value: any) => value): any => {
  // Handle the 3 simple types, and null or undefined
  if (element === null || element === undefined || typeof element !== 'object') {
    return action(element)
  }

  // Handle File
  if (element instanceof File) {
    return new File([element], element.name)
  }

  // Handle Date
  if (element instanceof Date) {
    const date = new Date()
    date.setTime(element.getTime())
    return action(date)
  }

  // Handle Array
  if (element instanceof Array) {
    return element.map((item) => clone(item, action))
  }

  // Handle Object
  if (element instanceof Object) {
    const reduce = (accumulate: any, property: string) => {
      accumulate[property] = clone(element[property], action)
      return accumulate
    }
    return Object.keys(element).reduce(reduce, {})
  }

  throw new Error('Unable to copy element! Its type isn\'t supported.')
}

/**
 * @returns {string}
 */
export const uuid = (): string => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}
