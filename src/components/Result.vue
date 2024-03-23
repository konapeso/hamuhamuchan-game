<template>
  <div class="absolute bottom-3 left-0 right-0">
    <div v-if="gameOver" class="flex justify-center">
      <div>
        <button
          @click="restart"
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded"
        >
          もう一度
        </button>
      </div>
    </div>

    <div v-if="gameWon" class="flex justify-center">
      <div>
        <button
          @click="restart"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
        >
          再スタート
        </button>
      </div>
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
