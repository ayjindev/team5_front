import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/sign',
    component: () => import('../views/auth/signup.vue')
  },
  {
    path: '/main',
    component: () => import('../views/main/Main.vue')
  },
  {
    path: '/reservation',
    component: () => import('../views/reservation/Reservation.vue')
  },
  {
    path: '/reservation-Check',
    component: () => import('../views/reservation/Reservation_check.vue')
  },
  {
    path: '/my-page',
    component: () => import('../views/my_page/My_page.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
