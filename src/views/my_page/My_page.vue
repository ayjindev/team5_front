<template>
  <div class="body">
    <div>
      <p>마이 페이지</p>
    </div>
    <div class="me">
      <img src="../../assets/images/me.png" alt="나" />
      <dl>
        <dt>김나나</dt>
        <dd>아이디</dd>
        <dd>1996.10.23</dd>
        <dd>이메일@naver.com</dd>
        <dd>010-0000-0000</dd>
        <dd><span>(12345)</span> 서울시 주소구 주소로 주소길 102</dd>
      </dl>
    </div>
    <div class="reservation">
      <dl>
        <dt>나의 예약 현황</dt>
        <dd>볼보 XC60 2세대</dd>
        <dd>20~21년식 휘발유</dd>
        <dd>수입</dd>
        <dd>168,000</dd>
        <dd>
          <p><span class="start">2022.02.22</span>부터</p>
          <p><span class="end">2022.03.03</span>까지</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
body {
  width: 100vw;
}
.me {
  padding-top: 60px;
  margin-bottom: 40px;

  img {
    width: 100px;
    height: auto;
    border: 1px solid #eee;
    border-radius: 50%;
  }
  dl {
    dt {
      font-size: 1.2em;
      line-height: 1.6em;
      margin-top: 10px;
    }
    dd {
      font-size: 0.8em;
      line-height: 1.6em;
    }
  }
}
.reservation {
  dl {
    width: 300px;
    margin: auto;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    text-align: center;
    border: 1px solid #eee;
    padding: 20px;
    border-radius: 20px;
    dt {
      width: 100%;
      font-weight: bold;
      color: #cf5724;
      font-size: 1.4em;
      line-height: 1.6em;
    }
    dd {
      width: 50%;
      font-size: 0.8em;
      line-height: 1.6em;
    }
    dd:last-child {
      width: 100%;
      display: flex;
      flex-flow: row;
      p {
        width: 50%;
      }
      span {
        font-size: 1.2em;
        line-height: 2em;
        margin: 0 10px;
        color: #cf5724;
        font-weight: bold;
      }
    }
  }
}
</style>
