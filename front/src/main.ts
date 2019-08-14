import Vue from 'vue'

import router from 'src/router'
import store from 'src/store/vuex'
import Boot from 'src/boot'
// import 'src/registerServiceWorker'

import 'material-icons/iconfont/material-icons.css'
import 'src/assets/loading.css'
import 'src/assets/themes/default/@index.styl'

import App from 'src/App.vue'
import 'src/app/Components'

Vue.config.productionTip = false

Vue.use(Boot)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
