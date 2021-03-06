import Vue from 'vue';
import NProgress from 'nprogress';
import axios from 'axios';
import Toast from 'vue-toastification';
import VueTailwind from 'vue-tailwind';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronDown, faCheck, faSpinner, faSearch, faDotCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/index.css';
import 'nprogress/nprogress.css';
import 'vue-toastification/dist/index.css';

Vue.config.productionTip = false;
Vue.use(VueTailwind);
Vue.use(Toast, {});
axios.defaults.baseURL = 'http://localhost:8000/api/';
Object.defineProperty(Vue.prototype, '$http', { value: axios, enumerable: false });
Object.defineProperty(Vue.prototype, '$nprogress', { value: NProgress, enumerable: false });
library.add(faChevronDown, faCheck, faSpinner, faSearch, faDotCircle);
Vue.component('icon', FontAwesomeIcon);

Vue.prototype.htmlDecode = (input) => {
  const doc = new DOMParser().parseFromString(input, 'text/html');
  return doc.documentElement.textContent;
};

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'auth.login',
      });
    } else {
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'home',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

Vue.mixin({
  methods: {
    ucfirst(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    ucwords(str) {
      const words = str.toLowerCase().replace(/\b[a-z]/g, (letter) => letter.toUpperCase());

      return words;
    },
    formatNumber(money) {
      return new Intl.NumberFormat('en-US', {}).format(money);
    },
    formatDate(date) {
      return new Date(date).toDateString();
    },
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
