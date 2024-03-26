<template>
  <div>
    <p class="font-bold">ステージ{{ currentStageIndex + 1 }}</p>
  </div>
  <div class="absolute inset-0 flex justify-center items-center">
    <QuestionImage
      :currentQuestionImage="currentQuestionImage"
      :displayCorrectImage="displayCorrectImage"
      :displayWrongImage="displayWrongImage"
      :gameWon="gameWon"
      :correctAnswerImage="correctAnswerImage"
      :wrongAnswerImage="wrongAnswerImage"
      :clearImage="clearImage"
    />
  </div>
  <Question
    :key="questionKey"
    v-if="!displayCorrectImage && !displayWrongImage && !gameWon && !gameOver"
    :question="$parent.stages[currentStageIndex].question"
    :choices="$parent.stages[currentStageIndex].choices"
    :isVisible="isQuestionVisible"
    @answer="handleAnswer"
  />
</template>

<script>
import Question from "./Question.vue";
import QuestionImage from "./QuestionImage.vue";

export default {
  emits: ["answer", "next", "gameWon", "gameOver"],
  components: {
    Question,
    QuestionImage,
  },
  props: {
    currentStageIndex: Number,
    currentQuestion: Object,
    displayCorrectImage: Boolean,
    displayWrongImage: Boolean,
    gameWon: Boolean,
    correctAnswerImage: String,
    wrongAnswerImage: String,
    clearImage: String,
    questionImages: Array,
  },
  data() {
    return {
      currentChoiceImage: null,
      gameOver: false,
      questionKey: 0,
      isQuestionVisible: true,
    };
  },
  computed: {
    currentQuestionImage() {
      if (this.gameWon) {
        return null;
      } else if (this.currentChoiceImage) {
        return this.currentChoiceImage;
      } else {
        return this.questionImages[this.currentStageIndex];
      }
    },
  },
  methods: {
    handleAnswer(answerIndex) {
      this.currentChoiceImage = this.currentQuestion.choices[answerIndex].image;
      const isCorrect =
        this.currentQuestion.correctAnswer.includes(answerIndex);
      this.isQuestionVisible = false;
      setTimeout(() => {
        this.currentChoiceImage = null;
        this.$forceUpdate();
        if (isCorrect) {
          if (this.currentStageIndex === 2) {
            this.$emit("gameWon");
          } else {
            this.questionKey += 1;
            this.$nextTick(() => {
              this.isQuestionVisible = true;
              this.$emit("next");
            });
          }
        } else {
          this.gameOver = true;
          this.$emit("gameOver");
        }
      }, 2000);
    },
  },
};
</script>
