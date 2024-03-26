<template>
  <ImageFrame>
    <!-- Resultコンポーネント -->
    <div v-if="gameWon">
      <img :src="gameClearImage" alt="クリア画像" />
    </div>
    <div v-else-if="isGameOver">
      <img :src="gameOverImage" alt="不正解画像" />
    </div>
    <div
      v-if="gameWon || isGameOver"
      class="absolute bottom-3 left-0 right-0 flex justify-center"
    >
      <button
        @click="$emit('restart')"
        :class="{
          'bg-green-500 hover:bg-green-700': gameWon,
          'bg-red-500 hover:bg-red-700': !gameWon,
        }"
        class="text-white font-bold py-2 px-6 rounded"
      >
        {{ gameWon ? "再スタート" : "もう一度" }}
      </button>
    </div>
  </ImageFrame>
</template>

<script>
import ImageFrame from "@/components/ImageFrame.vue";
import GameClearImage from "../assets/images/clear-min.png";
import GameOverImage from "../assets/images/fail2-min.png";
export default {
  data() {
    return {
      gameClearImage: GameClearImage,
      gameOverImage: GameOverImage,
    };
  },
  components: {
    ImageFrame,
  },
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
