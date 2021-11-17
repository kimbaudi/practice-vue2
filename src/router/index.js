import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const pages = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ 'pages/Home.vue'),
  },
];

const routes = [
  ...pages,
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "404" */ 'pages/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
