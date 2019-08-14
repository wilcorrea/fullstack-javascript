/**
 * @mixin HooksMixin
 */
export default {
  /**
   * The hooks!
   */
  hooks: {},
  /**
   */
  methods: {
    /**
     * @param hooks
     */
    installHooks (hooks) {
      this.$options.hooks = hooks
    },
    /**
     * @param {string} hook
     */
    triggerHook (hook) {
      if (typeof this.$options.hooks[hook] === 'function') {
        this.$options.hooks[hook].call(this)
      }
    }
  },
  /**
   */
  created () {
    this.triggerHook('component:created')
  },
  /**
   */
  mounted () {
    this.triggerHook('component:mounted')
  },
  /**
   */
  destroyed () {
    this.triggerHook('component:destroyed')
  }
}
