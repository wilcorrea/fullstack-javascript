import { TableField } from 'src/app/Agnostic/interfaces'
import { get } from 'src/app/Util/general'

/**
 */
export default {
  /**
   */
  methods: {
    /**
     * @param {TableField} column
     * @param {string} type
     * @returns {any}
     */
    parseColumnStyle (column: TableField, type: string): any {
      if (typeof column.stylish === 'function') {
        return column.stylish(type)
      }

      const map = {
        width: 'max-width',
        height: 'height',
        align: 'text-align'
      }
      const reducer = (accumulator: any, key: any) => {
        const value = get(column, key)
        if (value) {
          // @ts-ignore
          accumulator[map[key]] = value
        }
        return accumulator
      }
      return Object.keys(map).reduce(reducer, {})
    }
  }
}
