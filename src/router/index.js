import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../modules/home/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/categories',
      name: 'categorias',
      // route level code-splitting
      component: () => import('../modules/categories/views/CategoriesView.vue'),
    },
     {
      path: '/persons',
      name: 'personas',
      // route level code-splitting
      component: () => import('../modules/persons/views/PersonsView.vue'),
    },
     {
      path: '/bills',
      name: 'Gastos',
      // route level code-splitting
      component: () => import('../modules/bills/views/BillsView.vue'),
    },
     {
      path: '/logout',
      name: 'Salir',
      // route level code-splitting
      //component: null,
    },
  ],
})

export default router
