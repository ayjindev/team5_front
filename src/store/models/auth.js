import api from '../apiUtill'

export default {
  state: {
    // state에 사용할 모델이나 값을 선언 한다.
    LoginResult: null
  },
  getters: {
    // getters을 통해 state값을 호출 한다.
    UserLoginResult: state => state.LoginResult
  },
  mutations: {
    // 동기적
    setUserLoginResult(state, data) {
      state.LoginResult = data
    }
  },
  actions: {
    // 비동기 (mutations 호출)

    // login
    actUserLogin(context, payload) {
      console.log('actUserLogin', payload) // 정보가 payload를 통해 넘어옴

      // // 상태(결과)값 초기화
      // context.commit('setUserLoginResult', null)

      /* RestAPI 호출 */
      api
        .post('/serverApi/login', payload)
        .then(response => {
          const UserLoginResult = response
          context.commit('setUserLoginResult', UserLoginResult)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('UserLogin.error', error)
          context.commit('setUserLoginResult', -1)
        })
    }
  }
}

// 로그인 토큰 처리

// import api from '../apiUtil'
// import jwtDecode from 'jwt-decode'

// const stateInit = {
//   TokenUser: {
//     userId: null,
//     userPw: null,
//     userPwCheck: null,
//     userName: null,
//     userEmail: null,
//     userPhoneNumber: null,
//     userBirth: null,
//     userZip: null,
//     userAddr1: null,
//     userAddr2: null
//   }
// }

// export default {
//   state: {
//     TokenUser: { ...stateInit.TokenUser }, // token에서 추출한 사용자 정보
//     Loading: false,
//     Error: null
//   },
//   getters: {
//     TokenUser: state => state.TokenUser,
//     TokenLoading: state => state.Loading,
//     TokenError: state => state.Error
//   },
//   mutations: {
//     setTokenUser(state, data) {
//       state.TokenUser = data
//     },
//     setLoading(state, data) {
//       state.Loading = data
//       state.Error = null
//     },
//     setError(state, data) {
//       state.Error = data
//       state.Loading = false
//       state.TokenUser = { ...stateInit.TokenUser }
//     },
//     clearError(state) {
//       state.Error = null
//     }
//   },
//   actions: {
//     authLogin(context, payload) {
//       // 로그인 처리

//       // 상태값 초기화
//       context.commit('clearError')
//       context.commit('setLoading', true)
//     }
//   }
// }
