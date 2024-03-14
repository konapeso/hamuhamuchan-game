<template>
  <div>
    <div v-if="gameOver">
      <p>ゲームオーバー！</p>
    </div>
    <div v-else-if="gameWon">
      <p>クリア！</p>
    </div>
    <button @click="restart">再スタート</button>
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