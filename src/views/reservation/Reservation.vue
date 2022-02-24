<template>
  <div class="body">
    <div class="contents">
      <div class="img_box">
        <a target="_blank" href="https://auto.daum.net/newcar/model/mjv000euppt6">
          <img src="../../assets/images/car/car_volvo_xc60.png" alt="볼보 XC60 2세대" />
        </a>
      </div>
      <div class="contents_box">
        <dl class="c_box_01">
          <dt class="rank_name">볼보 XC60 2세대</dt>
          <dd class="fuel_name">20~21년식 휘발유</dd>
          <dd>유모차/카시트 신청 가능</dd>
        </dl>
        <div class="c_box_02">
          <span class="car_name">수입</span>
          <dd class="star">★4.4</dd>
        </div>
        <div class="price c_box_03">168,000</div>
        <div class="c_box_04">
          <p><span id="start">2022.02.22</span>부터</p>
          <p><span id="end">2022.03.03</span>까지</p>
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
export default {}
</script>

<style lang="scss" scoped>
.body {
  background: #ff8955;
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
    font-size: 1.2em;
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
    color: #cf5724;
    font-weight: bold;
  }
}
.pay {
  display: block;
  color: #fff;
  margin: auto;
  padding: 20px;
  background: #cf5724;
  border: 1px solid #cf5724;
  font-size: 2em;
}
.pay:hover {
  background: #ff8955;
}
.Reservation-check:hover {
  color: #fff;
}
.Reservation-check:link {
  color: #fff;
}
.Reservation-check:visited {
  color: #fff;
}

.Reservation-check:active {
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
      background: #eeeeee;

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
      height: 140px;
      width: 100%;
      padding-left: 20px;
      justify-content: space-between;

      .c_box_01 {
        order: 1;
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
        text-align: right;
        .car_name {
          padding: 10px 20px;
          display: block;
          color: #fff;
          font-size: 1.2em;
          background: #ff8955;
        }
        .star {
          font-size: 1em;
          margin: 10px 20px;
          color: #ff8955;
        }
      }
      .c_box_03 {
        position: relative;
        order: 3;
        width: 40%;
        text-align: left;
        align-self: flex-start;
        font-size: 2em;
        color: #cf5724;
        button {
          font-size: 0.6em;
          line-height: 2em;
          padding: 0 20px;
          border: 0;
          color: #fff;
          background: #cf5724;
        }
        button:hover {
          background: #ff8955;
        }
      }
      .c_box_04 {
        width: 60%;
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
      background: #eeeeee;

      a {
        img {
          width: 100%;
        }
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
          background: #ff8955;
        }
        .star {
          font-size: 1.4em;
          margin: 10px 20px;
          color: #ff8955;
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
        color: #cf5724;
        button {
          font-size: 0.6em;
          line-height: 2em;
          padding: 0 20px;
          border: 0;
          color: #fff;
          background: #cf5724;
        }
        button:hover {
          background: #ff8955;
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
