import api from '../apiUtil'

const stateInit = {
  UserLogin: {
    userId: null,
    password: null
  }
}

export default {
  state: {
    // state에 사용할 모델이나 값을 선언 한다.
    UserLogin: { ...stateInit.UserLogin }
  },
  getters: {
    // getters을 통해 state값을 호출 한다.
    UserLogin: state => state.UserLogin
  },
  mutations: {
    // 동기적
    setUserLogin(state, data) {
      state.UserLogin = data
    }
  },
  actions: {
    // 비동기 (mutations 호출)

    // login
    actUserLogin(context, payload) {
      console.log('actUserLogin', payload) // 정보가 payload를 통해 넘어옴

      // 상태(결과)값 초기화
      context.commit('setUserLogin', null)

      /* RestAPI 호출 */
      api
        .post('/serverApi/login', payload)
        .then(response => {
          const UserLogin = response

          context.commit('setUserLogin', UserLogin)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('setUserLogin.error', error)
          context.commit('setUserLogin', -1)
        })
    }
  }
}
