import { CreateElement, VNode } from 'vue'
import AppTableBody from 'src/app/Components/Table/AppTableBodyMixin'
import AppTableHead from 'src/app/Components/Table/AppTableMixinHead'
import AppTableValue from 'src/app/Components/Table/AppTableMixinValue'
import AppTableStyle from 'src/app/Components/Table/AppTableMixinStyle'
import AppTableEvent from './AppTableEvent'
import { block } from './index'

/**
 */
export default {
  /**
   */
  name: 'AppTable',
  /**
   */
  mixins: [
    AppTableHead, AppTableBody, AppTableValue, AppTableStyle, AppTableEvent
  ],
  /**
   */
  props: {
    columns: {
      type: Array,
      required: true
    },
    records: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    loader: {
      type: String,
      default: '<div class="ld ld-ring ld-vortex-in"></div>'
    },
    pressHold: {
      type: Boolean,
      default: true
    }
  },
  /**
   */
  methods: {
    /**
     * @param {CreateElement} h
     * @returns {VNode | undefined}
     */
    table (h: CreateElement): VNode | undefined {
      // @ts-ignore
      if (!this.columns) {
        return
      }
      const data = { class: block }
      const children = [
        this.tableContainer(h),
        this.tableShadow(h)
      ]

      return h('div', data, children)
    },
    /**
     * @param {CreateElement} h
     * @returns {VNode}
     */
    tableContainer (h: CreateElement): VNode {
      const root = `${block}__container`
      // @ts-ignore
      const loading = this.loading ? `${root}--loading` : ''
      const data = { class: [root, loading], attrs: { move: true } }
      // @ts-ignore
      const table = [this.thead(h, this.columns), this.tbody(h, this.columns, this.records)]
      const children = [
        h('table', table),
        this.tableLoading(h)
      ]
      return h('div', data, children)
    },
    /**
     * @param {CreateElement} h
     * @returns {VNode}
     */
    tableLoading (h: CreateElement): VNode {
      // @ts-ignore
      const visible = this.loading ? `${block}__loading--visible` : ''
      // @ts-ignore
      const html = `<div class="${block}__loading-container">${this.loader}</div>`
      const data = {
        class: [`${block}__loading`, visible],
        domProps: { innerHTML: html }
      }
      return h('div', data)
    },
    /**
     * @param {CreateElement} h
     * @returns {VNode}
     */
    tableShadow (h: CreateElement): VNode {
      // @ts-ignore
      const loading = this.loading ? `${block}__shadow--loading` : ''
      return h('div', { class: [`${block}__shadow`, loading] })
    }
  },
  /**
   * @param {CreateElement} h
   * @returns {VNode}
   */
  render (h: CreateElement): VNode {
    // @ts-ignore
    return this.table(h)
  }
}
