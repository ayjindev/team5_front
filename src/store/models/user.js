import api from '../apiUtil'

// 초기값 선언
const stateInit = {
  User: {
    userId: null,
    userPw: null,
    userPwCheck: null,
    userName: null,
    userEmail: null,
    userPhoneNumber: null,
    userBirth: null,
    userZip: null,
    userAddr1: null,
    userAddr2: null
  }
}

export default {
  state: {
    // state에 사용할 모델이나 값 선언
    UserList: [],
    User: { ...stateInit.User }
  },
  getters: {
    // state 값 호출
    UserList: state => state.UserList,
    User: state => state.User
  },
  mutations: {
    // mutations는 동기적이어야 함
    setUserList(state, data) {
      state.UserList = data
    },
    setUser(state, data) {
      state.User = data
    }
  },
  actions: {
    // 비동기적 사용 가능(mutation 호출 권장)
    //user 리스트
    actUserList(context, payload) {
      console.log('actUserList', payload)
    }
  }
}
