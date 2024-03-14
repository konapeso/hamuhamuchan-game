<template>
  <div>
    <p>これはサンプルのコードなので適宜書き換えてください</p>
    <Question
      v-if="!gameOver && !gameWon"
      :question="currentQuestion"
      @answer="checkAnswer"
    />
    <Result
      v-else-if="gameOver || gameWon"
      :correct="gameWon"
      :gameOver="gameOver"
      @restart="restartGame"
    />
  </div>
</template>

<script>
// これはサンプルのコードなので適宜書き換えてください
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
        { choices: ["A", "B", "C", "D"], correctAnswers: 3 },
        { choices: ["A", "B", "C", "D"], correctAnswers: 2 },
        { choices: ["A", "B", "C", "D"], correctAnswers: 1 },
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
      return (
        this.correctAnswers ===
        this.stages.reduce((acc, stage) => acc + stage.correctAnswers, 0)
      );
    },
  },
  methods: {
    checkAnswer(answer) {
      if (answer === this.currentQuestion.correctAnswers) {
        this.correctAnswers++;
      } else {
        this.wrongAnswers++;
      }
      if (this.wrongAnswers === 0) {
        this.moveToNextStage();
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
