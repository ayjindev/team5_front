<template>
  <div class="body">
    <div class="contents">
      <div class="img_box">
        <img :src="goResCheck.img" :alt="goResCheck.name" />
      </div>
      <div class="contents_box">
        <dl class="c_box_01">
          <dt class="rank_name">{{ goResCheck.name }}</dt>
          <dd class="fuel_name">{{ goResCheck.fuel }}</dd>
          <dd>유모차/카시트 신청 가능</dd>
        </dl>
        <div class="c_box_02">
          <span class="car_rank">{{ goResCheck.rank }}</span>
          <dd class="star">★{{ goResCheck.star }}</dd>
        </div>
        <div class="price c_box_03">
          {{ goResCheck.price.toLocaleString() }}
        </div>
        <div class="c_box_04">
          <p>{{ goResCheck.start }}</p>
          <p>{{ goResCheck.end }}</p>
        </div>
      </div>
    </div>
    <div class="loop_box">
      <div class="loop"></div>
      <p>예약이 완료되었습니다</p>
      <p>예약자 이름 : {{ goResCheck.eservation_name }}</p>
      <p>운전자 이름 : {{ goResCheck.driver_name }}</p>
      <p>운전자 생년월일 : {{ goResCheck.driver_date }}</p>
      <p>연락처 : {{ goResCheck.phon_number }}</p>
    </div>
    <div class="my_box">
      <button class="my-page" to="my-page" @click="goMy"><p>마이페이지에서 확인하기</p></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoResCheck',
  data() {
    return {
      goResCheck: this.$route.params
    }
  },
  methods: {
    goMy() {
      this.$router.push({
        name: 'goMy'
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
.loop_box {
  overflow: hidden;
  width: 100vw;
  margin-top: 20px;
  .loop {
    width: 130px;
    height: 110px;
    background: url(../../assets/images/logo.gif) center no-repeat;
    background-size: contain;
    animation-duration: 10s;
    animation-name: slidein;
    animation-iteration-count: infinite;
  }
  p:first-of-type {
    font-size: 2em;
    color: $main;
  }
  p {
    margin-top: 12px;
  }
}
@keyframes slidein {
  from {
    margin-left: 100%;
  }
  to {
    margin-left: -130px;
  }
}
.top {
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 10;
  border: 1px solid #eeeeee;
  background: #fff;
}
.rank,
.fuel {
  font-size: 0.7em;
  .sub {
    color: $main;
    display: block;
  }
  > div {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    input {
      margin: 0 5px;
      float: left;
      -webkit-appearance: none;
      position: relative;
      cursor: pointer;
      outline: none !important;
      border: 1px solid #eeeeee;
      border-radius: 2px;
      background: #fbfbfb;
    }
    input[type='checkbox']::before {
      content: '\2713';
      position: absolute;
      top: 50%;
      left: 50%;
      overflow: hidden;
      transform: scale(0) translate(-50%, -50%);
      line-height: 1;
    }
    input[type='checkbox']:checked {
      background-color: $sub;
      border-color: #ffffff4d;
      color: #fff;
    }
    input[type='checkbox']:checked::before {
      border-radius: 2px;
      transform: scale(1) translate(-50%, -50%);
    }
  }
  .date_time {
    font-size: 0.7em;
    display: flex;
    flex-direction: column;
    button {
      width: 70px;
    }
  }
  .sort {
    li {
      margin: 0 5px;
      a {
        color: #5e5e5e;
      }
      a:link {
        color: #5e5e5e;
      }
      a:visited {
        color: #5e5e5e;
      }
      a:active {
        color: #5e5e5e;
      }
    }
  }
}
.search_box {
  #search {
    background: #e4e4e4;
    border: 1px solid #5e5e5e;
    border-left: 0;
    width: 50px;
    height: 30px;
    line-height: 30px;
  }
  #reset {
    line-height: 30px;
  }
  .contents_list {
    width: 701px;
    margin: auto;
    padding-top: 224px;
    border: 1px solid #eeeeee;
    background-color: #ffffff;
    border-top: 0;
  }
}
.my_box {
  width: 100%;
  color: #fff;
  margin: auto;
  padding: 20px;
  background: $main;
  border: 1px solid $main;
  margin-top: 20px;
  font-size: 2em;
  button {
    width: 100%;
    height: 100%;
    border: 0;
    background: 0;
    color: #fff;
  }
}
.my_box:hover {
  background: $sub;
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
    padding-top: 260px;
    border: 1px solid #eeeeee;
    background-color: #ffffff;
    border-top: 0;
  }
  .contents {
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
      justify-content: space-between;
      .c_box_01 {
        order: 1;
        text-align: left;
        margin-left: 20px;
        .rank_name {
          font-weight: bold;
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
        width: 40%;
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
        width: 60%;
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
    background: #fff;
    border: 1px solid #e4e4e4;
    display: flex;
    width: 701px;
    height: 200px;
    margin: auto;
    .img_box {
      width: 250px;
      height: 200px;
      border: 1px solid red;
      margin-right: 20px;
      order: 0;
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
        width: 100%;
        text-align: right;
        align-self: flex-end;
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
        padding: 0 10px 20px;
      }
    }
  }
  .my_box {
    position: absolute;
    bottom: 0;
  }
}
</style>
