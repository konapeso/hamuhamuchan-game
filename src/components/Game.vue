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
        { question: "3人が降りてくれる選択肢を選ぼう", choices: [
            { text: "降りて欲しそうに見つめる", isCorrect: false },
            { text: "突撃する", isCorrect: true },
            { text: "「乗りたいんですけど〜」と言う", isCorrect: false },
            { text: "ため息をつく", isCorrect: false }
          ]
        },
        { question: "3人が降りてくれる選択肢を選ぼう", choices: [
            { text: "「小声ですみませんと言う」", isCorrect: true },
            { text: "「あの、15分ぐらい見送ってまして、、」と言う", isCorrect: false },
            { text: "舌打ちする", isCorrect: false },
            { text: "譲ってもらえるまで待ってみる", isCorrect: false }
          ]
        },
        { question: "3人が降りてくれる選択肢を選ぼう", choices: [
            { text: "「歩ける方、時間に余裕のある方はエスカレーターで行ってもらえませんか？」と言う", isCorrect: true },
            { text: "仁義を切る", isCorrect: false },
            { text: "「あ、UFOだ！」と言う", isCorrect: false },
            { text: "「外国ではみんな譲ってくれるんだけどな〜」と大きな独り言を言う", isCorrect: false }
          ]
        },
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
      if (this.currentQuestion.choices[answerIndex].isCorrect) {
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
