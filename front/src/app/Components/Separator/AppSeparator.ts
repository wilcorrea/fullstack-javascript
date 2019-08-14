import { CreateElement, VNode } from 'vue'

export default {
  name: 'AppSeparator',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  render (h: CreateElement): VNode {
    // @ts-ignore
    const innerHTML = this.label
    return h('div', { class: 'app-separator', domProps: { innerHTML } })
  }
}
