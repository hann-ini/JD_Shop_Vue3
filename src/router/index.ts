import { createRouter, createWebHistory } from 'vue-router'
import JdHome from '../views/JdHome.vue'

const routes = [
  {
    path: '/',
    name: 'JdHome',
    component: JdHome
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
