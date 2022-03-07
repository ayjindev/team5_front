import Vue from 'vue'
import Vuex from 'vuex'
import User from './models/user'
import Auth from './models/auth'
import Main from './models/main'
import MyPage from './models/mypage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    User,
    Main,
    MyPage
  }
})
