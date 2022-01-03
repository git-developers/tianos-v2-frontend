import Vue from 'vue'
import App from './App.vue'
import 'vue-material-design-icons/styles.css';
import 'core-js/modules/es.number.constructor.js';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import PencilIcon from 'vue-material-design-icons/Pencil.vue';

Vue.config.productionTip = false
Vue.component('menu-icon', MenuIcon);
Vue.component('pencil-icon', PencilIcon);

new Vue({
  render: h => h(App),
}).$mount('#app')
