<template>
  <div>
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
      <ul>
        <li>d</li>
        <li>d</li>
        <li>d</li>
      </ul>
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
    <div>
      <router-link to="/Reservation_check"
        ><p><span class="price">168,000</span>원 결제하기</p></router-link
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
