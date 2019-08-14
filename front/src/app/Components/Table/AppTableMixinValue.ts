import { CreateElement } from 'vue'
import { TableField, Record } from 'src/app/Agnostic/interfaces'
import { get } from 'src/app/Util/general'

/**
 */
export default {
  /**
   */
  methods: {
    /**
     * @param {Record} record
     * @param {TableField} column
     * @param {CreateElement} h
     * @returns {any}
     */
    tbodyRowValueCell (record: Record, column: TableField, h: CreateElement): any {
      const value = this.getValue(column, record)
      const key = column.key
      if (!column.formatter) {
        return value
      }
      return column.formatter({ h, value, record, column, key })
    },
    /**
     * @param {TableField} column
     * @param {Record} record
     * @returns {any}
     * @private
     */
    getValue (column: TableField, record: Record) {
      return get(record, column.key, {})
    }
  }
}
