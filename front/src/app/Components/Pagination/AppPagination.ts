import { CreateElement, VNode } from 'vue'
import $lang from 'src/lang'

/**
 * @type {string}
 */
const block = 'app-pagination'

/**
 * @component {AppPagination}
 */
export default {
  /**
   */
  name: 'AppPagination',
  /**
   */
  props: {
    offset: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    page: 0
  }),
  /**
   */
  methods: {
    /**
     * @returns {number}
     */
    nextPage (): number {
      // @ts-ignore
      return this.limit * ++this.page
    },
    /**
     * @param {CreateElement} h
     * @returns {VNode}
     */
    renderButtonAppend (h: CreateElement): VNode {
      const data = {
        class: `${block}__append`,
        on: {
          click: () => {
            // @ts-ignore
            this.$emit('updateOffset', { offset: this.nextPage() })
          }
        }
      }
      const children = $lang('app.components.pagination.more')

      return h('button', data, children)
    },
    /**
     * @param {CreateElement} h
     * @returns {VNode}
     */
    renderButtonToTop (h: CreateElement): VNode {
      const data = {
        class: `${block}__to-top`,
        on: {
          click: () => {
            // @ts-ignore
            this.$emit('toTop')
          }
        }
      }
      const children = [h('app-icon', { props: { name: 'arrow_upward' } })]
      return h('button', data, children)
    }
  },
  /**
   * @param {CreateElement} h
   * @returns {VNode}
   */
  render (h: CreateElement): VNode {
    const data = { class: block }
    // @ts-ignore
    const children: Array<VNode> = [this.renderButtonAppend(h), this.renderButtonToTop(h)]
    return h('div', data, children)
  }
}
