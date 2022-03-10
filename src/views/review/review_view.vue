<template>
  <div>
    <div class="review">
      <div class="review_box">
        <div class="title">
          <div class="profile">
            <img class="web" :src="me.image" alt="내사진" />
            <p class="web">{{ me.name }}</p>
          </div>
          <div>{{ me.car }}</div>
          <div class="star web">★ {{ me.star }}</div>
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
          <div class="movi">
            <div class="profile">
              <img :src="me.image" alt="내사진" />
              <p>{{ me.name }}</p>
            </div>
            <div class="star">★ {{ me.star }}</div>
          </div>
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
      console.log(this.translate)
      console.log(this.imgs.length)
      if (screen.availWidth > 767) {
        this.translate -= 560
        if (this.translate <= -this.imgs.length * 560) {
          this.translate = 0
        }
      } else if (screen.availWidth < 768) {
        this.translate -= 300
        if (this.translate <= -this.imgs.length * 300) {
          this.translate = 0
        }
      }
    },
    Prev: function () {
      console.log(this.translate)
      if (screen.availWidth > 767) {
        this.translate += 560
        if (this.translate >= 560) {
          this.translate = 0
        }
      } else if (screen.availWidth < 768) {
        this.translate += 300
        if (this.translate >= 300) {
          this.translate = 0
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.review {
  margin-bottom: 110px;
  .review_box {
    border: 1px solid #dddddd;
    margin: auto;
    .title {
      height: 50px;
      line-height: 50px;
      font-size: 1.6em;
    }
  }
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
    overflow: hidden;
    .div {
      transition: 0.5s;
      width: auto;
      display: flex;
    }
    .slide {
      text-align: center;
      padding: 10% 0%;
      background: gray;
      max-height: inherit;
    }
    img {
      width: 100%;
      position: relative;
      top: -55px;
    }
  }
}
button {
  color: #fff;
  background: $main;
  border: 1px solid $main;
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
  width: 45%;
  min-width: 700px;
  left: 50%;
  margin-left: -350px;
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
@media all and(max-width:767px) {
  .web {
    display: none;
  }
  .review {
    padding-top: 50px;
  }
  .movi {
    display: flex;
    justify-content: space-between;
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
        font-size: 1em;
        float: right;
      }
    }
    .star {
      font-size: 2em;
    }
  }
  .review_box {
    width: 100%;
  }
  .slider {
    .line {
      width: 300px;
      height: 160px;
    }
    .div {
      height: 150px;
    }
    .slide {
      width: 300px;
    }
  }
}
@media all and(min-width:768px) {
  .movi {
    display: none;
  }
  .review {
    padding-top: 60px;
  }
  .title {
    display: flex;
    justify-content: space-around;
  }
  .review_box {
    width: 45%;
    min-width: 700px;
  }

  .profile {
    display: flex;
    justify-content: space-around;
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
  .slider {
    .line {
      width: 560px;
      height: 320px;
      margin: 20px 20px;
    }
    .div {
      height: 310px;
    }
    .slide {
      width: 560px;
    }
  }
  button:hover {
    background: $sub;
  }
}
</style>
