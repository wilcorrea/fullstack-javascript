<template>
  <div class="OrderConsumer">
    <app-content v-bind="header">
      <!-- custom slot to override content -->
      <div
        slot="content"
        class="OrderConsumer__details"
      >
        <!-- get the labels from i18n -->
        <span>{{ $lang('domains.order.customer.details') }}</span>
      </div>
    </app-content>
    <user-info
      class="OrderConsumer__user-info"
    >
      <template
        slot="left"
      >
        <!-- override the icon with the avatar -->
        <app-avatar :letter="letter" />
      </template>
      <div
        slot="content"
        class="OrderConsumer__details"
      >
        <!-- slot usage to access $lang and $util in templates and redefine the visualization -->
        <p><strong>{{ $lang('domains.order.customer.name') }}</strong></p>
        {{ $util.get(value, 'fullname') }}
      </div>
    </user-info>
    <!-- UserAddress is a inline component to handle with customer address detalis -->
    <user-address left="home">
      <div
        slot="content"
        class="OrderConsumer__details"
      >
        <p><strong>{{ $lang('domains.order.customer.address') }}</strong></p>
        <p>{{ address.street }}</p>
        <p>{{ address.district }}</p>
        <p>{{ address.city }} - {{ address.state }}</p>
        <p>CEP - {{ address.zipCode }}</p>
      </div>
    </user-address>
  </div>
</template>

<script lang="js">
import { userContent } from 'src/domains/Order/Components/UserContent'

/**
 * @component {OrderConsumer}
 */
export default {
  /**
   * Custom component to show customer info
   */
  name: 'OrderConsumer',
  /**
   * Example of how to compose components inline
   * @see userContent
   */
  components: {
    // passing some style
    userInfo: userContent({
      borderTop: `1px solid #B7BDCF`,
      margin: '1px 0 0 0'
    }),
    userAddress: userContent()
  },
  /**
   * create props values to handle with "v-model"
   * the value will be what is mapped in OrderSchema
   * @see OrderSchema
   */
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },
  /**
   */
  computed: {
    /**
     * Configure the header to first AppContent
     * we can see style inline (useful in some days) and regular props
     * @returns {Object}
     */
    header () {
      return {
        left: 'edit',
        right: 'person_outline',
        styling: () => ({
          borderRadius: '6px 6px 0 0',
          minHeight: '22px',
          height: '22px'
        })
      }
    },
    /**
     * Create the letter to AppAvatar
     * @returns {string}
     */
    letter () {
      return String(this.$util.get(this.value, 'fullname')).substring(0, 1)
    },
    /**
     * Cast to first address in list, always returns an object
     * @returns {Object}
     */
    address () {
      const address = this.$util.clone(this.$util.get(this.value, 'addresses.[0]', {}))
      if (address.streetNumber) {
        address.street = `${address.street}, ${address.streetNumber}`
      }
      return address
    }
  }
}
</script>

<style
  lang="stylus"
  scoped
>
@import "~src/assets/themes/default/@variables.styl"

.OrderConsumer
  .OrderConsumer__details
    span
      color: $secondary
      font-weight bold

    span, strong
      text-transform uppercase

    strong
      display block
      margin-bottom 7px

    p
      margin-bottom 5px

  .OrderConsumer__user-info
    & >>> .app-avatar
      height 26px
      width 26px
</style>
