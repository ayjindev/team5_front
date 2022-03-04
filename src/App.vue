<template>
  <div id="app">
    <div id="nav">
      <router-link to="/main"><h1 id="logo">logo</h1></router-link>
      <div>
        <router-link to="/auth/sign">회원가입</router-link> |
        <router-link to="/auth/login">로그인</router-link>
      </div>
      <div>
        <router-link to="/my-page">마이 페이지</router-link> |

        <router-link to="/logout">로그아웃</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

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
