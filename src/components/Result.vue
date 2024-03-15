<template>
  <div>
    <div v-if="gameOver">
      <p>ゲームオーバー！</p>
      <button @click="restart">もう一度</button>
    </div>
    <div v-if="gameWon">
      <p>クリア！</p>
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