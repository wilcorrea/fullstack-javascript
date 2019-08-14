<template>
  <div id="app">
    <!-- where the magic happens -->
    <!-- @see front/src/router/index.ts:22 -->
    <router-view />
  </div>
</template>

<script lang="js">
import $store from 'src/store'
import Local from 'src/app/DataSource/Local'

/**
 */
export default {
  /**
   */
  name: 'App',
  /**
   */
  data: () => ({
    // state to map the version update confirmation
    confirmed: false
  }),
  /**
   */
  computed: {
    /**
     * Get the version from store
     * @see createStore
     * @returns {string}
     */
    version () {
      return $store.state.version
    }
  },
  /**
   */
  methods: {
    /**
     * This is a simple method to ask user to update the version
     * @param {string} message
     */
    notify (message) {
      if (this.confirmed) {
        return
      }
      this.confirmed = window.confirm(message)
      if (this.confirmed) {
        window.location.reload(true)
      }
    },
    /**
     * Receive the version fetched from server
     * @param {AxiosResponse} result
     */
    receiveVersion (result) {
      if (this.version && this.version !== result.data) {
        const message = `We have updates!` +
          ` The current version is ${this.version} and the new one is ${result.data}.` +
          ` Do you wanna reload the app now?`
        this.notify(message)
      }
      $store.commit('updateVersion', result.data)
    },
    /**
     * Fetch the current app version from server
     */
    fetchVersion () {
      Local
        .instance()
        .get('version')
        .then(this.receiveVersion)
    }
  },
  /**
   */
  created () {
    // wait 1 second to take a breath
    window.setTimeout(this.fetchVersion, 1000)
  }
}
</script>
