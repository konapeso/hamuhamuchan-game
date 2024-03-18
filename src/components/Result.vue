<template>
  <div>
    <div v-if="gameOver">
      <div class="image-container">
      <img  class="background-fail" src="src/imgs/fail2.png" alt="" />
      <button @click="restart">もう一度</button>
    </div>
    <div v-if="gameWon">
      <div class="image-container">
      <img  class="background-clear" src="src/imgs/clear.png" alt="" />
      <button @click="restart">再スタート</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gameWon: {
      type: Boolean,
      required: true
    },
    gameOver: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    restart() {
      this.$emit('restart');
    }
  }
};
</script>

<style>
 .image-container {
  position: relative;
 }

 .background-fail {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
  }

  button {
   font-size: 2em;
   margin: 0 auto;
   display: block;
  }

  .background-clear{
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
  }
</style>
