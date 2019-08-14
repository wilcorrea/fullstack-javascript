import { CreateElement } from 'vue'

/**
 * @interface {Field}
 */
export interface Field {
  label?: string,
  key?: string,

  tableAvailable?: boolean
  tableWidth?: string,
  tableHeight?: string,
  tableTextAlign?: string,
  tableStyle?: Function,
  tableFormatter?: FieldTableFormatter

  formComponent?: string
  formAttrs?: Record
  formWidth?: number
  formAvailable?: boolean
  formHidden?: boolean
  formDefault?: any
}

/**
 * @interface {TableField}
 */
export interface TableField {
  label: string,
  key: string,
  width: string,
  height: string,
  align: string,
  formatter?: FieldTableFormatter,
  stylish?: Function,
}

/**
 * @interface {FieldTableRenderer}
 */
export interface FieldTableRenderer {
  h: CreateElement,
  value: any,
  record: any,
  column: Field,
  key: string
}

/**
 * @interface {FieldTableFormatter}
 */
export type FieldTableFormatter = (renderer: FieldTableRenderer) => any;

/**
 * @interface {FormField}
 */
export interface FormField {
  label: string,
  key: string,
  is: string,
  width: number,
  height: number,
  hidden: boolean,
  attrs: Record,
  listeners: Record
}

/**
 * @interface {FormFields}
 */
export interface FormFields {
  [key: string]: FormField
}

/**
 * @interface {Fields}
 */
export interface Fields {
  [key: string]: Field
}

/**
 * @interface {Record}
 */
export interface Record {
  [key: string]: any
}

/**
 * @interface {TableSchema}
 */
export interface TableSchema {
  columns: Array<TableField>,
  hooks: { [key: string]: Function }
}

/**
 * @interface {FormSchema}
 */
export interface FormSchema {
  fields: FormFields,
  record: Record,
  hooks: { [key: string]: Function }
}
