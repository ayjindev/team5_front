<template>
  <div class="body">
    <div class="top">
      <div class="filter">
        <div class="rank">
          <h2 class="sub">차량등급</h2>
          <div>
            <div class="line_h">
              <label><input v-model="rank_allSelect" type="checkbox" name="rank_all" value="" />전체</label>
            </div>
            <div
              v-for="(data, index) in ['경형', '소형', '준중형', '중형', '대형', '수입', '승합RV', 'SUV']"
              :key="index"
              class="line_h"
            >
              <label><input v-model="rank_select[index]" type="checkbox" :name="data" :label="data" />{{ data }}</label>
            </div>
          </div>
        </div>
        <div class="fuel">
          <h2 class="sub">연료</h2>
          <div>
            <div class="line_h">
              <label><input v-model="fuel_allSelect" type="checkbox" name="fuel_all" value="" />전체</label>
            </div>
            <div v-for="(data, index) in ['휘발유', '경유', 'LPG', '전기', '하이브리드']" :key="index" class="line_h">
              <label><input v-model="fuel_select" type="checkbox" :name="data" />{{ data }}</label>
            </div>
          </div>
        </div>
        <div class="date_time">
          <h2 class="sub">날짜/시간</h2>
        </div>
      </div>
      <div class="sort">
        <ul>
          <li><a href="">낮은 가격순</a></li>
          /
          <li><a href="">높은 가격순</a></li>
        </ul>
        <div class="search">
          <input v-model="search" class="stage-search" type="text" placeholder="검색" />
          <button>검색</button>
          <button>초기화</button>
        </div>
      </div>
    </div>
    <div class="contents_list">
      <div class="contents">
        <div class="img_box">
          <a target="_blank" href="https://auto.daum.net/newcar/model/mjv000euppt6">
            <img src="../../assets/images/car_volvo_xc60.jpeg" alt="볼보 XC60 2세대" />
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
          <div class="price c_box_03">168,000 <button>바로 예약 하기</button></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
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
        for (let i = 0; i < 7; i++) {
          this.rank_select[i] = true
        }
      } else {
        for (let i = 0; i < 7; i++) {
          this.rank_select[i] = false
        }
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
<style lang="scss" scoped>
* {
  color: #5e5e5e;
}
.body {
  background: #ff8955;
}
.top {
  width: 60%;
  padding: 20px;
  margin: auto;
  // box-shadow: 0px 0px 20px #d4d4d4;
  border: 1px solid #eeeeee;
  background: #fff;
}
.filter {
  display: -webkit-flex;
  > div {
    width: 33.3333333333%;
  }
}

.rank,
.fuel {
  .sub {
    display: block;
    margin-left: 5px;
    font-size: 1.8em;
    text-align: left;
    color: #cf5724;
  }
  > div {
    width: 100%;
    margin: auto;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    input {
      margin: 0 10px;
      float: left;
      -webkit-appearance: none;
      position: relative;
      width: 16px;
      height: 16px;
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

    input[type='checkbox']:hover {
      border-color: #aaaaaa80;
    }

    input[type='checkbox']:checked {
      background-color: #ff8955;
      border-color: #ffffff4d;
      color: white;
    }

    input[type='checkbox']:checked::before {
      border-radius: 2px;
      transform: scale(1) translate(-50%, -50%);
    }
  }
  .line_h {
    margin: 10px 0 5px;
    line-height: 14px;
    font-size: 1.2em;
  }
}
.date_time {
  display: -webkit-flex;
  flex-direction: column;
  .sub {
    float: left;
    font-size: 1.8em;
    text-align: left;
    color: #cf5724;
  }
}
.sort {
  margin-top: 15px;
  display: -webkit-flex;
  justify-content: space-between;
  flex-direction: row;
  height: 30px;
  ul {
    display: -webkit-flex;
    justify-content: flex-start;
    line-height: 40px;
    width: 30%;
    li {
      margin: 0 5px;
      a:link {
        color: #5e5e5e;
      }
      a:visited {
        color: #5e5e5e;
      }
      a:hover {
        color: #cf5724;
      }
      a:active {
        color: #5e5e5e;
      }
    }
  }
  .search {
    width: 30%;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: flex-end;
    button:last-child {
      margin-left: 20px;
    }
  }
}
.contents_list {
  width: 60%;
  height: 100vh;
  margin: auto;
  border: 1px solid #eeeeee;
  background-color: #ffffff;
  border-top: 0;
}

.contents {
  background: #fff;
  border: 1px solid #e4e4e4;
  display: -webkit-flex;
  width: 1000px;
  height: 300px;
  margin: auto;
  .img_box {
    width: 800px;
    margin-right: 20px;
    overflow: hidden;
    img {
      height: 100%;
    }
  }
  .img_box > a:hover img {
    transform: scale(1.5);
    transition: transform 1s;
    filter: brightness(70%);
  }
  .contents_box {
    display: inline-flex;
    flex-wrap: wrap;
    order: 0;
    height: 200px;
    width: 100%;
    justify-content: space-between;

    .c_box_01 {
      order: 1;
      text-align: left;
      .rank_name {
        font-weight: bold;
        font-size: 3em;
      }
      dd {
        font-size: 1.6em;
      }
    }
    .c_box_02 {
      display: -webkit-flex;
      flex-wrap: wrap;
      flex-flow: column;
      justify-content: space-between;
      order: 2;
      text-align: right;
      .car_name {
        padding: 10px 20px;
        display: block;
        color: #fff;
        font-size: 2em;
        background: #ff8955;
      }
      .star {
        font-size: 1.8em;
        margin: 10px 20px;
        color: #ff8955;
      }
    }
    .c_box_03 {
      margin-top: 53px;
      order: 3;
      width: 100%;
      text-align: right;
      align-self: flex-end;
      font-size: 4em;
      color: #cf5724;
      button {
        font-size: 0.6em;
        line-height: 2em;
        border: 0;
        color: #fff;
        background: #cf5724;
      }
      button:hover {
        background: #ff8955;
      }
    }
  }
}
</style>
