<template>
  <div id="app">
    <div class="col-3">
      <p>
        <rate :length="5" :showcount="true" />
        {{ rateStar.length }}
      </p>
    </div>
  </div>
</template>

<script>
import rate from './Rate'
import 'vue-rate/dist/vue-rate.css'
export default {
  name: 'RateStar',
  components: {
    rate
  },
  data() {
    return {
      rateStar: this.$route.params
    }
  },
  created: function () {}
}
</script>

<style lang="scss" scoped></style>
