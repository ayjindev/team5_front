import api from '../apiUtil'

// 초기값 선언
const stateInit = {
  Car: {
    carImg: null,
    carName: null,
    carFuel: null,
    carRank: null,
    carStar: null,
    carPrice: null
  }
}

export default {
  state: {
    // state에 사용할 모델이나 값을 선언 한다.
    Car: { ...stateInit.Car }
  },
  getters: {
    // getters을 통해 state값을 호출 한다.
    Car: state => state.Car
  },
  mutations: {
    // mutations는 동기적이어야 함.(비동기 사용 불가)
    setCar(state, data) {
      state.Car = data
    }
  },
  actions: {
    // action은 비동기적 사용이 가능하다. (action에서 mutation을 호출하는 방법을 권장함)

    // 조회
    actCarList(context, payload) {
      console.log('actCarList', payload) // 적은 정보가 payload를 통해 넘어옴

      // // 상태(결과)값 초기화
      // context.commit('setCar', null)

      /* RestAPI 호출 */
      api
        .get('/serverApi/main', { params: payload })
        .then(response => {
          const carList = response && response.data && response.data.rows
          console.log('carList', carList)
          context.commit('setCar', carList)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('actCarList.error', error)
          context.commit('setCar', [])
        })
    }
  }
}
