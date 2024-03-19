<template>
  <div>
    <div v-if="gameOver">
      <p>ゲームオーバー！</p>
      <button @click="restart" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        もう一度
      </button>
    </div>
    <div v-if="gameWon">
      <p>クリア！</p>
      <button @click="restart" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
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