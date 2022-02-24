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
//     TokenUser: state => state.TokenUser
//   },
//   mutations: {
//     setTokenUser(state, data) {
//       state.TokenUser = data
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
