<template>
  <div class="body">
    <p>제주 넘는 차!</p>
    <div class="back"></div>
    <div class="moun"></div>
    <div class="forest">
      <div class="far"></div>
      <div class="mid"></div>
      <div class="near"></div>
    </div>
    <div class="road"></div>
    <div class="ocean">
      <svg class="editorial" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 
    58-18 88-18s
    58 18 88 18 
    58-18 88-18 
    58 18 88 18
    v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="50" y="0" fill="#4ad9ff" />
          <use xlink:href="#gentle-wave" x="50" y="3" fill="#3461c1" />
          <use xlink:href="#gentle-wave" x="50" y="6" fill="#3d90df" />
        </g>
      </svg>
    </div>
    <div class="car" @click="goToMain"></div>
    <!-- <div class="text">예약하러 가기!</div> -->
    <div class="sun"></div>
  </div>
</template>

<script>
export default {
  methods: {
    goToMain() {
      this.$router.push('/main') // 메인 페이지 이동
      this.$router.go() // 새로고침
    }
  }
}
</script>
<style lang="scss" scoped>
.body,
.moun,
.road,
.ocean,
.back,
.forest {
  width: 100vw;
  overflow: hidden;
  min-width: 100vw;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.forest ::-webkit-scrollbar,
body::-webkit-scrollbar {
  display: none;
  width: 0 !important;
}
// .text {
//   z-index: 100;
//   position: fixed;
//   top: 200px;
//   right: 35%;
//   font-size: 1.6em;
//   line-height: 200px;
//   color: #5e5e5e;
//   width: 200px;
//   height: 200px;
//   background: url('../../assets/images/go/text.png') center no-repeat;
//   background-size: contain;
// }
p {
  position: fixed;
  font-weight: bold;
  color: $sub;
  // text-shadow: 2px 2px 2px gray;
  left: 50%;
  top: 20%;
  z-index: 90;
  margin: auto;
  margin-left: -90px;
  font-size: 2em;
}
.body {
  width: 100vw;
  height: 90vh;
}

.back {
  position: fixed;
  z-index: 50;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background: linear-gradient(to bottom, #f0faff, #a2e1ff);
}

.forest {
  position: absolute;
  left: 0;
  top: 0%;
  height: 100vh;
  width: 100vw;
  .far,
  .mid,
  .near {
    z-index: 58;
    animation: move-forever 12s linear infinite;
    position: absolute;
    width: 900vw;
    background-repeat: repeat-x;
    animation: slide linear infinite;
    background-size: contain;
  }
  .far {
    background: url('../../assets/images/go/forest1.svg') center repeat-x;
    bottom: 240px;
    height: 100px;
    animation-duration: 60s;
  }
  .mid {
    background: url('../../assets/images/go/forest2.svg') top repeat-x;
    bottom: 242px;
    height: 70px;
    animation-duration: 45s;
  }
  .near {
    background: url('../../assets/images/go/forest3.svg') center repeat-x;
    height: 50px;
    bottom: 240px;
    animation-duration: 30s;
  }
}
@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-3000px, 0, 0);
  }
}

.moun {
  z-index: 58;
  height: 300px;
  position: fixed;
  bottom: 198px;
  background: url(../../assets/images/go/moun.png) center no-repeat;
  background-size: contain;
}
.sun {
  z-index: 68;
  width: 70px;
  height: 70px;
  position: absolute;
  top: 130px;
  right: 20%;
  background: rgb(255, 222, 74);
  border-radius: 50px;
}

.road {
  z-index: 65;
  width: 100%;
  height: 200px;
  background-color: #fffcd3;
  position: absolute;
  bottom: 40px;
  padding: 0;
}

.ocean {
  z-index: 70;
  position: absolute;
  margin: 0;
  max-height: 100vh;
  bottom: 0;
  overflow: hidden;
  padding: 9em 0 0 0;
  .parallax > use {
    animation: move-forever 12s linear infinite;
    &:nth-child(1) {
      animation-delay: -2s;
    }
    &:nth-child(2) {
      animation-delay: -2s;
      animation-duration: 5s;
    }
    &:nth-child(3) {
      animation-delay: -4s;
      animation-duration: 3s;
    }
  }

  @keyframes move-forever {
    0% {
      transform: translate(-90px, 0%);
    }
    100% {
      transform: translate(85px, 0%);
    }
  }

  .editorial {
    display: block;
    width: 100%;
    height: 10em;
    max-height: 100vh;
    margin: 0;
  }
}
.car {
  z-index: 90;
  left: 50%;
  margin-left: -100px;
  bottom: 170px;
  position: absolute;
  background: url('../../assets/images/go/move.gif') center repeat-x;
  background-size: contain;
  width: 200px;
  height: 200px;
  transition-duration: 1s;
}
.car:hover {
  cursor: pointer;
  width: 230px;
  height: 230px;
}

@media all and(max-width:767px) {
  p {
    position: fixed;
    font-weight: bold;
    color: $sub;
    // text-shadow: 2px 2px 2px gray;
    left: 30%;
    top: 30%;
    z-index: 90;
    margin: auto;
    font-size: 2em;
  }
  .sun {
    width: 70px;
    height: 70px;
    top: 130px;
    left: 50%;
    margin-left: -35px;
  }
  .mid {
    // display: none;
  }
  .far {
    height: 80px;
  }
}
</style>
