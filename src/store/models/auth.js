import api from '../apiUtil'
import jwtDecode from 'jwt-decode'

const stateInit = {
  TokenUser: {
    id: null,
    iat: null,
    exp: null
  },
  IsLoginSuccess: null
}

export default {
  state: {
    // state에 사용할 모델이나 값을 선언 한다.
    TokenUser: { ...stateInit.TokenUser },
    Error: null,
    IsLoginSuccess: { ...stateInit.IsLoginSuccess }
  },
  getters: {
    // getters을 통해 state값을 호출 한다.
    TokenUser: state => state.TokenUser,
    Error: state => state.Error,
    IsLoginSuccess: state => state.IsLoginSuccess
  },
  mutations: {
    // 동기적
    setTokenUser(state, data) {
      state.TokenUser = data
    },
    setError(state, data) {
      state.Error = data
      state.TokenUser = { ...stateInit.TokenUser }
    },
    clearError(state) {
      state.Error = null
    },
    setLogout(state) {
      state.Error = null
      state.TokenUser = { ...stateInit.TokenUser }
    },
    setIsLoginSuccess(state, data) {
      state.IsLoginSuccess = data
    }
  },
  actions: {
    // 비동기 (mutations 호출)

    // 로그인 처리
    actauthLogin(context, payload) {
      console.log('actTokenUser', payload) // 정보가 payload를 통해 넘어옴

      // 상태(결과)값 초기화
      context.commit('clearError')

      /* RestAPI 호출 */
      api
        .post('/serverApi/login', payload)
        .then(response => {
          console.log('actTokenUserAPI', response)
          const token = response && response.data && response.data.accessToken
          const decodedToken = jwtDecode(token)
          console.log('token', decodedToken)

          context.commit('setTokenUser', decodedToken)
        })
        .catch(error => {
          // 에러인 경우 처리
          context.commit('setError', error)
        })
    },
    authTokenUser(context, payload) {
      // 토큰 사용자 설정
      const decodedToken = jwtDecode(payload)
      context.commit('setTokenUser', decodedToken)
    },

    // 로그인 성공 여부 체크
    actIsLoginSuccess(context, payload) {
      console.log('actIsLoginSuccess', payload) // 정보가 payload를 통해 넘어옴

      // 상태(결과)값 초기화
      context.commit('setIsLoginSuccess', null)

      /* RestAPI 호출 */
      api
        .post('/serverApi/login', payload)
        .then(response => {
          console.log('actIsLoginSuccess', response)
          const isLoginResult = response && response.data && response.data.success

          context.commit('setIsLoginSuccess', isLoginResult)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('loginSucessResult.error', error)
          context.commit('setIsLoginSuccess', -1)
        })
    }
  }
}
