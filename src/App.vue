<template>
  <div id="app">
    <div id="nav">
      <router-link to="/main"><h1 id="logo">logo</h1></router-link>
      <div v-if="!isLoggedin">
        <router-link to="/auth/sign">회원가입</router-link> |
        <router-link to="/auth/login">로그인</router-link>
      </div>
      <div v-if="isLoggedin">
        <router-link to="/my-page" @click="onClick">마이 페이지</router-link> |
        <router-link to="/auth/logout">로그아웃</router-link>
      </div>

      <!-- <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> | |
      <router-link to="/main">Main</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    // isLoggedin() {
    //   let login = false
    //   if (this.$store.getters.TokenUser && this.$store.getters.TokenUser.id > 0) {
    //     login = true
    //   }
    //   return login
    // }
    // isLoggedin() {
    //   let login = false
    //   if (this.$store.getters.TokenUser && this.$store.getters.TokenUser.id !== null) {
    //     login = true
    //   }
    //   return login
    // }
    isLoggedin() {
      // 이미 토큰을 가지고 있는 경우 처리를 위한 로직
      let login = false
      const test = this.$store.getters.TokenUser // 로그아웃 시 App.vue의 변화 감지를 위한 TokenUser 로딩
      const token = window.localStorage.getItem('accessToken')
      if (token) {
        // 로컬스토리지에 토큰 존재 여부 확인
        login = true
      }
      // 토큰이 존재하지 않는 경우
      return login
    }
  },
  methods: {
    onClick(path) {
      // this.$router.push(path)
      this.$router.go()
    }
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  color: #5e5e5e;
  background: #fff;
}
#nav {
  border-bottom: 1px solid #e4e4e4;
  position: fixed;
  z-index: 50;
  height: 50px;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 1em;
  line-height: 30px;
  a {
    font-weight: bold;
    text-decoration: none;
    color: #5e5e5e;
  }
  > div {
    padding: 0 20px;
  }
}

#nav #logo {
  background: url(./assets/images/logo.png) right no-repeat;
  background-size: contain;
  width: 70px;
  height: 40px;
  text-indent: -9999px;
}

@media all and(min-width:768px) {
  #nav {
    position: fixed;
    justify-content: space-between;
    z-index: 50;
    height: 60px;
    width: 700px;
    left: 50%;
    margin-left: -350px;
    background: #fff;
    display: -webkit-flex;
    padding: 10px 0;
    a {
      font-weight: bold;
      color: #5e5e5e;
      text-decoration: none;
      line-height: 40px;
    }
    a:hover {
      color: $sub;
    }
    #logo {
      background: url(./assets/images/logo.png) right no-repeat;
      background-position: 20px 20px;
      width: 70px;
      height: 60px;
      text-indent: -9999px;
      margin-top: -10px;
      background-size: 70%;
    }
    #logo:hover {
      animation-duration: 1s;
      animation-name: slidein;
    }
    @keyframes slidein {
      from {
        background-position: 20px 20px;
      }
      50% {
        background-position: 20px 10px;
      }
      to {
        background-position: 20px 20px;
      }
    }
  }
}
</style>
