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
    <div class="car"></div>
    <div class="sun"></div>
  </div>
</template>

<script>
export default {
  methods: {}
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
}
.forest::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}
p {
  position: fixed;
  font-weight: bold;
  color: $sub;
  // text-shadow: 2px 2px 2px gray;
  left: 45%;
  top: 20%;
  z-index: 90;
  margin: auto;
  font-size: 2em;
}
.body {
  width: 100vw;
  height: 90vh;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.body:-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}
.back {
  z-index: 5;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background: linear-gradient(to bottom, #f0faff, #a2e1ff);
  opacity: 40%;
}

.forest {
  left: 0;
  height: 100px;
  width: 100vw;
  left: 0;
  .far,
  .mid,
  .near {
    z-index: 10;

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
    background: url('../../assets/images/go/forest2.svg') center repeat-x;
    bottom: 242px;
    height: 80px;
    animation-duration: 45s;
  }
  .near {
    background: url('../../assets/images/go/forest1.svg') center repeat-x;
    height: 60px;
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
  z-index: 10;
  height: 300px;
  position: absolute;
  bottom: 200px;
  background: url(../../assets/images/go/moun.png) center no-repeat;
  background-size: contain;
}
.sun {
  z-index: 8;
  width: 70px;
  height: 70px;
  position: absolute;
  top: 130px;
  right: 400px;
  background: rgb(255, 222, 74);
  border-radius: 50px;
}

.road {
  z-index: 15;
  width: 100%;
  height: 200px;
  background-color: #fffcd3;
  position: absolute;
  bottom: 40px;
  padding: 0;
}

.ocean {
  z-index: 20;
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
  z-index: 50;
  left: 50%;
  margin-left: -100px;
  bottom: 170px;
  position: absolute;
  background: url('../../assets/images/go/move.gif') center repeat-x;
  background-size: contain;
  width: 200px;
  height: 200px;
}
</style>
