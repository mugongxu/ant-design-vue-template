// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import antDesignVue from './plugins/antDesignVue';
import utils from './plugins/utils';
import api from './plugins/api';

Vue.config.productionTip = false;

Vue.use(antDesignVue);
Vue.use(utils);
Vue.use(api);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
