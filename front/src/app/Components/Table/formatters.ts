import { CreateElement, VNode } from 'vue'
import { TableField } from 'src/app/Agnostic/interfaces'
import { browse } from 'src/app/Util/general'
import { block } from './index'

/**
 * @param {CreateElement} h
 * @param {TableField} column
 * @param value
 * @param {string} path
 * @returns {VNode[]}
 */
export const link = (h: CreateElement, column: TableField, value: any, path: string) => {
  const key = column.key
  // @ts-ignore
  const domProps = { href: path }
  const on = {
    click: ($event: Event) => {
      $event.stopPropagation()
      $event.preventDefault()
      browse(path)
    }
  }
  return [h('a', { class: `${block}__a`, domProps, on }, value)]
}

/**
 * @param {Object} args
 * @returns {Array<VNode>}
 */
// @ts-ignore
export const html = ({ h, column, record, value, key, render }): Array<VNode> => {
  return [h('span', { domProps: { innerHTML: render({ h, column, record, value, key, render }) } })]
}
