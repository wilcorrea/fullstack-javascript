import {
  Field,
  Fields,
  FormField,
  FormFields,
  TableField,
  TableSchema,
  FormSchema,
  Record
} from 'src/app/Agnostic/interfaces'
import $lang from 'src/lang'
import { clone } from '../Util/general'

/**
 * @type {Skeleton}
 */
export default class Skeleton {
  /**
   * @type {string}
   */
  protected namespace: string = ''

  /**
   * @type {string}
   */
  protected __currentField: string = ''

  /**
   * @type {Fields}
   */
  protected __fields: Fields = {}

  /**
   */
  private __hooks: Record = {}

  /**
   * @type {Schema}
   */
  private static single: Skeleton

  /**
   * @returns {Schema}
   */
  static instance () {
    if (!this.single) {
      this.single = new this()
    }
    return this.single
  }

  /**
   */
  constructor () {
    // call construct
    this.construct()
  }

  /**
   */
  protected construct () {
    throw new Error(`The method construct is required to Schema subclasses`)
  }

  /**
   * @param {string} key
   * @param {Field} field
   * @returns {Schema}
   */
  addField (key: string, field: Field = {}): any {
    if (this.__fields[key]) {
      throw new Error(`The key '${key}' already exists`)
    }
    field.key = key
    if (!field.label) {
      field.label = $lang(`domains.${this.namespace}.${key}.label`)
    }
    this.__fields[key] = field
    // @ts-ignore
    this.__fields['tableFormatter'] = ({ value }) => value
    this.__fields['formAttrs'] = {}
    this.__currentField = key
    return this
  }

  /**
   * @param {string} key
   * @param {Field} field
   * @returns {Schema}
   */
  setField (key: string, field: Field): any {
    if ((!this.__fields[key]) || (field.key && field.key !== this.__fields[key].key)) {
      throw new Error(`The key '${key}' is invalid`)
    }
    this.__fields[key] = {
      ...this.__fields[key],
      ...field
    }
    this.__currentField = key
    return this
  }

  /**
   * @param {string} key
   * @returns {Schema}
   */
  getField (key: string): Field {
    if (!this.__fields[key]) {
      throw new Error(`The field '${key}' not exists`)
    }
    this.__currentField = key
    return this.__fields[key]
  }

  /**
   * @returns {FormFields}
   */
  fields () {
    const fields = Object.keys(this.__fields).reduce((accumulator: FormFields, key: string) => {
      const field: Field = this.__fields[key]
      if (!field.formAvailable) {
        return accumulator
      }
      const label = field.label || ''
      // noinspection UnnecessaryLocalVariableJS
      const formField: FormField = {
        key,
        label,
        is: field.formComponent || 'input',
        hidden: field.formHidden || false,
        width: field.formWidth || 100,
        height: 1,
        attrs: { label, ...field.formAttrs },
        listeners: {}
      }
      accumulator[key] = formField
      return accumulator
    }, {})
    return clone(fields)
  }

  /**
   * @returns {Record}
   */
  record () {
    return Object.keys(this.__fields).reduce((accumulator: Record, key: string) => {
      accumulator[key] = this.__fields[key].formDefault
      return accumulator
    }, {})
  }

  /**
   * @returns {Array<TableField>}
   */
  columns (): Array<TableField> {
    const columns = Object.values(this.__fields)
      .filter((field) => field.tableAvailable)
      .map((column) => {
        // @ts-ignore
        const tableField: TableField = {
          key: column.key || '',
          label: column.label || '',
          width: column.tableWidth || '',
          height: column.tableHeight || '',
          align: column.tableTextAlign || '',
          formatter: column.tableFormatter,
          stylish: column.tableStyle
        }
        return tableField
      })
    return clone(columns)
  }

  /**
   * @param {string} name
   * @param {Function} callable
   */
  protected addHook (name: string, callable: Function) {
    this.__hooks[name] = callable
  }

  /**
   * @returns {any}
   */
  public hooks () {
    return clone(this.__hooks)
  }

  /**
   * @returns {TableSchema}
   */
  public table (): TableSchema {
    return { columns: this.columns(), hooks: this.hooks() }
  }

  /**
   * @returns {FormSchema}
   */
  public form (): FormSchema {
    return { fields: this.fields(), record: this.record(), hooks: this.hooks() }
  }
}
