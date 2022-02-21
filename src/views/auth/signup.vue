<template>
  <div>
    <b-form>
      <label for="userId">아이디</label>
      <b-form-input id="userId" v-model="userId" :state="validation"></b-form-input>
      <b-form-invalid-feedback :state="validation"> 아이디의 길이는 5-12 사이여야 합니다. </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation"> 사용 가능한 아이디 입니다. </b-form-valid-feedback>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: ''
    }
  },
  computed: {
    validation() {
      return this.userId.length > 4 && this.userId.length < 13
    }
  }
}
</script>
