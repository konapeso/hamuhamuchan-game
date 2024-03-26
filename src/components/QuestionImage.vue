<template>
  <ImageFrame>
    <img
      v-if="currentQuestionImage && !displayCorrectImage && !displayWrongImage"
      :src="currentQuestionImage"
      alt="Question Image"
      class="mx-auto"
    />
    <img
      v-if="displayCorrectImage"
      :src="correctAnswerImage"
      alt="Correct Image"
      class="mx-auto"
    />
    <img
      v-if="displayWrongImage"
      :src="wrongAnswerImage"
      alt="Wrong Image"
      class="mx-auto"
    />
    <img v-if="gameWon" :src="clearImage" alt="Clear Image" class="mx-auto" />
  </ImageFrame>
</template>

<script>
import ImageFrame from "./ImageFrame.vue";

export default {
  components: {
    ImageFrame,
  },
  props: {
    currentQuestionImage: String,
    displayCorrectImage: Boolean,
    displayWrongImage: Boolean,
    gameWon: Boolean,
    correctAnswerImage: String,
    wrongAnswerImage: String,
    clearImage: String,
  },
};
</script>
