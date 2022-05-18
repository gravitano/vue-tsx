import { CounterPage } from '@/views/counter';
import { Home } from '@/views/home';
import { createRouter, createWebHistory } from 'vue-router';

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
  ],
});

export default router;
