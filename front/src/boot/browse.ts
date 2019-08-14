import { browse } from 'src/app/Util/general'

/**
 * @param {Vue} Vue
 * @returns {}
 */
export default (Vue: any) => {
  /**
   */
  Object.defineProperty(Vue.prototype, '$browse', {
    get () {
      return browse
    }
  })
}
