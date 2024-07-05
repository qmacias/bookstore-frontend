import { createRouter, createWebHistory } from 'vue-router';

import WelcomePage from '@/views/WelcomePage.vue'

const BASE_TITLE = "Biblioteca Online | ";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomePage,
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
