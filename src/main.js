// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueTour from 'vue-tour'
import router from './router'
import dbmat from './js/dbmate'

Vue.config.productionTip = false

require('vue-tour/dist/vue-tour.css')

Vue.use(VueTour)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
