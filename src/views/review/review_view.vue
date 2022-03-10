<template>
  <div>
    <div class="review">
      <div class="review_box">
        <div class="title">
          <div class="profile">
            <img :src="me.image" alt="내사진" />
            <p>{{ me.name }}</p>
          </div>
          <p>{{ me.car }}</p>
          <div class="star">★ {{ me.star }}</div>
        </div>
        <div class="slider">
          <button @click="Prev">Prev</button>
          <div class="line">
            <div v-for="img in imgs" :key="img.index" class="div" :style="style">
              <div class="slide"><img :src="img.imgsrc" :alt="img.name" /></div>
            </div>
          </div>
          <button @click="next">next</button>
        </div>
        <div class="text_box">
          <h3>{{ me.title }}</h3>
          <p class="contents">{{ me.contents }}</p>
        </div>
      </div>
    </div>
    <div class="go_back">
      <button>목록으로 돌아가기</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      me: {
        car: '벤츠',
        title: '싸고 좋아요',
        image: require('@/assets/images/me.png'),
        name: '김나나',
        star: 5,
        contents: '어쩌고 저쩌고 블라블라어쩌고 저쩌고 블라블라어쩌고 저쩌고 블라블라어쩌고 저쩌고 블라블라어쩌고 '
      },
      imgs: [
        { imgsrc: require('@/assets/images/car/벤츠.jpg'), name: '벤츠' },
        { imgsrc: require('@/assets/images/car/볼보_xc60_2세대.png'), name: '벤츠' },
        { imgsrc: require('@/assets/images/car/벤츠.jpg'), name: '벤츠' },
        { imgsrc: require('@/assets/images/car/볼보_xc60_2세대.png'), name: '벤츠' }
      ],
      translate: 0
    }
  },
  computed: {
    style: function () {
      return {
        transform: 'translateX(' + this.translate + 'px' + ')'
      }
    }
  },
  methods: {
    next: function () {
      this.translate -= 560
      console.log(this.translate)
      console.log(this.imgs.length)
      if (this.translate <= -this.imgs.length * 560) {
        this.translate = 0
      }
    },
    Prev: function () {
      this.translate += 560
      // console.log(this.translate)
      if (this.translate >= 560) {
        this.translate = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.review {
  margin-bottom: 110px;
  padding-top: 60px;
  .review_box {
    width: 45%;
    min-width: 700px;
    border: 1px solid #dddddd;
    margin: auto;
    .title {
      height: 50px;
      line-height: 50px;
      .profile {
        img {
          margin-top: 20px;
          width: 30px;
          height: 30px;
          border: 1px solid #dddddd;
          border-radius: 50px;
          margin-right: 10px;
          margin-top: 10px;
        }
        p {
          font-size: 0.6em;
          float: right;
        }
      }
      display: flex;
      justify-content: space-around;
      font-size: 1.6em;
      span {
        color: $main;
      }
      .star {
        color: $sub;
        font-size: 1em;
      }
    }
    .slider {
      border: 1px solid #dddddd;
      display: flex;
      .line {
        display: flex;
        width: 560px;
        height: 320px;
        margin: 20px 20px;
        overflow: hidden;
      }
      .div {
        transition: 0.5s;
        width: auto;
        height: 310px;
        display: flex;
      }
      .slide {
        text-align: center;
        padding: 10% 0%;
        background: gray;
        width: 560px;
        max-height: inherit;
      }
      img {
        width: 100%;
        position: relative;
        top: -55px;
      }
      button {
        color: #fff;
        background: $main;
        border: 1px solid $main;
      }
      button:hover {
        background: $sub;
      }
    }

    .text_box {
      padding: 20px;
      h3 {
        font-size: 1.4em;
      }
      p {
        margin: 10px 0;
        font-size: 1em;
        line-height: 1.4em;
      }
    }
  }
}
.go_back {
  display: block;
  color: #fff;
  margin: auto;
  padding: 20px;
  background: $main;
  border: 1px solid $main;
  font-size: 2em;
  position: fixed;
  z-index: 80;
  bottom: 0;
  width: 100%;
  button {
    width: 100%;
    text-align: center;
    height: 100%;
    border: 0;
    background: 0;
    color: #fff;
  }
}
.go_back:hover {
  background: $sub;
}
</style>
