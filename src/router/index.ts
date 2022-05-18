import { CounterPage } from '@/views/counter';
import { Home } from '@/views/home';
import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/login';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterPage,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/profile/index.vue'),
    },
  ],
});

export default router;
