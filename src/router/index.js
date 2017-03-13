// Vue System
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// Page Component Imports
import Home from '@/pages/home';
import Design from '@/pages/design';
import Web from '@/pages/web';
import Experience from '@/pages/experience';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, {
      path: '/design',
      name: 'Design',
      component: Design,
    }, {
      path: '/web',
      name: 'Web',
      component: Web,
    }, {
      path: '/experience',
      name: 'Experience',
      component: Experience,
    },
  ],
});
