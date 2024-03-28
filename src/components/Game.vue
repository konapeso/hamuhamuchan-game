<template>
  <div class="absolute inset-0 flex justify-center flex-start md:items-center">
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
    :currentStageIndex="currentStageIndex"
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
    gameWon: Boolean,
    clearImage: String,
    questionImages: Array,
  },
  data() {
    return {
      displayCorrectImage: false,
      displayWrongImage: false,
      currentChoiceImage: null,
      correctAnswerImage: null,
      wrongAnswerImage: null,
      gameOver: false,
      questionKey: 0,
      isQuestionVisible: false,
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
  mounted() {
    setTimeout(() => {
      this.isQuestionVisible = true;
    }, 2000);
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
          this.displayCorrectImage = true;
          this.correctAnswerImage = this.currentQuestion.correctAnswerImage;
          setTimeout(() => {
            if (this.currentStageIndex === 2) {
              this.$emit("gameWon");
            } else {
              this.questionKey += 1;
              this.$nextTick(() => {
                setTimeout(() => {
                  this.isQuestionVisible = true;
                }, 2000);
                this.displayCorrectImage = false;
                this.$emit("next");
              });
            }
          }, 2000);
        } else {
          this.gameOver = true;
          this.$emit("gameOver");
        }
      }, 2000);
    },
  },
};
</script>
