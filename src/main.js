import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store';
import Bus from './store/bus';

//引入第三方库
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.use(Bus);

//引入接口文件
import httpServe from './server/https';
Vue.prototype.$https = httpServe;

// 是否显示生产消息
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
