import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false;

Vue.use(VueAxios, axios)

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
