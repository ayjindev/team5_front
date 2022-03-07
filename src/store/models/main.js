import api from '../apiUtil'

// 초기값 선언
const stateInit = {
  Car: {
    img: null,
    name: null,
    fuel: null,
    rank: null,
    star: null,
    price: null
  }
}

export default {
  state: {
    // state에 사용할 모델이나 값을 선언 한다.
    CarList: [],
    Car: { ...stateInit.Car }
  },
  getters: {
    // getters을 통해 state값을 호출 한다.
    CarList: state => state.CarList,
    Car: state => state.Car
  },
  mutations: {
    // mutations는 동기적이어야 함.(비동기 사용 불가)
    setCarList(state, data) {
      state.CarList = data
    },
    setCar(state, data) {
      state.Car = data
    }
  },
  actions: {
    // action은 비동기적 사용이 가능하다. (action에서 mutation을 호출하는 방법을 권장함)

    // 조회
    actCarList(context, payload) {
      const carList = [{ img: '1', name: '2', fuel: '3', rank: '4', star: '5', price: '6' }]

      // 상태(결과)값 초기화
      context.commit('setCarList', carList)

      console.log('actCarList', carList) // 적은 정보가 payload를 통해 넘어옴

      /* RestAPI 호출 */
      // api
      //   .get('/serverApi/main')
      //   .then(response => {
      //     const carList = response && response.data
      //     context.commit('setCarList', carList)
      //   })
      //   .catch(error => {
      //     // 에러인 경우 처리
      //     console.error('CarList.error', error)
      //     context.commit('setCarList', [])
      //   })
    }
  }
}
