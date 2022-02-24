<template>
  <div class="body">
    <div class="contents_list">
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
    </div>
    <div class="loop_box">
      <div class="loop"></div>
      <p>예약이 완료되었습니다</p>
    </div>
    <div class="my_box">
      <router-link class="my-page" to="my-page"
        ><p>마이페이지에서<br />확인하기</p></router-link
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.body {
  background: #eee;
  height: 100vh;
}
.loop_box {
  overflow-x: hidden;
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
  p {
    font-size: 2em;
    font-weight: bold;
    color: #cf5724;
    line-height: 4em;
  }
}
.my_box {
  display: block;
  position: absolute;
  bottom: 0;
  color: #fff;
  margin: auto;

  padding: 20px;
  background: #cf5724;
  border: 1px solid #cf5724;
  font-size: 2em;
  .my-page {
    line-height: 1.4em;
  }
  .my-page,
  .my-page:hover,
  .my-page:link,
  .my-page:active,
  .my-page:visited {
    color: #fff;
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
@media all and(max-width:767px) {
  .my_box {
    width: 100%;
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
      height: 140px;
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
  .my_box {
    width: 700px;
    left: 50%;
    margin-left: -350px;
  }
  .my_box:hover {
    background: #ff8955;
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
