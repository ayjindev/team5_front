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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/main',
    component: Main
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
