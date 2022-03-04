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
