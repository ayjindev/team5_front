<template>
  <div>
    <div>
      <b-row align-h="center">
        <b-col cols="4">
          <b-card title="로그인" style="margin-top: 25vh">
            <b-form-group label-cols="4" label-cols-lg="3" label="아이디" label-for="input-userid">
              <b-form-input id="input-userid" v-model="userLoginId"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="3" label="비밀번호" label-for="input-password">
              <b-form-input id="input-password" v-model="userLoginPw" type="password"></b-form-input>
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
  methods: {
    onSubmit() {
      console.log('onSubmit', this.userLoginId, this.userLoginPw)
    }
  }
}
</script>

<style lang="scss" scoped></style>
