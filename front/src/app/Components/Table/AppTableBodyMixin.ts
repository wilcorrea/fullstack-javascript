import { CreateElement, VNode } from 'vue'
import { TableField, Record } from 'src/app/Agnostic/interfaces'
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
     * @param records
     * @returns {VNode}
     */
    tbody (h: CreateElement, columns: Array<TableField>, records: any): VNode {
      if (!records) {
        return h('tbody', this.tbodyEmpty(h))
      }
      // <transition-group tag="ul" name="list"
      const data = { props: { tag: 'tbody', name: 'app-table__list' } }
      const children = this.tbodyRows(h, columns, records)
      return h('transition-group', data, children)
    },
    /**
     * @param {CreateElement} h
     * @returns {VNode}
     */
    tbodyEmpty (h: CreateElement): Array<VNode> {
      return [h('tr', [h('td', 'no-data')])]
    },
    /**
     * @param {CreateElement} h
     * @param {Array<TableField>} columns
     * @param {Array<Record>} records
     * @returns {Array<VNode>}
     */
    tbodyRows (h: CreateElement, columns: Array<TableField>, records: Array<Record>): Array<VNode> {
      return records.map((record: Record, index: number) => this.tbodyRow(h, columns, record, index))
    },
    /**
     * @param {CreateElement} h
     * @param {Array<TableField>} columns
     * @param {Record} record
     * @param {number} index
     * @returns {VNode}
     */
    tbodyRow (h: CreateElement, columns: Array<TableField>, record: Record, index: number) {
      const data = { key: index }
      const children = columns.map((column: TableField) => {
        const data = { class: `${block}__${column.key}--value` }
        // @ts-ignore
        const style: any = this.parseColumnStyle(column, 'td')
        // @ts-ignore
        data.style = { style: { width: style['max-width'] } }
        return h('td', data, this.tbodyRowValue(h, style, record, column))
      })
      return h('tr', data, children)
    },
    /**
     * @param {CreateElement} h
     * @param style
     * @param {Record} record
     * @param {TableField} column
     * @returns {Array<VNode>}
     */
    tbodyRowValue (h: CreateElement, style: any, record: Record, column: TableField): Array<VNode> {
      const data = { class: `${block}__td`, style }
      // @ts-ignore
      return [h('div', data, this.tbodyRowValueCell(record, column, h))]
    }
  }
}
