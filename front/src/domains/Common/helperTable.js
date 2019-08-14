import { get } from 'src/app/Util/general'
import $lang from 'src/lang'
import { breakLine } from 'src/app/Util/string'

/**
 * @param color
 * @returns {Object}
 */
export const style = (color) => ({
  'border-left': `2px solid ${color}`,
  'text-transform': 'uppercase',
  'padding': '0px 0px 0px 5px',
  'font-size': '0.7em',
  'color': 'rgb(60, 73, 93)',
  'line-height': '120%'
})

/**
 * @param {Object} values
 * @param {string} value
 * @param {string} lang
 * @param {boolean} broken
 * @returns {function({h: *, record: *}): *[]}
 */
export const status = (values, value, lang, broken = true) => {
  /**
   * @param h
   * @param record
   * @returns {*}
   */
  return ({ h }) => {
    const answer = (color, content) => {
      const data = {
        domProps: {
          innerHTML: broken ? breakLine(String(content)) : content
        },
        style: style(color)
      }
      return [h('div', data)]
    }
    return answer(get(values, value, {}), $lang(`${lang}.${value}`, value))
  }
}
