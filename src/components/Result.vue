<template>
  <div class="button-container">
    <div v-if="gameOver">
      <div class="image-container">
        <img class="background-fail" src="../imgs/fail2.png" alt="" />
        <p>ゲームオーバー！</p>
        <button
          @click="restart"
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          もう一度
        </button>
      </div>
    </div>
  </div>
  <div v-if="gameWon">
    <div class="image-container">
      <img class="background-clear" src="../imgs/clear.png" alt="" />
      <p>クリア！</p>
      <button
        @click="restart"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        再スタート
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gameWon: {
      type: Boolean,
      required: true,
    },
    gameOver: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    restart() {
      this.$emit("restart");
    },
  },
};
</script>

<style scoped>
.image-container {
  /* 画像のパスを指定 */
  background-image: url("../imgs/0-start.png");
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

.button-container {
  display: flex;
  justify-content: center;
}
</style>
