import { CreateElement, VNode } from 'vue'
import { FormField, FormFields, Record } from 'src/app/Agnostic/interfaces'

/**
 * @component {AppForm}
 */
export default {
  /**
   */
  name: 'AppForm',
  /**
   */
  props: {
    fields: {
      type: Object,
      required: true
    },
    value: {
      type: Object,
      required: true
    }
  },
  /**
   */
  methods: {
    /**
     * @param {string} key
     * @returns {any}
     */
    getValue (key: string): any {
      // @ts-ignore
      return this.value[key]
    },
    /**
     * @param {CreateElement} h
     * @returns {Array<VNode>}
     */
    renderFields (h: CreateElement): Array<VNode> {
      // @ts-ignore
      const fields: FormFields = this.fields
      return Object.keys(fields).map((key) => {
        const field = fields[key]

        const classNames = [
          'app-field',
          `app-field--width-${field.width}`,
          `app-field--height-${field.height}`
        ]
        const data = { class: classNames }
        return h('div', data, [this.renderField(h, field)])
      })
    },
    /**
     * @param {CreateElement} h
     * @param {FormField} field
     * @returns {VNode}
     */
    renderField (h: CreateElement, field: FormField): VNode {
      const key = field.key
      const value = this.getValue(key)
      const data = {
        domProps: { value },
        props: { value },
        attrs: { ...field.attrs },
        on: this.renderFieldOn(key, field.listeners)
      }
      return h(field.is, data)
    },
    /**
     * @param {string} key
     * @param {Record} listeners
     * @returns {Record}
     */
    renderFieldOn (key: string, listeners: Record) {
      let customInput: Function
      if (listeners.input) {
        customInput = listeners.input
      }
      const input = ($event: any) => {
        // @ts-ignore
        if (customInput) {
          customInput($event)
        }
        const value = $event.target ? $event.target.value : $event
        // @ts-ignore
        this.$emit('input', { ...this.value, [key]: value })
      }
      return { ...listeners, input }
    }
  },
  /**
   * @param {CreateElement} h
   * @returns {VNode}
   */
  render (h: CreateElement): VNode {
    const form = { class: 'app-form' }
    const wrapper = { class: 'app-form__wrapper' }
    // @ts-ignore
    return h('div', form, [h('div', wrapper, [this.renderFields(h)])])
  }
}
