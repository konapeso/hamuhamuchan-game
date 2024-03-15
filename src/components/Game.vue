<template>
  <div>
    <p>ハムハムちゃん！</p>
    <Question
     v-if="!gameOver && !gameWon"
      :question="currentQuestion.question"
      :choices="currentQuestion.choices"
      @answer="checkAnswer"
    />
    <Result
      v-else-if="gameOver || gameWon"
      :gameOver="gameOver"
      :gameWon="gameWon"
      @restart="restartGame"
    />
  </div>
</template>

<script>
import Question from "./Question.vue";
import Result from "./Result.vue";

export default {
  components: {
    Question,
    Result,
  },
  data() {
    return {
      stages: [
        { question: "りんごは何色？", choices: ["青", "赤", "黒", "白"], correctAnswer: 1 },
        { question: "みかんは何色？", choices: ["緑", "黄色", "オレンジ", "黒"], correctAnswer: 2 },
        { question: "バナナは何色？", choices: ["赤", "オレンジ", "黒", "黄色"], correctAnswer: 3 },
      ],
      currentStageIndex: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    };
  },
  computed: {
    currentQuestion() {
      return this.stages[this.currentStageIndex];
    },
    gameOver() {
      return this.wrongAnswers > 0;
    },
    gameWon() {
      return this.correctAnswers === this.stages.length;
    },
  },
  methods: {
    checkAnswer(answerIndex) {
      if (answerIndex === this.currentQuestion.correctAnswer) {
        this.correctAnswers++;
        this.moveToNextStage();
      } else {
        this.wrongAnswers++;
      }
    },
    moveToNextStage() {
      if (this.currentStageIndex < this.stages.length - 1) {
        this.currentStageIndex++;
      }
    },
    restartGame() {
      this.currentStageIndex = 0;
      this.correctAnswers = 0;
      this.wrongAnswers = 0;
    },
  },
};
</script>