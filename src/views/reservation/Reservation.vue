<template>
  <div class="body" v-bind="res">
    <div class="contents">
      <div class="img_box">
        <!-- {{ this.$route.params }} -->
        <img :src="goRes.car_img" :alt="goRes.car_name" />
      </div>
      <div class="contents_box">
        <dl class="c_box_01">
          <dt class="rank_name">{{ goRes.car_name }}</dt>
          <dd class="fuel_name">{{ goRes.car_fuel }}</dd>
          <dd>유모차/카시트 신청 가능</dd>
        </dl>
        <div class="c_box_02">
          <span class="car_rank">{{ goRes.car_rank }}</span>
          <dd class="star">★{{ goRes.car_star }}</dd>
        </div>
        <div class="price c_box_03" :v-model="res.price">
          {{ goRes.car_price.toLocaleString() }}
        </div>
        <div class="c_box_04">
          <datepicker
            v-model="res.resStart"
            class="datetime"
            :format="dateFormat"
            :disabled-dates="disabledStartDates"
          ></datepicker
          ><span>픽업일</span>
          <datepicker
            v-model="res.resEnd"
            class="datetime"
            :format="dateFormat"
            :disabled-dates="disabledEndDates"
          ></datepicker
          ><span>반납일</span>
        </div>
      </div>
    </div>
    <div class="reservation">
      <div class="reservation_box">
        <b-form-group>
          <label for="clientName">예약자 이름</label>
          <b-form-input
            ref="resClientName"
            v-model="res.resClientName"
            name="clientName"
            aria-describedby=" 예약자 이름"
            :state="clientNameState"
            required
            trim
            size="sm"
          ></b-form-input>

          <!-- 조건 미충족 시 -->
          <b-form-invalid-feedback v-if="res.resClientName" id="input-live-feedback">
            이름은 한글 2자리 이상 입력해야 합니다
          </b-form-invalid-feedback>

          <!-- 조건 충족 시 -->
          <b-form-text v-if="res.clientName" id="input-live-help"></b-form-text>
        </b-form-group>

        <b-form-group>
          <label for="driverName">운전자 이름</label>
          <b-form-input
            ref="resDriverName"
            v-model="res.resDriverName"
            name="driverName"
            aria-describedby="운전자 이름"
            :state="driverNameState"
            required
            trim
            size="sm"
          ></b-form-input>

          <!-- 조건 미충족 시 -->
          <b-form-invalid-feedback v-if="res.resDriverName" id="input-live-feedback">
            이름은 한글 2자리 이상 입력해야 합니다
          </b-form-invalid-feedback>

          <!-- 조건 충족 시 -->
          <b-form-text v-if="res.driverName" id="input-live-help"></b-form-text>
        </b-form-group>

        <b-form-group>
          <label for="driverBirth">운전자 생년월일</label>
          <b-form-input
            ref="resDriverBirth"
            v-model="res.resDriverBirth"
            name="driverBirth"
            type="date"
            size="sm"
            required
            trim
          ></b-form-input>
          <label for="phoneNumber">핸드폰 번호</label>
          <b-form-input
            ref="resPhoneNumber"
            v-model="res.resPhoneNumber"
            name="phoneNumber"
            required
            trim
            placeholder="000-0000-0000"
            type="text"
            size="sm"
            aria-describedby="핸드폰 번호"
            @keyup="getPhoneMask(res.resPhoneNumber)"
          ></b-form-input>
        </b-form-group>
      </div>
      <b-button @click="dateCheck()">날짜체크</b-button>
      <div class="payment">
        <h3>무통장 입금</h3>
        <p><span>우리</span>**** *** **** **</p>
        <p><span>국민</span>**** *** **** **</p>
        <p><span>농협</span>**** *** **** **</p>
      </div>
      <div class="pay">
        <button @click="goResCheck(res)">
          <span class="price">{{ goRes.car_price.toLocaleString() }}</span
          >원 입금 완료
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import datepicker from 'vuejs-datepicker'
export default {
  name: 'GoRes',
  components: { datepicker },
  data() {
    return {
      dateFormat: 'yyyy-MM-dd',
      // 달력 날짜 선택 막기
      disabledStartDates: {
        to: new Date() // 내일부터 예약 가능
        // ranges: [
        //   {
        //     // 날짜 기간 막기
        //     from: new Date(2016, 11, 25),
        //     to: new Date(2016, 11, 30)
        //   }
        // ]
      },
      disabledEndDates: {
        to: new Date() // 내일부터 예약 가능
        // ranges: [
        //   {
        //     // 날짜 기간 막기
        //     from: new Date(2016, 11, 25),
        //     to: new Date(2016, 11, 30)
        //   }
        // ]
      },
      goRes: this.$route.params, // 에약 페이지 데이터 넘겨줌
      res: {
        resStart: '',
        resEnd: '',
        resClientName: '',
        resDriverName: '',
        resPhoneNumber: '',
        resDriverBirth: '',
        car_name: this.$route.params.car_name,
        car_img: this.$route.params.car_img,
        car_fuel: this.$route.params.car_fuel,
        car_rank: this.$route.params.car_rank,
        car_star: this.$route.params.car_star,
        car_price: this.$route.params.car_price
      }
    }
  },
  computed: {
    // store 호출
    resResult() {
      return this.$store.getters.ResInsertedResult
    },
    // 이름 유효성 검사
    clientNameState() {
      return this.res.resClientName.length > 1 && /^[가-힣]*$/.test(this.res.resClientName) // 한글 2자리 이상
    },
    driverNameState() {
      return this.res.resDriverName.length > 1 && /^[가-힣]*$/.test(this.res.resDriverName) // 한글 2자리 이상
    }
  },
  watch: {
    resResult(value) {
      console.log('watch.resResult', value)

      // 예약에 성공한 경우
      if (value == true) {
        alert('예약 되었습니다')
        this.$router.push({
          name: 'goResCheck',
          params: { ...this.res }
        })
      } else if (value == false) {
        alert('예약 실패하였습니다')
      }
    }
  },
  methods: {
    // dateCheck() {
    //   // 시작 날짜 찍어보기 (형식 yyyy-mm-dd)
    //   console.log(
    //     `${this.res.resStart.toLocaleDateString().replace(/\./g, 't').split('t')[0]}, ${
    //       this.res.resStart.toLocaleDateString().replace(/\./g, 't').split('t')[1]
    //     }, ${this.res.resStart.toLocaleDateString().replace(/\./g, 't').split('t')[2]}`,
    //     `${this.res.resEnd.toLocaleDateString().replace(/\./g, 't').split('t')[0]}, ${
    //       this.res.resEnd.toLocaleDateString().replace(/\./g, 't').split('t')[1]
    //     }, ${this.res.resEnd.toLocaleDateString().replace(/\./g, 't').split('t')[2]}`
    //   )
    // },

    dateCheck() {
      // 시작 날짜 찍어보기 (형식 yyyy-mm-dd)
      console.log('날짜', this.res.resStart, this.res.resEnd)
    },

    // 공란 및 유효성 여부 체크
    checkInput() {
      const inputForm = this.res
      // console.log(inputForm)
      if (inputForm.resStart == '') {
        alert('대여 날짜를 입력해 주세요')
        return false
      }

      if (inputForm.resEnd == '') {
        alert('반납 날짜를 입력해 주세요')
        return false
      }

      if (inputForm.resClientName == '') {
        alert('예약자 성함을 입력해 주세요')
        this.$refs.resClientName.focus()
        return false
      } else if (this.clientNameState === false) {
        this.$refs.clientName.focus()
        return false
      }

      if (inputForm.resDriverName == '') {
        alert('운전자 성함을 입력해 주세요')
        this.$refs.resDriverName.focus()
        return false
      } else if (this.driverNameState === false) {
        this.$refs.driverName.focus()
        return false
      }

      if (inputForm.resPhoneNumber == '') {
        alert('전화번호를 입력해 주세요')
        this.$refs.resPhoneNumber.focus()
        return false
      } else if (this.formatNumber === false) {
        alert('전화번호를 확인해 주세요')
        this.$refs.resPhoneNumber.focus()
        return false
      }

      if (inputForm.resDriverBirth == '') {
        alert('생년월일을 입력해 주세요')
        this.$refs.resDriverBirth.focus()
        return false
      } else {
        return true
      }
    },

    // 전화번호 글자수 제한
    formatNumber(e) {
      return String(e).substring(0, 13) // 최대 11자리 010-1234-5678
    },

    // 전화번호 숫자만 입력 시 파이프(-) 자동 입력
    getPhoneMask(val) {
      let res = this.getMask(val)
      this.res.resPhoneNumber = res

      // // 서버 전송 값에는 '-'를 제외하고 숫자만 저장
      // this.$store.getters.User.userPhoneNumber = this.user.userPhoneNumber.replace(/[^0-9]/g, '')
    },

    getMask(inputNumber) {
      if (!inputNumber) return inputNumber
      inputNumber = inputNumber.replace(/[^0-9]/g, '')

      let res = ''
      if (inputNumber.length < 8) {
        res = inputNumber
      } else if (inputNumber.length == 8) {
        res = inputNumber.substr(0, 4) + '-' + inputNumber.substr(4)
      } else if (inputNumber.length == 9) {
        res = inputNumber.substr(0, 3) + '-' + inputNumber.substr(3, 3) + '-' + inputNumber.substr(6)
      } else if (inputNumber.length == 10) {
        res = inputNumber.substr(0, 3) + '-' + inputNumber.substr(3, 3) + '-' + inputNumber.substr(6)
      } else if (inputNumber.length > 10) {
        res = inputNumber.substr(0, 3) + '-' + inputNumber.substr(3, 4) + '-' + inputNumber.substr(7)
      }
      //   }
      // }
      return res
    },

    goResCheck(props) {
      console.log(props)
      if (this.checkInput() === false) {
        // 유효성/공란 체크
        return false
      } else {
        // 초기화
        this.$store.dispatch('actResInit')

        // 등록
        this.$store.dispatch('actResInsert', props)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.body {
  background: #eee;
  height: 100%;
  min-height: 100vh;
}
input {
  border: 1px solid #e4e4e4;
  height: 30px;
  border-radius: 20px;
}
.datetime {
  width: 90%;
  margin-left: 10%;
}
.reservation_box {
  margin-top: 20px;
  display: flex;
  flex-flow: column;
  margin: auto;
  flex-wrap: wrap;
  label {
    display: flex;
    flex-flow: column;
    margin: auto;
    width: 60%;
    font-size: 1em;
    line-height: 1.8em;
    margin-top: 20px;
  }
  input {
    text-align: center;
  }
}
.payment {
  padding-bottom: 20px;
  h3 {
    line-height: 2em;
    margin: 20px 0 0;
    font-size: 1.4em;
  }
  span {
    font-size: 1.2em;
    line-height: 2em;
    margin-right: 10px;
    color: $main;
    font-weight: bold;
  }
}
.pay {
  display: block;
  color: #fff;
  margin: auto;
  padding: 20px;
  background: $main;
  border: 1px solid $main;
  font-size: 2em;
  button {
    width: 100%;
    height: 100%;
    border: 0;
    background: 0;
    color: #fff;
  }
}
.pay:hover {
  background: $sub;
}
.Reservation-check:hover,
.Reservation-check:link,
.Reservation-check:active,
.Reservation-check:visited {
  color: #fff;
}
@media all and(max-width:767px) {
  .reservation {
    background: #fff;

    margin: auto;
    input {
      width: 70%;
      margin: auto;
    }
    .pay {
      width: 100%;
    }
  }
  .contents_list {
    width: 100%;
    margin: auto;
    border: 1px solid #eeeeee;
    background-color: #ffffff;
    border-top: 0;
  }
  .contents {
    padding-top: 50px;
    background: #fff;
    border: 1px solid #e4e4e4;
    display: flex;
    margin: auto;
    flex-wrap: wrap;
    flex-flow: column;
    .img_box {
      height: 150px;
      // border: 1px solid red;
      order: 0;
      overflow: hidden;
      background: #fff;

      img {
        height: 150px;
        width: auto;
      }
    }
    .contents_box {
      display: flex;
      flex-wrap: wrap;
      // border: 1px solid red;
      height: 220px;
      width: 100%;
      padding-left: 20px;
      justify-content: space-between;
      .c_box_01 {
        order: 1;
        width: 60%;
        text-align: left;
        .rank_name {
          font-weight: bold;
          line-height: 1.8em;
          font-size: 1.4em;
        }
        dd {
          line-height: 1.4em;
          font-size: 1em;
        }
      }
      .c_box_02 {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        order: 2;
        width: 40%;
        min-width: 70px;
        text-align: center;
        .car_rank {
          padding: 10px 20px;
          display: block;
          color: #fff;
          font-size: 1.2em;
          background: $sub;
        }
        .star {
          font-size: 1em;
          margin: 10px 20px;
          color: $sub;
          position: relative;
          top: -20px;
        }
      }
      .c_box_03 {
        // position: relative;
        // order: 3;
        // width: 40%;
        // text-align: center;
        // align-self: flex-start;
        // font-size: 2em;
        // margin-top: 25px;
        // color: $main;
        display: none;
      }
      .c_box_04 {
        width: 100%;
        order: 4;
        text-align: center;
        display: flex;
        flex-flow: column;
        line-height: 1em;
        font-size: 1em;
        padding-right: 50px;
        span {
          overflow: hidden;
          width: 60px;
          position: relative;
          right: -230px;
          top: -24px;
        }
      }
    }
  }
}
@media all and(min-width:768px) {
  .reservation {
    background: #fff;
    width: 700px;
    margin: auto;
    input {
      width: 50%;
      margin: auto;
    }
    .pay {
      width: 700px;
    }
  }
  .contents {
    padding-top: 59px;
    padding-bottom: 200px;
    background: #fff;
    border: 1px solid #e4e4e4;
    display: flex;
    width: 700px;
    height: 200px;
    margin: auto;
    .img_box {
      width: 250px;
      height: 200px;
      margin-right: 20px;
      order: 0;
      overflow: hidden;
      background: #fff;
      img {
        width: 100%;
      }
    }
    .contents_box {
      display: flex;
      flex-wrap: wrap;
      // border: 1px solid red;
      height: 200px;
      width: 450px;
      justify-content: space-between;
      .c_box_01 {
        order: 1;
        text-align: left;
        .rank_name {
          font-weight: bold;
          font-size: 2em;
          line-height: 2em;
        }
        dd {
          line-height: 1.6em;
          font-size: 1.2em;
        }
      }
      .c_box_02 {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        order: 2;
        text-align: right;
        .car_rank {
          padding: 10px 20px;
          display: block;
          color: #fff;
          font-size: 1.6em;
          background: $sub;
          border: 1px solid red;
        }
        .star {
          font-size: 1.4em;
          margin: 10px 20px;
          color: $sub;
        }
      }
      .c_box_03 {
        position: relative;
        top: -1px;
        order: 3;
        width: 40%;
        text-align: left;
        align-self: flex-start;
        font-size: 3em;
        margin-top: 20px;
        color: $main;
      }
      .c_box_04 {
        width: 60%;
        order: 4;
        text-align: center;
        display: flex;
        flex-flow: column;
        align-self: flex-end;
        span {
          overflow: hidden;
          width: 60px;
          position: relative;
          right: -170px;
          top: -20px;
        }
      }
    }
  }
}
</style>
