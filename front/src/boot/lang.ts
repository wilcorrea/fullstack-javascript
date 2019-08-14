import $lang from 'src/lang'

/**
 * @param {Vue} Vue
 * @returns {}
 */
export default (Vue: any) => {
  /**
   */
  Object.defineProperty(Vue.prototype, '$lang', {
    get () {
      return $lang
    }
  })
}
