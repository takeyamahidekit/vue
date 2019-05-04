
import Vue from 'vue'
import Vuex from 'vuex'       //Vuex
import App from './App.vue'

// Vuexの使用を宣言する
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
