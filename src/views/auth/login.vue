<template>
  <div id="body" style="padding-top: 5%">
    <div>
      <b-row id="b-row" align-h="center">
        <b-col id="b-col" cols="3">
          <b-card id="b-card" title="로그인" style="margin-top: 20vh">
            <b-form-group>
              <label id="idlabel" for="loginId">아이디</label>
              <b-form-input
                id="loginId"
                ref="loginId"
                v-model="userLogin.loginId"
                required
                size="sm"
                trim
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <label id="pwlabel" for="loginPw">비밀번호</label>
              <b-form-input
                id="loginPw"
                ref="loginPw"
                v-model="userLogin.loginPw"
                type="password"
                required
                size="sm"
                trim
              ></b-form-input>
            </b-form-group>
            <b-form-group label-cols="3" label-cols-lg="3" label="">
              <b-button id="loginBtn" variant="primary" @click="onSubmit">로그인</b-button>
            </b-form-group>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'
import VueCookies from 'vue-cookies'

export default {
  data() {
    return {
      userLogin: {
        loginId: null,
        loginPw: null
      }
    }
  },
  computed: {
    tokenUser() {
      return this.$store.getters.TokenUser
    },
    isLoginSuccess() {
      return this.$store.getters.IsLoginSuccess
    },
    error() {
      return this.$store.getters.Error
    }
  },
  watch: {
    isLoginSuccess(value) {
      console.log('watch.isLoginSuccess', value)
      if (value === true) {
        console.log('if.watch.tokenUser', value)
        // 로그인이 완료된 상황
        this.$router.replace('/main') // 메인 페이지 이동
      } else if (value === false) {
        alert('아이디, 비밀번호를 확인해 주세요')
      }
    }
    // error(errValue) {
    //   if (errValue !== null) {
    //     // 메세지 출력
    //     alert('아이디, 비밀번호를 확인해 주세요')
    //     return false
    //   }
    // }
  },
  created() {
    // 이미 토큰을 가지고 있는 경우 처리를 위한 로직
    // const token = document.cookie('token')
    const token = this.$cookies.get('auth')
    console.log('쿠키 토큰 존재', token)
    if (token) {
      const decodedToken = jwtDecode(token)
      const today = new Date()
      const expDate = new Date(decodedToken.exp * 1000)

      if (expDate && expDate >= today) {
        // 토큰이 유효한 경우
        this.$router.replace('/main') // 메인 페이지로 이동
      } else {
        // 토큰이 만료된 경우
        this.$cookies.remove('auth') // 토큰 삭제
      }
    }
  },
  methods: {
    // 공란 비허용
    checkInput() {
      if (this.userLogin.loginId == null || this.userLogin.loginId == '') {
        alert('아이디를 입력해 주세요')
        this.$refs.loginId.focus()
        return false
      } else if (this.userLogin.loginPw == null || this.userLogin.loginPw == '') {
        alert('비밀번호를 입력해 주세요')
        this.$refs.loginPw.focus()
        return false
      }
    },

    onSubmit() {
      this.checkInput()

      this.$store.dispatch('actauthLogin', { ...this.userLogin })
    }
  }
}
</script>

<style lang="scss">
#body,
#b-row {
  width: 90vw;
  overflow-x: hidden;
  margin: auto;
}
#b-col {
  width: 30%;
  min-width: 460px;
  margin: auto;
}
#b-card {
  font-size: 1.4rem;
  padding-top: 20px;
  width: 100%;
  padding-bottom: 20px;
  margin: auto;
}
#idlabel,
#pwlabel {
  font-size: 0.8em;
  margin: 20px 0 10px;
}

#loginId,
#loginPw {
  border-radius: 20px;
  margin: 10px 0;
  text-align: center;
  width: 70%;
  margin: auto;
}
#input-live-feedback {
  font-size: 0.6em;
  line-height: 1.4em;
}
.btn {
  background: $main;
  border: 0px;
  margin-top: 20px;
}
.btn:hover {
  background: $sub;
}
.btn-primary {
  width: 100%;
  height: 50px;
}

@media all and(max-width:767px) {
  #b-col,
  #body,
  #b-row {
    width: 100%;
  }
  #b-card {
    margin-top: 30px;
    font-size: 1.4em;
    width: 100%;
  }
  #loginBtn {
    position: fixed;
    bottom: 0px;
    left: 0;
  }
}
</style>
