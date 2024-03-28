<template>
  <div>
    <p class="font-bold">ステージ{{ currentStageIndex + 1 }}</p>
  </div>
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
    @answer="handleAnswer"
  />
<!-- 広告を表示する領域 -->
<div class="absolute inset-y-0 left-0 flex items-center pl-4">
      <!-- 左側の広告 -->
      <div class="h-full w-24">
        <!-- 広告画像やリンクをここに配置 -->
        <img src="@/assets/images/karikoukoku1.png" alt="広告1" /><br><br>
        <img src="@/assets/images/karikoukoku2.jpg" alt="広告2" />
      </div>
    </div>

    <div class="absolute inset-y-0 right-0 flex items-center pr-4">
      <!-- 右側の広告 -->
      <div class="h-full w-24">
        <!-- 広告画像やリンクをここに配置 -->
        <img src="@/assets/images/karikoukoku5.png" alt="広告1" /><br><br>
        <img src="@/assets/images/karikoukoku4.png" alt="広告2" />
      </div>
    </div>




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
    this.isQuestionVisible = true;
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
                }, 1000);
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
