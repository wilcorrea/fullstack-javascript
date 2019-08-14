import util from 'src/app/Util'

/**
 * @param {Vue} Vue
 * @returns {}
 */
export default (Vue: any) => {
  /**
   */
  Object.defineProperty(Vue.prototype, '$util', {
    get () {
      return util
    }
  })
}
