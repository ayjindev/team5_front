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
      // console.log('actCarList')

      // const carList = [
      //   {
      //     img: 'https://img.hankyung.com/photo/202008/AA.23578516.1-1200x.jpg',
      //     name: '볼보',
      //     fuel: '휘발유',
      //     rank: 'SUV',
      //     star: 4.4,
      //     price: 123000
      //   },
      //   {
      //     img: 'https://img.hankyung.com/photo/202008/AA.23578516.1-1200x.jpg',
      //     name: 'volvo',
      //     fuel: '경유',
      //     rank: '중형',
      //     star: 3.5,
      //     price: 150000
      //   }
      // ]

      // context.commit('setCarList', carList)
      // console.log('setCarList', carList)

      // 상태(결과)값 초기화
      context.commit('setCarList', null)

      /* RestAPI 호출 */
      api
        .get('/serverApi/main', { payload })
        .then(response => {
          const carList = response.body
          console.log('actCarList', carList)
          context.commit('setCarList', carList)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('CarList.error', error)
          context.commit('setCarList', [])
        })
      console.log('setCarList', this.carList) // undefined
    }
  }
}
