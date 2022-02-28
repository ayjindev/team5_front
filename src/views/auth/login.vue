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
    infoData() {
      return this.$store.getters.UserLogin
    }
  },
  methods: {
    checkInput() {
      const inputForm = this.userLogin

      if (inputForm.loginId == '') {
        alert('아이디를 입력해 주세요')
        this.$refs.loginId.focus()
        return false
      }

      if (inputForm.loginPw == '') {
        alert('비밀번호를 입력해 주세요')
        this.$refs.loginPw.focus()
        return false
      }
    },

    onSubmit() {
      console.log('로그인submit', { ...this.userLogin })

      this.checkInput()

      this.$store.dispatch('actUserLogin', { ...this.userLogin })

      // 완료되면 메인 페이지로 이동
      this.$router.push('/main')
    }
  }
}
</script>

<style lang="scss" scoped></style>
