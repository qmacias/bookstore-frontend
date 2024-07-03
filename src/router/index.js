import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue'

const BASE_TITLE = "Biblioteca Online | ";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: `${BASE_TITLE}Inicio`,
      },
    },
    {
      path: '/authors',
      name: 'authors',
      component: () => import('../views/AuthorsPage.vue'),
      meta: {
        title: `${BASE_TITLE}Autores`,
      },
    },
  ],
});

export default router;
