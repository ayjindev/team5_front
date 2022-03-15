import api from '../apiUtil'

// 초기값 선언
const stateInit = {
  MyUser: {
    user_birth: null,
    user_email: null,
    user_id: null,
    user_name: null,
    user_phonenumber: null,
    user_pw: null,
    user_zip: null,
    user_address1: null,
    user_address2: null
  }
}

export default {
  state: {
    // state에 사용할 모델이나 값을 선언 한다.
    MyUser: { ...stateInit.MyUser },
    MyRes: []
  },
  getters: {
    // getters을 통해 state값을 호출 한다.
    MyUser: state => state.MyUser,
    MyRes: state => state.MyRes
  },
  mutations: {
    // mutations는 동기적이어야 함.(비동기 사용 불가)
    setMyUser(state, data) {
      state.MyUser = data
    },
    setMyRes(state, data) {
      state.MyRes = data
    }
  },
  actions: {
    // action은 비동기적 사용이 가능하다. (action에서 mutation을 호출하는 방법을 권장함)

    // 유저 정보 조회
    actMyUserInfo(context, payload) {
      /* 값 넘어가는지 테스트 데이터 */
      const MyUser = {
        user_birth: '2022-01-01',
        user_email: 'email@email.com',
        user_id: 'id2222',
        user_name: '밤밤',
        user_phonenumber: '010-0000-0000',
        user_pw: null,
        user_zip: '01234',
        user_address1: '어쩌구시 어쩌구동 어쩌구아파트',
        user_address2: '상세주소'
      }

      context.commit('setMyUser', MyUser)
      // console.log('setMyUser', this.setMyUser)

      // // 상태값 초기화
      // context.commit('setMyUser', null)

      // /* RestApi 호출 */
      // api
      //   .post('/serverApi/my-page')
      //   .then(response => {
      //     const myUserInfo =
      //       response &&
      //       response.data &&
      //       response.data.map(
      //         ({
      //           user_birth,
      //           user_email,
      //           user_id,
      //           user_name,
      //           user_phonenumber,
      //           user_pw,
      //           user_zip,
      //           user_address1,
      //           user_address2
      //         }) => ({
      //           user_birth,
      //           user_email,
      //           user_id,
      //           user_name,
      //           user_phonenumber,
      //           user_pw,
      //           user_zip,
      //           user_address1,
      //           user_address2
      //         })
      //       )
      //     context.commit('setMyUser', myUserInfo)
      //     console.log('유저', myUserInfo)
      //   })
      //   .catch(error => {
      //     console.error('myUser.error', error)
      //     context.commit('setMyUser', -1)
      //   })
    },

    // 예약 정보 조회
    actMyResInfo(context, payload) {
      // 상태(결과)값 초기화
      // context.commit('setMyRes', null)

      /* RestAPI 호출 */
      api
        .get('/serverApi/my-page')
        .then(response => {
          const myResInfo =
            response &&
            response.data &&
            response.data.map(
              ({
                user_id,
                car_name,
                car_rank,
                car_fuel,
                car_price,
                client_name,
                driver_name,
                driver_birth,
                driver_phonenumber,
                start_date,
                end_date
              }) => ({
                user_id,
                car_name,
                car_rank,
                car_fuel,
                car_price,
                client_name,
                driver_name,
                driver_birth,
                driver_phonenumber,
                start_date,
                end_date
              })
            )
          context.commit('setMyRes', myResInfo)
          // console.log('actMyResInfo', myResInfo)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('MyRes.error', error)
          context.commit('setMyRes', [])
        })
    }
  }
}
