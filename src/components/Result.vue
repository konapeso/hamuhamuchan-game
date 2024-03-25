<template>
  <div>
    <!-- Resultコンポーネント -->
    <h1 v-if="gameWon">ゲームクリア！</h1>
    <h1 v-else-if="isGameOver">ゲームオーバー</h1>
    <div v-if="gameWon || isGameOver" class="flex justify-center">
      <button
        @click="$emit('restart')"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
      >
        {{ gameWon ? "再スタート" : "もう一度" }}
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
    isGameOver: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
