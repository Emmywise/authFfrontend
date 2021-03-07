import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/register',
    name: 'auth.register',
    component: () => import('../views/auth/Register.vue'),
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: '/login',
    name: 'auth.login',
    component: () => import('../views/auth/Login.vue'),
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: '/logout',
    name: 'auth.logout',
    component: () => import('../views/auth/Logout.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes,
});

export default router;
