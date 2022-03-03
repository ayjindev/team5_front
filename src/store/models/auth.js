import api from '../apiUtil'
import jwtDecode from 'jwt-decode'

const stateInit = {
  TokenUser: {
    id: null,
    iat: null,
    exp: null
  }
}

export default {
  state: {
    // state에 사용할 모델이나 값을 선언 한다.
    TokenUser: { ...stateInit.TokenUser },
    Loading: null,
    Error: null
  },
  getters: {
    // getters을 통해 state값을 호출 한다.
    TokenUser: state => state.TokenUser,
    TokenLoading: state => state.Loading,
    Error: state => state.Error
  },
  mutations: {
    // 동기적
    setTokenUser(state, data) {
      state.TokenUser = data
    },
    setTokenLoading(state, data) {
      state.TokenLoading = data
      state.Error = null
    },
    setError(state, data) {
      state.Loading = false
      state.Error = data
      state.TokenUser = { ...stateInit.TokenUser }
    },
    clearError(state) {
      state.Error = null
    },
    setLogout(state) {
      state.Loading = false
      state.Error = null
      state.TokenUser = { ...stateInit.TokenUser }
    }
  },
  actions: {
    // 비동기 (mutations 호출)

    // 로그인 처리
    actauthLogin(context, payload) {
      console.log('actTokenUser', payload) // 정보가 payload를 통해 넘어옴

      // 상태(결과)값 초기화
      context.commit('clearError')
      context.commit('setLoading', true)

      /* RestAPI 호출 */
      api
        .post('/serverApi/login', payload)
        .then(response => {
          console.log('actTokenUserAPI', response)
          const token = response && response.data && response.data.accessToken
          const decodedToken = jwtDecode(token)
          console.log('token', decodedToken)

          // 정상인 경우 처리
          context.commit('setLoading', false)
          context.commit('setTokenUser', decodedToken)
        })
        // 에러인 경우 처리
        .catch(error => {
          context.commit('setLoading', false)
          context.commit('setError', error)
        })
    },

    async authLogout(context) {
      // 로그아웃 처리

      // 상태값 초기화
      context.commit('clearError')
      context.commit('setLoading', true)

      /* 테스트 데이터 세팅 */
      setTimeout(() => {
        context.commit('setLogout') // 로그아웃 처리
        window.localStorage.removeItem('accessToken') // 토큰 삭제
      }, 1000) // 처리 시간 1초
    },

    authTokenUser(context, payload) {
      // 토큰 사용자 설정
      const decodedToken = jwtDecode(payload)
      context.commit('setTokenUser', decodedToken)
    }
  }
}
