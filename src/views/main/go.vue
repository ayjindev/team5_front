<template>
  <div class="body">
    <div class="back"></div>
    <div class="moun"></div>
    <div class="sand"></div>
    <div class="sea1"></div>
    <div class="sea2"></div>
    <div class="sea3"></div>
    <div class="sea4"></div>
    <div class="sea5"></div>
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
.sand,
.sea {
  width: 100vw;
}
.body {
  overflow: hidden;
}

.back {
  z-index: 5;
  background: url('../../assets/images/go/back.png') center repeat-x;
  opacity: 20%;
  background-size: contain;
  height: 98vh;
  width: 9999vw;
  -webkit-animation: moveSlideshow 1700s linear infinite;
  -moz-animation: moveSlideshow 1700s linear infinite;
  -o-animation: moveSlideshow 1700s linear infinite;
}
.sun {
  z-index: 8;
  width: 70px;
  height: 70px;
  position: fixed;
  top: 130px;
  right: 400px;
  background: rgb(255, 222, 74);
  border-radius: 50px;
}
.moun {
  z-index: 10;
  position: fixed;
  bottom: 200px;
  background: url('../../assets/images/go/moun.png') center repeat-x;
  background-size: contain;
  height: 500px;
  width: 9999vw;
  -webkit-animation: moveSlideshow 900s linear infinite;
  -moz-animation: moveSlideshow 900s linear infinite;
  -o-animation: moveSlideshow 900s linear infinite;
}

.sand {
  z-index: 15;
  position: fixed;
  bottom: 90px;

  background: url('../../assets/images/go/sand.png') center repeat-x;
  background-size: contain;
  height: 200px;
  width: 9999vw;
  -webkit-animation: moveSlideshow 1000s linear infinite;
  -moz-animation: moveSlideshow 1000s linear infinite;
  -o-animation: moveSlideshow 1000s linear infinite;
}

.sea1 {
  z-index: 20;
  position: fixed;
  bottom: 50px;
  background: url('../../assets/images/go/sea1.png') center repeat-x;
  background-size: contain;
  height: 200px;
  width: 9999vw;
  -webkit-animation: moveSlideshow 1500s linear infinite;
  -moz-animation: moveSlideshow 1500s linear infinite;
  -o-animation: moveSlideshow 1500s linear infinite;
}
.sea2 {
  z-index: 30;
  position: fixed;
  bottom: 0;
  background: url('../../assets/images/go/sea2.png') center repeat-x;
  background-size: contain;
  height: 200px;
  width: 9999vw;
  -webkit-animation: moveSlideshow 1700s linear infinite;
  -moz-animation: moveSlideshow 1700s linear infinite;
  -o-animation: moveSlideshow 1700s linear infinite;
}
.sea3 {
  z-index: 40;
  position: fixed;
  opacity: 20%;
  bottom: -50px;
  background: url('../../assets/images/go/sea1.png') center repeat-x;
  background-size: contain;
  height: 200px;
  width: 9999vw;
  -webkit-animation: moveSlideshow 1700s linear infinite;
  -moz-animation: moveSlideshow 1700s linear infinite;
  -o-animation: moveSlideshow 1700s linear infinite;
}
.sea4 {
  z-index: 50;
  position: fixed;
  opacity: 20%;
  bottom: -100px;
  background: url('../../assets/images/go/sea2.png') center repeat-x;
  background-size: contain;
  height: 200px;
  width: 9999vw;
  -webkit-animation: moveSlideshow 1700s linear infinite;
  -moz-animation: moveSlideshow 1700s linear infinite;
  -o-animation: moveSlideshow 1700s linear infinite;
}
.sea5 {
  z-index: 60;
  position: fixed;
  opacity: 20%;
  bottom: -150px;
  background: url('../../assets/images/go/sea1.png') center repeat-x;
  background-size: contain;
  height: 200px;
  width: 9999vw;
  -webkit-animation: moveSlideshow 1700s linear infinite;
  -moz-animation: moveSlideshow 1700s linear infinite;
  -o-animation: moveSlideshow 1700s linear infinite;
}
@keyframes moveSlideshow {
  100% {
    transform: translateX(-200%);
  }
}

.car {
  z-index: 50;
  left: 50%;
  margin-left: -100px;
  bottom: 230px;
  position: fixed;
  background: url('../../assets/images/go/move.gif') center repeat-x;
  background-size: contain;
  width: 200px;
  height: 200px;
}
</style>
