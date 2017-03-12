import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/home';
import Design from '@/pages/design';
import Web from '@/pages/web';
import Experience from '@/pages/experience';

Vue.use(Router);

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
