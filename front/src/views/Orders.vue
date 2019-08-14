<template>
  <div class="app-layout__page Orders">
    <h1>{{ $lang('views.orders.title') }}</h1>
    <!-- the table is all in AppTable -->
    <!-- @see front/src/app/Components/Table/AppTable.ts -->
    <app-table v-bind="table" />
    <!-- pagination handle with offset and limit -->
    <!-- emits @paginationUpdateOffset when offset a new fetch is requested -->
    <!-- also emits @paginationToTop when the button is clicked -->
    <!-- @see front/src/app/Components/Pagination/AppPagination.ts -->
    <app-pagination
      v-bind="{ offset, limit }"
      @updateOffset="paginationUpdateOffset"
      @toTop="paginationToTop"
    />
  </div>
</template>

<script lang="js">
import OrderSchema from 'src/domains/Order/OrderSchema'
import OrderService from 'src/domains/Order/OrderService'
import { scrollDown, scrollUp } from 'src/app/Util/ui'

/**
 * @component {Orders}
 */
export default {
  /**
   */
  name: 'Orders',
  /**
   */
  data: () => ({
    // table states
    table: {
      columns: [],
      records: [],
      loading: true
    },
    // pagination controls
    offset: 0,
    limit: 5
  }),
  /**
   */
  methods: {
    /**
     * Method that use service to get the data
     * It starts the loading state
     */
    fetchRecords () {
      this.loadingShow()
      OrderService
        .instance()
        .search(this.offset, this.limit)
        .then(this.assignRecords)
        .catch(this.loadingHide)
    },
    /**
     * Assign records will update the table records
     * also will scroll down and finish loading state
     * @param {Object} result
     */
    assignRecords (result) {
      this.table.records.push(...result.orders)
      this.$nextTick(() => window.setTimeout(this.assignRecordsFinish, 200))
    },
    /**
     * Finally scroll down and hide the loading
     * It runs in a lazy way to don't overload the browser
     */
    assignRecordsFinish () {
      // don't scroll the first fetch
      if (this.offset !== 0) {
        scrollDown(this.$root.mainLayout)
      }
      this.loadingHide()
    },
    /**
     * Fired when the button is clicked will call a new fetch
     * @param {Object} options
     */
    paginationUpdateOffset (options) {
      const { offset } = options
      this.offset = offset
      this.fetchRecords()
    },
    /**
     * Scroll the page up
     */
    paginationToTop () {
      scrollUp(this.$root.mainLayout)
    },
    /**
     * Just show loading
     */
    loadingShow () {
      this.table.loading = true
    },
    /**
     * Just hide loading
     */
    loadingHide () {
      this.table.loading = false
    }
  },
  /**
   */
  created () {
    // hidrate the columns with schema definition
    this.table.columns = OrderSchema.instance().columns()
  },
  /**
   */
  mounted () {
    // perform the first fetch
    this.fetchRecords()
  }
}
</script>

<style lang="stylus">

</style>
