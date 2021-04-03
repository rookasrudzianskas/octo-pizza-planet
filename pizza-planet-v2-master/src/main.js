import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { store } from './store/store.js'
import Accounting from 'accounting-js'
import { routes } from './routes';

Vue.config.productionTip = false
Vue.use(VueRouter)

export const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

Vue.filter('currency', val => {
  return Accounting.formatMoney(val)
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
