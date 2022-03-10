<template>
  <div>
    <div id="img_preload">
      <div class="loder"></div>
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
        // this.$router.go() // 새로고침(App.vue를 바꾸기 위해)
        // 로그아웃 처리 후 이동
        this.$router.push('/auth/login')
      }
    }
  },
  created() {
    this.$store.dispatch('authLogout')
  }
}
</script>

<style lang="scss" scoped>
#img_preload {
  height: 100vh;
}
.loder {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -20px;
  background: #fff;
  border: 3px solid $sub;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  animation: loding 1s linear infinite;
  -webkit-animation: loding 1s linear infinite;
  transform-origin: 50% 50%;
}
@keyframes loding {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
