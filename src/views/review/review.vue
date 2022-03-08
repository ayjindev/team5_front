<template>
  <div id="app">
    <!-- <div class="star-rating">
      <input id="5-stars" v-model="ratings" type="radio" name="rating" value="5" />
      <label for="5-stars" class="star">&#9733;</label>
      <input id="4-stars" v-model="ratings" type="radio" name="rating" value="4" />
      <label for="4-stars" class="star">&#9733;</label>
      <input id="3-stars" v-model="ratings" type="radio" name="rating" value="3" />
      <label for="3-stars" class="star">&#9733;</label>
      <input id="2-stars" v-model="ratings" type="radio" name="rating" value="2" />
      <label for="2-stars" class="star">&#9733;</label>
      <input id="1-star" v-model="ratings" type="radio" name="rating" value="1" />
      <label for="1-star" class="star">&#9733;</label>
    </div> -->
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      ratings: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.star-rating {
  display: flex;
  flex-direction: row-reverse;
  font-size: 1.5em;
  justify-content: space-around;
  padding: 0 0.2em;
  text-align: center;
  width: 5em;
  label {
    color: #ccc;
    cursor: pointer;
  }
  input {
    display: none;
  }
}

.star-rating :checked ~ label {
  color: #ffe347;
}

.star-rating label:hover,
.star-rating label:hover ~ label {
  color: $sub;
}

/* explanation */
</style>
