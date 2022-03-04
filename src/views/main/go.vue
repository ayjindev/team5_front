<template>
  <div class="body">
    <p>제주 넘는 차!</p>
    <div class="back"></div>
    <div class="moun"></div>
    <div class="road">
      <div class="road-top-half"></div>
      <div class="road-bottom-half"></div>
    </div>
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
          <use xlink:href="#gentle-wave" x="50" y="0" fill="#4579e2" />
          <use xlink:href="#gentle-wave" x="50" y="3" fill="#3461c1" />
          <use xlink:href="#gentle-wave" x="50" y="6" fill="#2d55aa" />
        </g>
      </svg>
    </div>
    <div class="car"></div>
    <div class="sun"></div>
    <div class="multiply"></div>
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
.back {
  width: 100vw;
  min-width: 100vw;
}
.multiply {
  z-index: 90;
  position: fixed;
  top: 100;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background: url('../../assets/images/go/multiply.png') center repeat;
  background-blend-mode: multiply;
  opacity: 10%;
}
p {
  position: fixed;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 2px gray;
  left: 45%;
  top: 44%;

  z-index: 90;
  margin: auto;
  font-size: 2em;
}
.body {
  width: 100vw;
  height: 90vh;
  overflow: hidden;
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
  background: url('../../assets/images/go/back.png') center no-repeat;
  background-size: cover;

  opacity: 40%;
}
.moun {
  z-index: 10;
  position: absolute;
  bottom: 180px;
  background: url('../../assets/images/go/moun.png') center repeat-x;
  background-size: contain;
  height: 500px;
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
  width: 250%;
  height: 200px;
  background-color: #a7a7a7;
  position: absolute;
  bottom: 40px;
  margin-left: -10px;
  padding: 0;
}

.road-top-half {
  height: 15px;
  width: 250%;
  position: absolute;
  left: -10%;
  top: 30px;
  border-top: 20px dashed white;
  margin-top: 15px;
  animation: road-moving 10s infinite linear;
  transition: all 3s linear;
}
@keyframes road-moving {
  100% {
    transform: translate(-2400px);
  }
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
