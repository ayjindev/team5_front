// import api from '../apiUtil'

// // 초기값 선언
// const stateInit = {
//   MyUser: {
//     myName: null,
//     myId: null,
//     myBirth: null,
//     myEmail: null,
//     myPhonenumber: null,
//     myZip: null,
//     myAddress1: null,
//     myAddress2: null
//   }
// }

// export default {
//   state: {
//     // state에 사용할 모델이나 값을 선언 한다.
//     MyUser: { ...stateInit.MyUser },
//     Token: null
//   },
//   getters: {
//     // getters을 통해 state값을 호출 한다.
//     MyUser: state => state.MyUser,
//     Token: state => state.Token
//   },
//   mutations: {
//     // mutations는 동기적이어야 함.(비동기 사용 불가)
//     setMyUser(state, data) {
//       state.MyUser = data
//     },
//     setToken(state, data) {
//       state.Token = data
//     }
//   },
//   actions: {
//     // action은 비동기적 사용이 가능하다. (action에서 mutation을 호출하는 방법을 권장함)

//     // 아이디 전달
//     actMyUserId(context, payload) {
//       console.log('Id 전달 act')

//       /* RestApi 호출 */
//       api
//         .post('/serverApi/my-page', payload)
//         .then(response => {
//           const token = window.localStorage.getItem('accessToken')
//           context.commit('setToken', token)
//         })
//         .catch(error => {
//           context.commit('setToken', -1)
//         })
//     },

//     // 조회
//     actMyUserInfo(context, payload) {
//       console.log('actMyUserInfo')

//       // 상태(결과)값 초기화
//       context.commit('setMyUser', null)

//       /* RestAPI 호출 */
//       api
//         .get('/serverApi/my-page')
//         .then(response => {
//           const myUserInfo = response && response.data
//           context.commit('setMyUser', myUserInfo)
//         })
//         .catch(error => {
//           // 에러인 경우 처리
//           console.error('MyUser.error', error)
//           context.commit('setMyUser', -1)
//         })
//     }
//   }
// }
