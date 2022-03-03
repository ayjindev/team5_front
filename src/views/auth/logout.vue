<template>
  <div>
    <div class="text-center" style="padding-top: 200px">
      <b-spinner variant="secondary" style="width: 3rem; height: 3rem; padding-top: 50px"></b-spinner>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.getters.TokenLoading
    }
  },
  watch: {
    loading(value) {
      if (value === false) {
        // 로그아웃 처리 후 이동
        this.$router.replace('/auth/login')
      }
    }
  },
  created() {
    this.$store.dispatch('authLogout')
  }
}
</script>

<style lang="scss" scoped></style>
