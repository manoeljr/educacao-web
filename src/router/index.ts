import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'SignIn',
    component: () => import('../views/Auth/SignIn.vue'),
  },
  {
    path: '/students',
    name: 'Student',
    component: () => import('../views/Students/index.vue'),
  },
  {
    path: '/students/create',
    name: 'Student',
    component: () => import('../views/Students/add_student.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
