import { CreateElement, VNode } from 'vue'

/**
 */
export default {
  /**
   */
  name: 'AppContent',
  /**
   */
  props: {
    value: {
      type: [Number, String, Object],
      default: undefined
    },
    label: {
      type: String,
      default: ''
    },
    left: {
      type: String,
      default: ''
    },
    right: {
      type: String,
      default: ''
    },
    styling: {
      type: Function,
      default: () => undefined
    },
    formatting: {
      type: Function,
      default: (value: any) => value
    }
  },
  /**
   */
  computed: {
    style (): any {
      // @ts-ignore
      return this.styling(this.value)
    },
    content (): any {
      // @ts-ignore
      return this.formatting(this.value)
    }
  },
  /**
   */
  methods: {
    /**
     * @param {CreateElement} h
     * @returns {Array<VNode>}
     */
    renderContainer (h: CreateElement): Array<VNode> {
      const elements: Array<VNode> = []
      // @ts-ignore
      const left: string = this.left
      // @ts-ignore
      const right: string = this.right

      // @ts-ignore
      if (left || this.$scopedSlots.left) {
        elements.push(this.renderSide(h, 'left', left))
      }

      elements.push(this.renderContent(h))

      // @ts-ignore
      if (right || this.$scopedSlots.right) {
        elements.push(this.renderSide(h, 'right', right))
      }

      return elements
    },
    /**
     * @param {CreateElement} h
     * @param {string} side
     * @param {string} name
     * @returns {VNode}
     */
    renderSide (h: CreateElement, side: string, name: string): VNode {
      const data = { class: `app-content__${side}` }
      // @ts-ignore
      const slot = this.$scopedSlots[side]
      if (slot) {
        return h('div', data, [slot({ side, name })])
      }
      const children = [h('app-icon', { attrs: { name } })]
      return h('div', data, children)
    },
    /**
     * @param {CreateElement} h
     * @returns {VNode}
     */
    renderContent (h: CreateElement): VNode {
      // @ts-ignore
      const label: string = this.label
      // @ts-ignore
      const formatting: Function = this.formatting
      // @ts-ignore
      const value: string = this.value
      // @ts-ignore
      const content: string = this.content

      const render = (node: any) => {
        const data = { class: 'app-content__center' }
        const children = [
          h('label', label),
          node
        ]
        return h('div', data, children)
      }
      // @ts-ignore
      const slot = this.$scopedSlots.content
      if (slot) {
        return render(slot({ label, value, formatting, content }))
      }
      // @ts-ignore
      if (formatting) {
        return render(h('div', { domProps: { innerHTML: content } }))
      }
      return render(h('div', value))
    }
  },
  /**
   * @param {CreateElement} h
   * @returns {VNode}
   */
  render (h: CreateElement): VNode {
    // @ts-ignore
    const style = this.style
    const data = { class: 'app-content', style }
    // @ts-ignore
    const children = this.renderContainer(h)

    return h('div', data, children)
  }
}
