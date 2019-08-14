import { CreateElement, RenderContext } from 'vue'

/** @type {string} */
const block = 'app-avatar'

/** @type {string} */
export const backgroundFallback = 'rgb(255, 194, 123)'

/** @type {string} */
export const colorFallback = 'rgb(83, 90, 87)'

/**
 * @component {AppAvatar}
 */
export default {
  /**
   */
  functional: true,
  /**
   */
  name: 'AppAvatar',
  /**
   * @param {CreateElement} h
   * @param {RenderContext} context
   */
  render (h: CreateElement, context: RenderContext) {
    const { props, listeners } = context

    const data = {
      class: `${block} ${block}__figure`,
      style: {
        'cursor': '',
        'background': '',
        'color': ''
      },
      on: { ...listeners }
    }
    if (listeners.click) {
      data.style.cursor = 'pointer'
    }
    if (props.src) {
      return h('div', data, [h('img', { domProps: { src: props.src } })])
    }

    data.style.background = props.background ? props.background : backgroundFallback
    data.style.color = props.color ? props.color : colorFallback
    data['class'] = `${block} ${block}__fallback`
    return h('div', data, props.letter || '?')
  }
}
