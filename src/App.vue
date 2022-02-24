<template>
  <div id="app">
    <div id="nav">
      <router-link to="/main"><h1 id="logo">logo</h1></router-link>
      <div>
        <router-link to="/auth/sign">회원가입</router-link> |
        <router-link to="/auth/login">로그인</router-link>
      </div>
      <!-- <div>
        <router-link to="/my-page">마이 페이지</router-link> |
        <router-link to="/logout">로그아웃</router-link>
      </div> -->

      <!-- <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      | <router-link to="/main">Main</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
::-webkit-scrollbar {
  width: 12px;
  height: 8px;
  border: 3px solid #ffffff;
}
::-webkit-scrollbar-button:start:decrement,
::-webkit-scrollbar-button:end:increment {
  display: block;
  height: 10px;
  background: #ffffff;
}
::-webkit-scrollbar-track {
  background: #ffffff;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  height: 50px;
  width: 50px;
  background: #cf5724;
  -webkit-border-radius: 8px;
  border-radius: 8px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5e5e5e;
}
#nav {
  position: fixed;
  z-index: 50;
  height: 50px;
  width: 100%;
  background: #fff;
  display: -webkit-flex;
  justify-content: space-around;
  padding: 10px 0;
  border: 1px solid #e4e4e4;
  font-size: 1em;
  line-height: 30px;
  a {
    font-weight: bold;
    text-decoration: none;
    color: #5e5e5e;
  }
}

#nav #logo {
  background: url(./assets/images/logo.png) center no-repeat;
  background-size: 100%;
  width: 50px;
  height: 40px;
  text-indent: -9999px;
  margin-top: -5px;
}

@media all and(min-width:810px) {
  #nav {
    position: fixed;
    z-index: 50;
    height: 60px;
    width: 100vw;
    background: #fff;
    display: -webkit-flex;
    justify-content: space-around;
    padding: 10px 0;
    border: 1px solid #e4e4e4;
    a {
      font-weight: bold;
      color: #5e5e5e;
      text-decoration: none;
      line-height: 40px;
    }
    a:hover {
      color: #ff8955;
    }
  }

  #nav #logo {
    background: url(./assets/images/logo.png) center no-repeat;
    background-size: 100%;
    width: 50px;
    height: 40px;
    text-indent: -9999px;
  }
}
</style>
