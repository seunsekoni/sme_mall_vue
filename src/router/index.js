import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../components/HomePage/LandingPage'
import AuthDashboard from '../components/Profile/AuthDashboard'
import NewRequest from '../components/Client/NewRequest'
import ListRequests from '../components/Client/ListRequests'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LandingPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/author-profile',
    name: 'author-profile',
    component: AuthDashboard
  },
  {
    path: '/new-request',
    name: 'new-request',
    component: NewRequest
  },
  {
    path: '/all-requests',
    name: 'all-requests',
    component: ListRequests
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
