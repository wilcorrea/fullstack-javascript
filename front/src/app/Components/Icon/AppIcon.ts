import { CreateElement, RenderContext } from 'vue'

/**
 * @type {string}
 */
const block = 'app-icon'

/**
 * @component {AppIcon}
 */
export default {
  /**
   */
  functional: true,
  /**
   */
  name: 'AppIcon',
  /**
   * @param {CreateElement} h
   * @param {RenderContext} context
   */
  render (h: CreateElement, context: RenderContext) {
    const { props, listeners } = context
    const style = {}
    if (props.color) {
      // @ts-ignore
      style['color'] = props.color
    }
    if (listeners.click) {
      // @ts-ignore
      style['cursor'] = 'pointer'
    }
    const data = { class: `${block} material-icons`, style, on: { ...listeners } }
    let name = props.name
    if (!name) {
      name = 'warning'
      console.warn('[app-icon]', ' ', 'using a fallback icon, please provide a name')
    }

    return h('span', data, name)
  }
}
