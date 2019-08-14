<template>
  <div class="app-layout__page About">
    <h1>{{ $lang('views.about.title') }}</h1>
    <div v-html="$lang('views.about.content')" />
    <pre>{{ payload }}</pre>
  </div>
</template>

<script lang="js">
import PingService from 'src/domains/Ping/PingService'

/**
 * @component {About}
 */
export default {
  /**
   */
  name: 'About',
  /**
   */
  data: () => ({
    payload: ''
  }),
  /**
   */
  async mounted () {
    this.payload = await PingService.instance().search()
  }
}
</script>
