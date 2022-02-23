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
    path: '/Main',
    component: () => import('../views/main/Main.vue')
  },
  {
    path: '/Reservation',
    component: () => import('../views/reservation/Reservation.vue')
  },
  {
    path: '/Reservation_Check',
    component: () => import('../views/reservation/Reservation_check.vue')
  },
  {
    path: '/My_page',
    component: () => import('../views/my_page/My_page.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const makeTitle = title => (title ? `${title} | 제주 넘는 차` : '제주 넘는 차')

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = makeTitle(to.meta.title)
  })
})
export default router
