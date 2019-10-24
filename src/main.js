import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import { LayoutPlugin } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'
import { ButtonPlugin } from 'bootstrap-vue'

// CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(LayoutPlugin)
Vue.use(ModalPlugin)
Vue.use(ButtonPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
