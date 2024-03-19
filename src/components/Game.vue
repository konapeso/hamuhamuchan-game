<!-- src/components/Game.vue -->
<template>
  <div>
    <p>ハムハムちゃん！</p>
    <p class="bold">ステージ{{ currentStageIndex + 1 }}</p>
    <div class="image-container">
      <!-- ここに画像を挿入 -->
    </div>
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
        {
          question: "エレベーターに乗るにはどうすれば！？",
          choices: [
            "降りて欲しそうに見つめる",
            "突撃する",
            "「乗りたいんですけど〜」と言う",
            "ため息をつく",
          ],
          correctAnswer: [0, 2, 3],
          img: "../imgs/0-start.png", // 画像あとでかえる.複数選択にしたい。
        },
        {
          question: "エレベーターに乗るにはどうすれば！？",
          choices: [
            "「小声ですみませんと言う」",
            "「あの、15分ぐらい見送ってまして、、」と言う",
            "舌打ちする",
            "譲ってもらえるまで待ってみる",
          ],
          correctAnswer: [0, 1],
          img: "../imgs/0-start.png", // 画像あとでかえる
        },
        {
          question: "エレベーターに乗るにはどうすれば！？",
          choices: [
            "仁義を切る",
            "「あ、UFOだ！」と言う",
            "「歩ける方、時間に余裕のある方はエスカレーターで行ってもらえませんか？」と言う",
            "「外国ではみんな譲ってくれるんだけどな〜」と大きな独り言を言う",
          ],
          correctAnswer: [2],
          img: "../imgs/0-start.png", // 画像あとでかえる
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
      if (this.currentQuestion.correctAnswer.includes(answerIndex)) {
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


<style>

 .p{
  font-size: 20px;
  font-weight: bold;
 }
 

 .Result{



  .choice {
    cursor: pointer;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #f9f9f9;
  }

  .choice:hover {
    background-color: #e0e0e0;
  }

  /* Style the result section */
  .result {
    font-size: 18px;
    margin-top: 20px;
  }

  .result-won {
    color: green;
  }

  .result-lost {
    color: red;
  }
 }

</style>