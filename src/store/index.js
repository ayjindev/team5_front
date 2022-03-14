import Vue from 'vue'
import Vuex from 'vuex'
import User from './models/user'
import Auth from './models/auth'
import Main from './models/main'
import MyPage from './models/mypage'
import Reservation from './models/reservation'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    User,
    Main,
    MyPage,
    Reservation
  }
})
