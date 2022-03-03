<template>
  <div class="body" v-bind="res">
    <div class="contents">
      <div class="img_box">
        <!-- {{ cars }} -->
        <img :src="goRes.img" :alt="goRes.name" />
      </div>
      <div class="contents_box">
        <dl class="c_box_01">
          <dt :v-model="res.name" class="rank_name">{{ goRes.name }}</dt>
          <dd :v-model="res.fuel" class="fuel_name">{{ goRes.fuel }}</dd>
          <dd>유모차/카시트 신청 가능</dd>
        </dl>
        <div class="c_box_02">
          <span :v-model="res.rank" class="car_rank">{{ goRes.rank }}</span>
          <dd :v-model="res.star" class="star">★{{ goRes.star }}</dd>
        </div>
        <div class="price c_box_03" :v-model="res.price">
          {{ goRes.price.toLocaleString() }}
        </div>
        <div class="c_box_04">
          <datetime v-model="res.start" class="datetime" format="YYYY-MM-DD H:i"></datetime>
          <datetime v-model="res.end" class="datetime" format="YYYY-MM-DD H:i"></datetime>
        </div>
      </div>
    </div>
    <div class="reservation">
      <div class="reservation_box">
        <label>예약자 이름<input v-model="res.eservation_name" type="text" name="eservation_name" /></label>
        <label>운전자 이름<input v-model="res.driver_name" type="text" name="driver_name" /></label>
        <label>연락처<input v-model="res.phon_number" type="text" name="phon_ number" /></label>
        <label>운전자 생년월일<input v-model="res.driver_date" type="text" name="driver_date" /></label>
      </div>
      <div class="payment">
        <h3>무통장 입금</h3>
        <p><span>우리</span>**** *** **** **</p>
        <p><span>국민</span>**** *** **** **</p>
        <p><span>농협</span>**** *** **** **</p>
      </div>
      <div class="pay">
        <button @click="goResCheck(res)">
          <span class="price">{{ goRes.price.toLocaleString() }}</span
          >원 입금 완료
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import datetime from 'vuejs-datetimepicker'
export default {
  name: 'GoRes',
  components: { datetime },
  data() {
    return {
      goRes: this.$route.params,
      res: {
        start: '',
        end: '',
        eservation_name: '',
        driver_name: '',
        phon_number: '',
        driver_date: '',
        img: '',
        name: '',
        fuel: '',
        rank: '',
        star: ''
      }
    }
  },
  methods: {
    goResCheck(props) {
      console.log(props)
      this.$router.push({
        name: 'goResCheck',
        params: props
      })
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
    width: 100%;
    margin: auto;
    input {
      width: 90%;
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
      width: 100%;
      // height: 200px;
      // border: 1px solid red;
      order: 0;
      overflow: hidden;
      background: #fff;
      a {
        img {
          height: 150px;
        }
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
        }
      }
      .c_box_03 {
        position: relative;
        order: 3;
        width: 100%;
        text-align: center;
        align-self: flex-start;
        font-size: 2em;
        color: $main;
        button {
          font-size: 0.6em;
          line-height: 2em;
          padding: 0 20px;
          border: 0;
          color: #fff;
          background: $main;
        }
      }
      .c_box_04 {
        width: 100%;
        order: 4;
        text-align: right;
        display: flex;
        flex-flow: column;
        line-height: 1.4em;
        font-size: 1em;
        padding-right: 50px;
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
      // width: 50%;
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
        color: $main;
        button {
          font-size: 0.6em;
          line-height: 2em;
          padding: 0 20px;
          border: 0;
          color: #fff;
          background: $main;
        }
        button:hover {
          background: $sub;
        }
      }
      .c_box_04 {
        width: 60%;
        order: 4;
        text-align: right;
        display: flex;
        flex-flow: column;
        align-self: flex-end;
      }
    }
  }
}
</style>
