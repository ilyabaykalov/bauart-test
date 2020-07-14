import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./views/Menu')
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
    },
    {
      path: '/chat/:chatRoomId',
      name: 'chat',
      component: () => import('./components/Chat')
    }
  ]
});
