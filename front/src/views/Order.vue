<template>
  <div class="app-layout__page Order">
    <h2>{{ $lang('views.order.title') }}</h2>
    <!-- @see front/src/app/Components/Form/AppForm.ts -->
    <app-form
      v-bind="form"
      v-model="record"
    />
  </div>
</template>

<script lang="js">
import OrderSchema from 'src/domains/Order/OrderSchema'
import OrderService from 'src/domains/Order/OrderService'
import HooksMixin from 'src/domains/Common/HooksMixin'

/**
 * @component {Order}
 */
export default {
  /**
   */
  name: 'Order',
  /**
   * Mixin usage to handle with schema hooks
   */
  mixins: [HooksMixin],
  /**
   */
  props: {
    // the id of item to be fetched
    id: {
      type: [String, Number],
      default: undefined
    }
  },
  /**
   */
  data: () => ({
    // the form states
    form: {
      fields: {}
    },
    // the record to show
    record: {}
  }),
  /**
   */
  methods: {
    /**
     * Fetch a record from service
     * @params {string} id
     */
    fetchRecord (id) {
      OrderService
        .instance()
        .read(id)
        .then(this.assignRecord)
    },
    /**
     * Handle with the record fetched
     * @param {Object} result
     */
    assignRecord (result) {
      if (result && typeof result.order === 'object') {
        this.$options.payload = result.order
        Object.keys(this.record).forEach(this.setRecordProperty)
        this.triggerHook('fetch:record')
      }
    },
    /**
     * Set the record property with the payload
     * All the data is store in payload, payload is not in data because it is not reactive
     * @param {string} key
     */
    setRecordProperty (key) {
      const value = this.$util.get(this.$options.payload, key)
      this.$set(this.record, key, value)
      // this.record[key] = this.$util.get(this.$options.payload, key)
    },
    /**
     * Start record with the default values
     * @param {Object} record
     */
    setRecord (record) {
      this.record = record
    },
    /**
     * Perform the created life cycle hook
     */
    onCreated () {
      const { fields, record, hooks } = OrderSchema.instance().form()
      this.form.fields = fields
      this.setRecord(record)
      this.installHooks(hooks)
    },
    /**
     * Perform the mounted life cycle hook
     */
    onMounted () {
      // try to get id from props
      // used in tests
      let id = this.id
      if (this.$route) {
        // the route params have higher priority
        id = this.$route.params.id
      }
      if (!id) {
        return
      }
      // fetch the record
      this.fetchRecord(id)
    }
  },
  /**
   */
  created () {
    this.onCreated()
  },
  /**
   */
  mounted () {
    this.onMounted()
  }
}
</script>
