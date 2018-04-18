import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Plugin from './plugin';

Vue.config.productionTip = false

Vue.use(Plugin);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
