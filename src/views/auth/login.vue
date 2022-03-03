<template>
  <div>
    <div>
      <b-row align-h="center">
        <b-col cols="4">
          <b-card title="로그인" style="margin-top: 25vh">
            <b-form-group label-cols="4" label-cols-lg="3" label="아이디" label-for="loginId">
              <b-form-input id="loginId" ref="loginId" v-model="userLogin.loginId"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="3" label="비밀번호" label-for="loginPw">
              <b-form-input id="loginPw" ref="loginPw" v-model="userLogin.loginPw" type="password"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="3" label="">
              <b-button variant="primary" @click="onSubmit">로그인</b-button>
            </b-form-group>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'

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
    error() {
      return this.$store.getters.Error
    }
  },
  watch: {
    tokenUser(value) {
      console.log('watch.tokenUser', value)
      if (value && value.id && value.id !== null) {
        // 로그인이 완료된 상황
        this.$router.replace('/main') // 메인 페이지 이동
      }
    },
    error(errValue) {
      if (errValue !== null) {
        // 메세지 출력
        alert('아이디, 비밀번호를 확인해 주세요')
      }
    }
  },
  created() {
    // 이미 토큰을 가지고 있는 경우 처리를 위한 로직
    const token = window.localStorage.getItem('accessToken')
    if (token) {
      const decodedToken = jwtDecode(token)
      const today = new Date()
      const expDate = new Date(decodedToken.exp * 1000)

      if (expDate && expDate >= today) {
        // 토큰이 유효한 경우
        this.$router.push('/main') // 메인 페이지 이동
      } else {
        // 토큰이 만료된 경우
        window.localStorage.removeItem('accessToken') // 토큰 삭제
      }
    }
  },
  methods: {
    // 공란 비허용
    nullCheckInput() {
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
      this.nullCheckInput() // 아무것도 입력하지 않은 상태 체크

      this.$store.dispatch('actauthLogin', { ...this.userLogin })
    }
  }
}
</script>

<style lang="scss" scoped></style>
