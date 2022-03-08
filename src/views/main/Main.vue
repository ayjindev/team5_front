<template>
  <div class="body">
    <div class="top">
      <div class="filter">
        <div class="rank">
          <h2 class="sub">차량등급</h2>
          <div><input v-model="allRanks" type="checkbox" @click="selectAllRanks()" /><label>전체</label></div>
          <div v-for="(rank, index) in ranks" :key="index">
            <input v-model="rank.value" type="checkbox" name="ranks" /><label>{{ rank.name }}</label>
          </div>
        </div>
        <div class="fuel">
          <h2 class="sub">연료</h2>
          <div><input v-model="allFuels" type="checkbox" @click="selectAllFuels()" /><label>전체</label></div>
          <div v-for="(fuel, index) in fuels" :key="index" class="no">
            <input v-model="fuel.value" type="checkbox" name="fuels" /><label>{{ fuel.name }}</label>
          </div>
        </div>
      </div>
      <div class="sort">
        <ul>
          <li><a @click="priceLow">낮은 가격순</a></li>
          /
          <li><a @click="priceHigh">높은 가격순</a></li>
        </ul>
        <ul>
          <li><a @click="starHigh">평점 높은순</a></li>
          /
          <li><a @click="starLow">평점 낮은순</a></li>
        </ul>
        <div class="search_box">
          <input v-model="search" class="stage-search" type="text" placeholder="검색어를 입력해 주세요" />
        </div>
      </div>
    </div>
    <!-- <div class="contents_list">
      <div v-for="car in dataRows" :key="car.index" class="contents">
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
            <button @click="goRes(car)">바로 예약 하기</button>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script src="https://cdn.jsdelivr.net/vue/2.0.3/vue.js"></script>
