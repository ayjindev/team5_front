<template>
  <div class="body">
    <div>
      <p>마이 페이지</p>
    </div>
    <div class="me">
      <img src="../../assets/images/me.png" alt="나" />
      <dl>
        <dt :v-model="myUser.user_name">김이름</dt>
        <dd :v-model="myUser.user_id">id1234</dd>
        <dd :v-model="myUser.user_birth">2022-03-24</dd>
        <dd :v-model="myUser.user_email">email@email.com</dd>
        <dd :v-model="myUser.user_phonenumber">010-1234-5678</dd>
        <dd>
          <span :v-model="myUser.user_zip">63534</span>
          <span :v-model="myUser.user_address1">제주특별자치도 서귀포시 가가로 14 (상예동)</span>
          <span :v-model="myUser.user_address2">상세주소</span>
        </dd>
      </dl>
    </div>
    <div v-for="res in myRes" :key="res.index">
      <div class="reservation">
        <dl>
          <dt>나의 예약 현황</dt>
          <dd :v-model="res.car_name">볼보</dd>
          <dd :v-model="res.car_fuel">휘발유</dd>
          <dd :v-model="res.car_rank">수입</dd>
          <dd :v-model="res.car_price">200390</dd>
          <dd>
            <p><span class="start" :v-model="res.start_date">2022-03-15</span></p>
            <p><span class="end" :v-model="res.end_date">2022-03-16</span></p>
          </dd>
        </dl>
        <router-link to="/review">리뷰 작성하기</router-link>
      </div>
    </div>
  </div>
</template>

<!--
<template>
  <div class="body">
    <div>
      <p>마이 페이지</p>
    </div>
    <div class="me">
      <img src="../../assets/images/me.png" alt="나" />
      <dl>
        myUser: {{ myUser }}
        <dt :v-model="myUser.user_name">{{ myUser.user_name }}</dt>
        <dd :v-model="myUser.user_id">{{ myUser.user_id }}</dd>
        <dd :v-model="myUser.user_birth">{{ myUser.user_birth }}</dd>
        <dd :v-model="myUser.user_email">{{ myUser.user_email }}</dd>
        <dd :v-model="myUser.user_phonenumber">{{ myUser.user_phonenumber }}</dd>
        <dd>
          <span :v-model="myUser.user_zip">{{ myUser.user_zip }}</span>
          <span :v-model="myUser.user_address1">{{ myUser.user_address1 }}</span>
          <span :v-model="myUser.user_address2">{{ myUser.user_address2 }}</span>
        </dd>
      </dl>
    </div>
    myRes: {{ myRes }}
    <div v-for="res in myRes" :key="res.index">
      <div class="reservation">
        <dl>
          <dt>나의 예약 현황</dt>
          <dd :v-model="res.car_name">{{ res.car_name }}</dd>
          <dd :v-model="res.car_fuel">{{ res.car_fuel }}</dd>
          <dd :v-model="res.car_rank">{{ res.car_rank }}</dd>
          <dd :v-model="res.car_price">{{ res.car_price }}</dd>
          <dd>
            <p>
              <span class="start" :v-model="res.start_date">{{ res.start_date }}</span
              >부터
            </p>
            <p>
              <span class="end" :v-model="res.end_date">{{ res.end_date }}</span
              >까지
            </p>
          </dd>
        </dl>
        <router-link to="/review">리뷰 작성하기</router-link>
      </div>
    </div>
  </div>
</template>
-->

<script>
export default {
  data() {
    return {
      myUser: [
        {
          user_birth: '',
          user_email: '',
          user_id: '',
          user_name: '',
          user_phonenumber: '',
          user_pw: '',
          user_zip: '',
          user_address1: '',
          user_address2: ''
        }
      ],

      myRes: [
        {
          user_id: '',
          car_name: '',
          car_rank: '',
          car_fuel: '',
          car_price: '',
          client_name: '',
          driver_name: '',
          driver_birth: '',
          driver_phonenumber: '',
          start_date: '',
          end_date: ''
        }
      ]
    }
  },
  computed: {
    myUserInfo() {
      return this.$store.getters.MyUser
    },
    myResInfo() {
      return this.$store.getters.MyRes
    }
  },
  created() {
    this.$store.dispatch('actMyUserInfo') //  유저 데이터 불러오기
    this.$store.dispatch('actMyResInfo') // 예약 데이터 불러오기
  }
}
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
      color: $main;
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
        color: $main;
        font-weight: bold;
      }
    }
  }
  a {
    border: 1px solid $main;
    border-radius: 5px;
    padding: 10px 20px;
    background: $main;
    color: #fff;
    position: relative;
    top: 30px;
  }
  a:hover {
    background: $sub;
  }
}
</style>
