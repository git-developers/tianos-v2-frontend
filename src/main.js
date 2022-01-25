
import Vue from 'vue'
import App from './App.vue'
import 'vue-material-design-icons/styles.css';
import 'core-js/modules/es.number.constructor.js';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import PencilIcon from 'vue-material-design-icons/Pencil.vue';
import Button from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import {MoreOutlined} from '@ant-design/icons';


Vue.config.productionTip = false
Vue.component('menu-icon', MenuIcon);
Vue.component('pencil-icon', PencilIcon);
Vue.use(Button);
Vue.use(MoreOutlined);

new Vue({
  render: h => h(App),
}).$mount('#app')
