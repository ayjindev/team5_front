import api from '../apiUtil'

// 초기값 선언
const stateInit = {
  Res: {
    resStart: null,
    resEnd: null,
    resClientName: null,
    resDriverName: null,
    resPhoneNumber: null,
    resDriverBirth: null
  },
  resSuccess: null
}

export default {
  state: {
    Res: { ...stateInit.Res },
    ResInsertedResult: stateInit.resSuccess
  },
  getters: {
    Res: state => state.Res,
    ResInsertedResult: state => state.ResInsertedResult
  },
  mutations: {
    setRes(state, data) {
      state.Res = data
    },
    setResInsertedResult(state, data) {
      state.ResInsertedResult = data
    }
  },
  actions: {
    actResInsert(context, payload) {
      // console.log('actResInsert', payload)

      // 상태(결과)값 초기화
      context.commit('setResInsertedResult', null)

      // // 백엔드 호출 (결과값 수신)(watch에서 감지하게 해주기 위해 setTimeout 사용)
      setTimeout(() => {
        const insertedResult = 1
        context.commit('setResInsertedResult', insertedResult)
      }, 300) // state값의 변화를 감지하기 위하여 일부러 지연 시켰다.

      /* RestAPI 호출 */
      // api
      //   .post('/serverApi/reservation', payload)
      //   .then(response => {
      //     const insertedResult = response && response.data && response.data.success
      //     // console.log('insertedResult', insertedResult)
      //     context.commit('setResInsertedResult', insertedResult)
      //   })
      //   .catch(error => {
      //     // 에러인 경우 처리
      //     console.error('ResSucessResult.error', error)
      //     context.commit('setResInsertedResult', -1)
      //   })
    },

    // 회원가입 데이터 초기화
    actResInit(context, payload) {
      context.commit('setRes', { ...stateInit.Res }) // 현재 값만 들어감/setUser에 statInit.User 요소를 풀어서 넣어줌=전부 복붙(null값이 됨)
      // context.commit('setUser', stateInit.User) // 메모리 주소 복사(User가 변경되면 변경된 값이 들어감)
    }
  }
}
