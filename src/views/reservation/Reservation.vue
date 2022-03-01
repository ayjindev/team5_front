<template>
  <div class="body">
    <div v-for="car in dataRows" :key="car" class="contents">
      <div class="img_box">
        <img :src="car.img" :alt="car.name" />
      </div>
      <div class="contents_box">
        <dl class="c_box_01">
          <dt class="rank_name" :v-model="car.name">{{ car.name }}</dt>
          <dd class="fuel_name" :v-model="car.fuel">{{ car.fuel }}</dd>
          <dd>유모차/카시트 신청 가능</dd>
        </dl>
        <div class="c_box_02">
          <span class="car_rank" :v-model="car.rank">{{ car.rank }}</span>
          <dd class="star" :v-model="car.star">★{{ car.star }}</dd>
        </div>
        <div class="price c_box_03" :v-model="car.price">
          {{ car.price.toLocaleString() }}
          <router-link to="/reservation"><button>바로 예약 하기</button></router-link>
          <datetime v-model="dob" class="datetime" format="YYYY-MM-DD H:i"></datetime>
          <datetime v-model="dob" class="datetime" format="YYYY-MM-DD H:i"></datetime>
        </div>
      </div>
    </div>
    <div class="reservation">
      <div class="reservation_box">
        <label for="">예약자 이름<input id="" type="text" name="eservation_name" /></label>
        <label for="">운전자 이름<input id="" type="text" name="driver_name" /></label>
        <label for="">연락처<input id="" type="text" name="phon_ number" /></label>
        <label for="">운전자 생년월일<input id="" type="text" name="driver_date" /></label>
      </div>
      <div class="payment">
        <h3>무통장 입금</h3>
        <p><span>우리</span>**** *** **** **</p>
        <p><span>국민</span>**** *** **** **</p>
        <p><span>농협</span>**** *** **** **</p>
      </div>
      <div class="pay">
        <router-link class="Reservation-check" to="/Reservation-check"
          ><p><span class="price">168,000</span>원 결제하기</p></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import datetime from 'vuejs-datetimepicker'

export default {
  components: { datetime },
  data() {
    return {}
  },
  methods: {
    alertVal() {
      alert(this.dob)
    }
  }
}
</script>

<style lang="scss" scoped>
.body {
  background: #eee;
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
        .car_name {
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
        button:hover {
          background: $sub;
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
        padding-right: 20px;
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

      > a:hover img {
        transform: scale(1.5);
        transition: transform 1s;
        filter: brightness(70%);
        background-color: #5e5e5e;
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
        .car_name {
          padding: 10px 20px;
          display: block;
          color: #fff;
          font-size: 1.6em;
          background: $sub;
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
        line-height: 2em;
        font-size: 1em;
        padding-right: 20px;
      }
    }
  }
}
</style>
