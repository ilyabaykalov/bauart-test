import Vue from 'vue';
import Router from 'vue-router';
import Menu from '@/views/Menu';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Menu
    },
    {
      path: '/apod',
      component: () => import('./components/APOD')
    },
    {
      path: '/earth',
      component: () => import('./components/Earth')
    },
    {
      path: '/mars',
      component: () => import('./components/MarsWeather')
    }
  ]
});
