import { CreateElement, VNode } from 'vue'
import { TableField } from 'src/app/Agnostic/interfaces'
import { block } from './index'

/**
 */
export default {
  /**
   */
  methods: {
    /**
     * @param {CreateElement} h
     * @param {Array<TableField>} columns
     * @returns {VNode}
     */
    thead (h: CreateElement, columns: Array<TableField>): VNode {
      const children = columns.map((column: TableField) => {
        // @ts-ignore
        const style: any = this.parseColumnStyle(column, 'th')
        const data = {
          class: `${block}__th ${block}__${column.key}`,
          style: {
            width: style['max-width'],
            textAlign: style.textAlign ? style.textAlign : style['text-align']
          }
        }
        return h('th', { style: { width: style['max-width'] } }, [h('div', data, column.label)])
      })
      return h('thead', [h('tr', children)])
    }
  }
}
