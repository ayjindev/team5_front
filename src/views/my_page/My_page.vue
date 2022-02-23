<template>
  <div>
    <div>
      <p>마이 페이지</p>
    </div>
    <div class="me">
      <img src="../../assets/images/me.png" alt="나" />
      <dl>
        <dt id="userName">김희선</dt>
        <dd id="userId">아이디</dd>
        <dd id="userBirth">19961.10.23</dd>
        <dd id="userEmail">이메일@naver.com</dd>
        <dd id="userPhoneNumber">010-6676-3350</dd>
        <dt>주소</dt>
        <dd id="userAddr1">12345</dd>
        <dd id="userAddr2">서울시 주소구 주소로 주소길 102</dd>
      </dl>
    </div>
    <div class="reservation">
      <dl>
        <dt>나의 예약 현황</dt>
        <dd id="rank_name">볼보 XC60 2세대</dd>
        <dd id="fuel_name">20~21년식 휘발유</dd>
        <dd id="car_name">수입</dd>
        <dd class="price">168,000</dd>
        <dd>
          <p><span id="start">2022.02.22</span>부터</p>
          <p><span id="end">2022.03.03</span>까지</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
