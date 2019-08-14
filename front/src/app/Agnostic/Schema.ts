import Skeleton from 'src/app/Agnostic/Skeleton'
import { format } from 'src/app/Util/datetime'
import { FieldTableFormatter, Record } from './interfaces'
import { html, link } from 'src/app/Components/Table/formatters'
import { replacement, regexByColon } from '@/app/Util/string'

/**
 * @type {Schema}
 */
export default class Schema extends Skeleton {
  /**
   * @param {boolean} tableAvailable
   * @returns {Schema}
   */
  setTableAvailable (tableAvailable: boolean = true): Schema {
    this.__fields[this.__currentField].tableAvailable = tableAvailable
    return this
  }

  /**
   * @param {string} tableWidth
   * @returns {Schema}
   */
  setTableWidth (tableWidth: string): Schema {
    this.__fields[this.__currentField].tableWidth = tableWidth
    return this
  }

  /**
   * @param {string} tableHeight
   * @returns {Schema}
   */
  setTableHeight (tableHeight: string): Schema {
    this.__fields[this.__currentField].tableHeight = tableHeight
    return this
  }

  /**
   * @param {string} tableTextAlign
   * @returns {Schema}
   */
  setTableTextAlign (tableTextAlign: string): Schema {
    this.__fields[this.__currentField].tableTextAlign = tableTextAlign
    return this
  }

  /**
   * @param {FieldTableFormatter} tableFormat
   * @returns {Schema}
   */
  setTableFormat (tableFormat: FieldTableFormatter): Schema {
    this.__fields[this.__currentField].tableFormatter = tableFormat
    return this
  }

  /**
   * @param {FieldTableFormatter} tableHtml
   * @returns {Schema}
   */
  setTableHtml (tableHtml: Function): Schema {
    // @ts-ignore
    // noinspection UnnecessaryLocalVariableJS
    const formatter = ({ h, column, record, value, key }) => {
      return html({ h, column, record, value, key, render: tableHtml })
    }
    this.__fields[this.__currentField].tableFormatter = formatter
    return this
  }

  /**
   * @param {FieldTableFormatter} tableComponent
   * @returns {Schema}
   */
  setTableComponent (tableComponent: FieldTableFormatter): Schema {
    this.__fields[this.__currentField].tableFormatter = tableComponent
    return this
  }

  /**
   * @param {Function} tableStyle
   * @returns {Schema}
   */
  setTableStyle (tableStyle: Function): Schema {
    this.__fields[this.__currentField].tableStyle = tableStyle
    return this
  }

  /**
   * @param {string} path
   * @returns {Schema}
   */
  setTableLink (path: string): Schema {
    const key = this.__currentField
    // @ts-ignore
    // noinspection UnnecessaryLocalVariableJS
    const formatter = ({ h, column, value }) => {
      const replaces = { [key]: value }
      return link(h, column, value, replacement(path, replaces, regexByColon))
    }
    this.__fields[this.__currentField].tableFormatter = formatter
    return this
  }

  /**
   * @param {boolean} formAvailable
   * @returns {Schema}
   */
  setFormAvailable (formAvailable: boolean = true): Schema {
    this.__fields[this.__currentField].formAvailable = formAvailable
    return this
  }

  /**
   * @param {string} formComponent
   * @param {Record} formAttrs
   * @returns {Schema}
   */
  setFormComponent (formComponent: string, formAttrs: Record = {}): Schema {
    this.__fields[this.__currentField].formComponent = formComponent
    this.__fields[this.__currentField].formAttrs = formAttrs
    return this
  }

  /**
   * @param {number} formWidth
   * @returns {this}
   */
  setFormWidth (formWidth: number) {
    this.__fields[this.__currentField].formWidth = formWidth
    return this
  }

  /**
   * @returns {Schema}
   */
  fieldIsDate () {
    this.setField(this.__currentField, {
      tableWidth: '140px',
      tableFormatter: ({ value }) => format(value, 'DD/MM/YYYY • HH:mm')
    })
    return this
  }
}