<script>
export default {
  data: function () {
    return {
      ranks: [
        {
          name: '경형',
          value: true
        },
        {
          name: '소형',
          value: true
        },
        {
          name: '중형',
          value: true
        },
        {
          name: '대형',
          value: true
        },
        {
          name: '수입',
          value: true
        },
        {
          name: '승합RV',
          value: true
        },
        {
          name: 'SUV',
          value: true
        }
      ],
      fuels: [
        {
          name: '휘발유',
          value: true
        },
        {
          name: '경유',
          value: true
        },
        {
          name: 'LPG',
          value: true
        },
        {
          name: '전기',
          value: true
        },
        {
          name: '하이브리드',
          value: true
        }
      ],
      allRanks: true,
      allFuels: true,
      search: '',
      cars: [
        {
          key: img,
          key: name,
          key: fuel,
          key: rank,
          key: star,
          key: price
        }
      ]
    }
  },
  computed: {
    carList() {
      // 자동차 리스트 불러오기
      return this.$store.getters.CarList
    },
    allRanksCheck() {
      const result = this.ranks.reduce((count, data) => (data['value'] === true ? count + 1 : count), 0)
      // console.log(result)
      if (result >= 7) {
        // console.log('전체 체크 true')
        return (this.allRanks = true)
      } else if (result < 7) {
        // console.log('전체 체크 해제')
        return (this.allRanks = false)
      }
    },
    allFuelsCheck() {
      const result = this.fuels.reduce((count, data) => (data['value'] === true ? count + 1 : count), 0)
      // console.log(result)
      if (result >= 5) {
        // console.log('연료 전체 체크 true')
        return (this.allFuels = true)
      } else if (result < 5) {
        // console.log('연료 전체 체크 false')
        return (this.allFuels = false)
      }
    },
    filterRanks() {
      const rankstrueList = this.ranks.filter(v => v.value === true)?.map(v => v.name)
      return this.cars.filter(v => rankstrueList.includes(v.rank))
    },
    filterFuels() {
      const fuelstrueList = this.fuels.filter(v => v.value === true)?.map(v => v.name)
      return this.cars.filter(v => fuelstrueList.includes(v.fuel))
    },
    dataRows() {
      const merged = this.filterRanks.concat(this.filterFuels)
      const unique = merged.filter((item, pos) => merged.indexOf(item) === pos)
      return unique.filter(cars => {
        return cars.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  created() {
    this.$store.dispatch('actCarList') // 자동차 리스트 불러오기
  },
  watch: {
    allRanksCheck() {},
    allFuelsCheck() {}
  },
  methods: {
    selectAllFuels() {
      if (this.allFuels === true) {
        return this.fuels.forEach(element => (element.value = false))
      } else {
        return this.fuels.forEach(element => (element.value = true))
      }
    },
    selectAllRanks() {
      // console.log('allRanks 실행')
      if (this.allRanks === true) {
        return this.ranks.forEach(element => (element.value = false))
      } else {
        return this.ranks.forEach(element => (element.value = true))
      }
    },
    dataRows() {
      return
    },
    goRes(props) {
      console.log(props)
      this.$router.push({
        name: 'goRes',
        params: props
      })
    },
    priceLow() {
      this.cars.sort(function (a, b) {
        return a.price - b.price
      })
    },
    priceHigh() {
      this.cars.sort(function (a, b) {
        return b.price - a.price
      })
    },
    starLow() {
      this.cars.sort(function (a, b) {
        return a.star - b.star
      })
    },
    starHigh() {
      this.cars.sort(function (a, b) {
        return b.star - a.star
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
    margin-bottom: 4px;
  }

  > div {
    width: 76px;
    float: left;
    margin: auto;
    line-height: 2em;

    display: flex;
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
@media all and(max-width:767px) {
  .top {
    width: 100%;
    padding: 20px;
    padding-top: 60px;
    height: 260px;
  }
  .filter {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    > div {
      width: 50%;
    }
  }
  .no:nth-of-type(2n) {
    border: 0;
  }
  .rank,
  .fuel {
    .sub {
      font-size: 1.6em;
      text-align: center;
      line-height: 1.8em;
    }
    > div {
      border-right: 1px solid #e4e4e4;
      input {
        width: 12px;
        height: 12px;
      }
    }
    .line_h {
      margin: 10px 0 5px;
      line-height: 10px;
      font-size: 1em;
    }
  }
  .date_time {
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
    .sub {
      color: $main;
      font-size: 1.2em;
      text-align: center;
    }
  }
  .sort {
    flex-direction: column;
    font-size: 0.8em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    ul {
      display: flex;
      width: 50%;
      justify-content: center;
      line-height: 3em;
    }
    .search_box {
      padding-top: 5px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      .stage-search {
        font-size: 0.8em;
        width: 50%;
      }
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
      }
    }
    .contents_box {
      display: flex;
      flex-wrap: wrap;
      // border: 1px solid red;
      height: 140px;
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
        text-align: right;
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
        text-align: right;
        align-self: flex-end;
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
    }
  }
}
@media all and(min-width:768px) {
  .no {
    border: 0;
  }
  .top {
    width: 701px;
    padding: 20px;
    padding-top: 80px;
  }
  .filter {
    display: flex;
    > div {
      width: 47%;
      margin-left: 3%;
    }
  }
  .rank,
  .fuel {
    .sub {
      margin-left: 5px;
      font-size: 1.8em;
      text-align: left;
    }
    > div {
      input {
        width: 16px;
        height: 16px;
      }
    }
    .line_h {
      margin: 10px 0 5px;
      line-height: 14px;
      font-size: 1.2em;
    }
  }
  .date_time {
    .sub {
      font-size: 1.2em;
      text-align: left;
      color: $main;
    }
  }
  .sort {
    display: flex;
    justify-content: space-between;
    height: 30px;
    margin-left: 3%;
    flex-direction: row;
    a {
      color: #5e5e5e;
    }
    ul {
      display: flex;
      justify-content: flex-start;
      line-height: 40px;
      width: 30%;
      li {
        a:hover {
          cursor: pointer;
          color: $main;
        }
      }
    }
    .search_box {
      width: 45%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      .stage-search {
        font-size: 0.8em;
        width: 70%;
        text-align: left;
      }
      #search:hover {
        background: $sub;
        color: #fff;
        border-left: 0;
        border: 1px solid $main;
      }
      #reset:hover {
        color: $main;
      }
    }
  }
  .contents_list {
    width: 702px;
    margin: auto;
    padding-top: 210px;
    border: 1px solid #eeeeee;
    background-color: #ffffff;
    border-top: 0;
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
      // border: 1px solid red;
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
    }
  }
}
</style>
