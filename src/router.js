import { createRouter, createWebHistory } from 'vue-router'
import Landing from './views/Landing.vue'
import Frontend from './views/Frontend.vue'
import Design from './views/Design.vue'
import DesignProject from './views/DesignProject.vue'
import About from './views/About.vue'

const routes = [
  { path: '/', name: 'landing', component: Landing },
  { path: '/frontend', name: 'frontend', component: Frontend },
  { path: '/design', name: 'design', component: Design },
  { path: '/design/:slug', name: 'design-project', component: DesignProject },
  { path: '/about', name: 'about', component: About },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
