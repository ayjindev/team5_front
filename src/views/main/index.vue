<template>
  <div>
    <div class="search">
      <div class="rank">
        <h2 class="sub">차량등급</h2>
        <input v-model="rank_allSelect" type="checkbox" name="rank_all" value="" />전체
        <div v-for="(data, index) in ['경형', '소형', '준중형', '중형', '대형', '수입', '승합RV', 'SUV']" :key="index">
          <input v-model="rank_select" type="checkbox" :name="data" :label="data" />
          {{ data }}
        </div>
      </div>
      <div class="fuel">
        <h2 class="sub">연료</h2>
        <input v-model="fuel_allSelect" type="checkbox" name="fuel_all" value="" />전체
        <div v-for="(data, index) in ['휘발유', '경유', 'LPG', '전기', '하이브리드']" :key="index">
          <input v-model="fuel_select" type="checkbox" :name="data" />
          {{ data }}
        </div>
      </div>
      <div class="date">
        <h2 class="sub">날짜</h2>
        <date-picker v-model="date_value" type="date" range placeholder="Select date range"></date-picker>
        <h3>대여시간</h3>
        <input type="time" />
        <h3>반납시간</h3>
        <input type="time" />
      </div>
    </div>
    <div class="Sort">
      <ul>
        <li><a href="">낮은 가격순</a></li>
        /
        <li><a href="">높은 가격순</a></li>
      </ul>
      <input v-model="search" class="stage-search" type="text" placeholder="검색" />
      <button>검색</button>
      <button>초기화</button>
    </div>
    <div>
      <img src="../../assets/images/car_volvo_xc60.jpeg" alt="볼보 XC60 2세대" />
      <dl>
        <dt class="rank_name">볼보 XC60 2세대</dt>
        <dd class="fuel_name">20~21년식 휘발유</dd>
        <dd>유모차/카시트 신청 가능</dd>
        <dd class="price">168,000 <button>바로 예약 하기</button></dd>
      </dl>
      <span class="car_name">수입</span>
      <span class="star">★4.4</span>
    </div>
  </div>
</template>
<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
export default {
  components: { DatePicker },
  data() {
    return {
      rank_allSelect: true,
      rank_select: true,
      fuel_allSelect: true,
      fuel_select: true
    }
  },
  watch: {
    rank_allSelect(value) {
      if (value === true) {
        this.rank_select = true
      } else {
        this.rank_select = false
      }
    },
    rank_select(value) {
      if (value === false) {
        this.rank_allSelect = false
      }
    },
    fuel_allSelect(value) {
      if (value === true) {
        this.fuel_select = true
      } else {
        this.fuel_select = false
      }
    },
    fuel_select(value) {
      if (value === false) {
        this.fuel_allSelect = false
      }
    }
  },
  methods: {
    car() {
      this.rank_allSelect = !this.rank_allSelect
      this.rank_select = !this.rank_select
    },
    fuel() {
      this.fuel_allSelect = !this.fuel_allSelect
      this.fuel_select = !this.fuel_select
    }
  }
}
</script>
<style lang="scss" scoped></style>
