import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/main',
    component: Main
  },
  {
    path: '/reservation',
    component: () => import('../views/reservation/Reservation.vue'),
    name: 'goRes',
    props: true
  },
  {
    path: '/reservation-Check',
    component: () => import('../views/reservation/Reservation_check.vue'),
    name: 'goResCheck',
    props: true
  },
  {
    path: '/my-page',
    component: () => import('../views/my_page/My_page.vue')
  },
  {
    path: '/auth',
    component: () => import('../views/auth'),
    children: [
      {
        path: '/auth/login',
        component: () => import('../views/auth/login')
      },
      {
        path: '/auth/sign',
        component: () => import('../views/auth/signup')
      }
    ]
  },
  // NotFound 페이지 (항상 맨 밑에)
  {
    path: '*',
    component: () => import('../components/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
