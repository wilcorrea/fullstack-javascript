<template>
  <div class="app-layout__page Welcome">
    <!-- use i18n to get the title -->
    <h1>{{ $lang('views.welcome.title') }}</h1>
    <div v-html="$lang('views.welcome.content')" />
    <br>
    <!-- print the version that is generated at each deploy -->
    <pre>version {{ version }}</pre>
  </div>
</template>

<script lang="js">
import $store from 'src/store'

/**
 * @component {Welcome}
 */
export default {
  /**
   */
  name: 'Welcome',
  /**
   * Wrapper to version that is in a store
   */
  computed: {
    /**
     * @returns {string}
     */
    version () {
      return $store.state.version
    }
  }
}
</script>
