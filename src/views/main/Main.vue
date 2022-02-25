<script src="https://cdn.jsdelivr.net/vue/latest/vue.js"></script>
<template>
  <div class="body">
    <div class="top">
      <div class="filter">
        <div class="rank">
          <h2 class="sub">차량등급</h2>
          <div>
            <div class="line_h">
              <label
                ><input
                  v-model="selectAllranks"
                  type="checkbox"
                  name="rank_all"
                  value=""
                  @click="selectAllrank"
                />전체</label
              >
            </div>
            <div v-for="rank in ranks" :key="rank.id" class="line_h">
              <label
                ><input v-model="rankIds" type="checkbox" :name="rank.name" :value="rank.id" @click="selectrank" />{{
                  rank.name
                }}</label
              >
            </div>
            <!-- <span>Selected Ids: {{ rankIds }}</span> -->
          </div>
        </div>
        <div class="fuel">
          <h2 class="sub">차량등급</h2>
          <div>
            <div class="line_h">
              <label
                ><input
                  v-model="selectAllfuels"
                  type="checkbox"
                  name="fuel_all"
                  value=""
                  @click="selectAllfuel"
                />전체</label
              >
            </div>
            <div v-for="fuel in fuels" :key="fuel.id" class="line_h">
              <label
                ><input v-model="fuelIds" type="checkbox" :name="fuel.name" :value="fuel.id" @click="selectfuel" />{{
                  fuel.name
                }}</label
              >
            </div>
            <!-- <span>Selected Ids: {{ fuelIds }}</span> -->
          </div>
        </div>
      </div>
      <div class="sort">
        <ul>
          <li><a href="">낮은 가격순</a></li>
          /
          <li><a href="">높은 가격순</a></li>
        </ul>
        <div class="search_box">
          <input v-model="search" class="stage-search" type="text" placeholder="검색어를 입력해 주세요" />
          <a id="search" href="">검색</a>
        </div>
      </div>
    </div>
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
          <div class="price c_box_03">
            168,000 <router-link to="/reservation"><button>바로 예약 하기</button></router-link>
          </div>
        </div>
      </div>
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
          <div class="price c_box_03">
            168,000 <router-link to="/reservation"><button>바로 예약 하기</button></router-link>
          </div>
        </div>
      </div>
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
          <div class="price c_box_03">
            168,000 <router-link to="/reservation"><button>바로 예약 하기</button></router-link>
          </div>
        </div>
      </div>
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
          <div class="price c_box_03">
            168,000 <router-link to="/reservation"><button>바로 예약 하기</button></router-link>
          </div>
        </div>
      </div>
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
          <div class="price c_box_03">
            168,000 <router-link to="/reservation"><button>바로 예약 하기</button></router-link>
          </div>
        </div>
      </div>
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
          <div class="price c_box_03">
            168,000 <router-link to="/reservation"><button>바로 예약 하기</button></router-link>
          </div>
        </div>
      </div>
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
          <div class="price c_box_03">
            168,000 <router-link to="/reservation"><button>바로 예약 하기</button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ranks: [
        { id: 'Shad', name: 'Shad' },
        { id: 'Duane', name: 'Duane' },
        { id: 'Myah', name: 'Myah' },
        { id: 'Kamron', name: 'Kamron' },
        { id: 'Brendon', name: 'Brendon' }
      ],
      fuels: [
        { id: 'Shad', name: 'Shad' },
        { id: 'Duane', name: 'Duane' },
        { id: 'Myah', name: 'Myah' },
        { id: 'Kamron', name: 'Kamron' },
        { id: 'Brendon', name: 'Brendon' }
      ],
      selected: [],
      selectAllranks: true,
      rankIds: [],
      search: null
    }
  },
  methods: {
    selectAllrank: function () {
      this.rankIds = []

      if (this.selectAllranks) {
        for (rank in this.ranks) {
          this.rankIds.push(this.ranks[rank].id.toString())
        }
      }
    },
    selectrank: function () {
      this.selectAllranks = false
    }
  }
}
</script>
<style lang="scss" scoped>
.body {
  background: #eee;
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
  .rank,
  .fuel {
    .sub {
      font-size: 1.6em;
      text-align: center;
      line-height: 0.8em;
    }
    > div {
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
    ul {
      display: flex;
      justify-content: center;
      line-height: 30px;
    }
    .search_box {
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
      justify-content: space-between;
      .c_box_01 {
        order: 1;
        text-align: left;
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
        .car_name {
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
    padding-top: 224px;
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
