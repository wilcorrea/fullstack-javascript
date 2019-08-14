import lang from './lang'
import browse from './browse'
import util from './util'
import './polyfill'

/**
 * @type {{install: Function}}
 */
export default {
  install (Vue: any) {
    lang(Vue)
    browse(Vue)
    util(Vue)
  }
}
