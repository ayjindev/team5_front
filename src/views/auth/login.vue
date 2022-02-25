<template>
  <div>
    <div>
      <b-row align-h="center">
        <b-col cols="4">
          <b-card title="로그인" style="margin-top: 25vh">
            <b-form-group label-cols="4" label-cols-lg="3" label="아이디" label-for="input-userid">
              <b-form-input id="loginId" v-model="userLoginId"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="3" label="비밀번호" label-for="input-password">
              <b-form-input id="loginPw" v-model="userLoginPw" type="password"></b-form-input>
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
      userLoginId: null,
      userLoginPw: null
    }
  },
  // watch: {
  //   loginResult(value) {
  //     console.log('watch.loginResult', value)
  //     // 등록 후 처리

  //     if (value !== null) {
  //       if (value > 0) {
  //         // 등록이 성공한 경우

  //         // 회원가입 완료 시 로그인 페이지로 이동
  //         this.$router.replace('/main')
  //       } else {
  //         // 회원가입 실패 시 토스트 메세지 출력
  //         this.$bvToast.toast('등록이 실패하였습니다.', {
  //           title: 'ERROR',
  //           variant: 'danger',
  //           solid: true
  //         })
  //         // this.$router.go() // 현재 페이지 새로고침
  //       }
  //     }
  //   }
  // },
  methods: {
    onSubmit() {
      console.log('로그인submit', this.userid, this.password)

      this.$store.dispatch('actUserLogin', { userid: this.userid, password: this.password })

      // this.$router.push('/main')
    }
  }
}
</script>

<style lang="scss" scoped></style>
