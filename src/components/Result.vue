<template>
  <div>
    <div v-if="gameOver">
      <div class="image-container">
      <img  class="background-fail" src="../imgs/fail2.png" alt="" />
      <button @click="restart">もう一度</button>
    </div>
  </div>
</div>
    <div v-if="gameWon">
      <div class="image-container">
      <img  class="background-clear" src="../imgs/clear.png" alt="" />
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

<style scoped>
.image-container {
  /* 画像のパスを指定 */
  background-image: url('../imgs/0-start.png');
  /* 画像を中央上部に配置 */
  background-position: center top;
  /* 画像を1回だけ表示 */
  background-repeat: no-repeat;
  /* 画像をコンテナのサイズに合わせてスケール */
  background-size: cover;
  /* 画像を固定位置に配置 */
  background-attachment: fixed;
  /* コンテナの高さを設定（必要に応じて） */
  height: 100vh;
}
</style>