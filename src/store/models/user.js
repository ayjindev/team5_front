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
  },
  SignSucess: null
}

export default {
  state: {
    // state에 사용할 모델이나 값을 선언 한다.
    User: { ...stateInit.User },
    InsertedResult: stateInit.SignSucess
  },
  getters: {
    // getters을 통해 state값을 호출 한다.
    User: state => state.User,
    UserInsertedResult: state => state.InsertedResult,
    SignSucessResult: state => state.SignSucessResult
  },
  mutations: {
    // mutations는 동기적이어야 함.(비동기 사용 불가)
    setUser(state, data) {
      state.User = data
    },
    setInsertedResult(state, data) {
      state.InsertedResult = data
    },
    setSignSucessResult(state, data) {
      state.SignSucessResult = data
    }
  },
  actions: {
    // action은 비동기적 사용이 가능하다. (action에서 mutation을 호출하는 방법을 권장함)

    // 등록
    actUserInsert(context, payload) {
      // console.log('actUserInsert', payload) // 적은 정보가 payload를 통해 넘어옴

      // 상태(결과)값 초기화
      context.commit('setInsertedResult', null)

      // // 백엔드 호출 (결과값 수신)(watch에서 감지하게 해주기 위해 setTimeout 사용)
      // setTimeout(() => {
      //   const insertedResult = 1
      //   context.commit('setInsertedResult', insertedResult)
      // }, 300) // state값의 변화를 감지하기 위하여 일부러 지연 시켰다.

      /* RestAPI 호출 */
      api
        .post('/serverApi/register', payload)
        .then(response => {
          const insertedResult = response && response.data && response.data.success
          context.commit('setInsertedResult', insertedResult)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('SignSucessResult.error', error)
          context.commit('setInsertedResult', -1)
        })
    },

    // 회원가입 데이터 초기화
    actUserInit(context, payload) {
      context.commit('setUser', { ...stateInit.User }) // 현재 값만 들어감/setUser에 statInit.User 요소를 풀어서 넣어줌=전부 복붙(null값이 됨)
      // context.commit('setUser', stateInit.User) // 메모리 주소 복사(User가 변경되면 변경된 값이 들어감)
    }
  }
}
