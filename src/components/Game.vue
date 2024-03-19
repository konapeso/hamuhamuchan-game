<!-- src/components/Game.vue -->
<template>
  <div>
    <p>ハムハムちゃん！</p>
    <p class="bold">ステージ{{ currentStageIndex + 1 }}</p>
    <div class="image-container">
      <!-- 選択肢がクリックされたときに表示される画像 -->
      <img
        v-if="currentChoiceImage"
        :src="currentChoiceImage"
        alt="Choice Image"
      />
      <!-- 問題が正解だった場合の画像 -->
      <img
        v-if="correctAnswerImage"
        :src="correctAnswerImage"
        alt="Correct Image"
      />
      <!-- 問題が不正解だった場合の画像 -->
      <img v-if="wrongAnswerImage" :src="wrongAnswerImage" alt="Wrong Image" />
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
            {
              text: "降りて欲しそうに見つめる",
              image: "url/to/image1.jpg",
            },
            {
              text: "突撃する",
              image: "url/to/image2.jpg",
            },
            {
              text: "「乗りたいんですけど〜」と言う",
              image: "url/to/image3.jpg",
            },
            {
              text: "ため息をつく",
              image: "url/to/image4.jpg",
            },
          ],
          correctAnswer: [0, 2, 3],
          correctAnswerImage: "url/to/correct/image.jpg",
          wrongAnswerImage: "url/to/wrong/image.jpg",
        },
        // 他のステージも同様に選択肢と画像を追加
      ],
      currentStageIndex: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      // 選択肢がクリックされたときに表示される画像を保持するプロパティ
      currentChoiceImage: null,
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
    // 問題が正解だった場合の画像を取得する計算されたプロパティ
    correctAnswerImage() {
      return this.stages[this.currentStageIndex].correctAnswerImage;
    },
    // 問題が不正解だった場合の画像を取得する計算されたプロパティ
    wrongAnswerImage() {
      return this.stages[this.currentStageIndex].wrongAnswerImage;
    },
  },
  methods: {
    checkAnswer(answerIndex) {
      // 選択された選択肢に対応する画像を表示する
      this.currentChoiceImage = this.currentQuestion.choices[answerIndex].image;

      if (this.currentQuestion.correctAnswer.includes(answerIndex)) {
        this.correctAnswers++;
        // 問題が正解だった場合の画像を表示する
        this.currentChoiceImage = null; // 選択肢が表示される画像を消す
      } else {
        this.wrongAnswers++;
        // 問題が不正解だった場合の画像を表示する
        this.currentChoiceImage = null; // 選択肢が表示される画像を消す
      }

      // 一定時間後に次のステージに進むなどの処理を実行する
      setTimeout(() => {
        this.moveToNextStage();
        // 選択肢がクリックされたときの画像をリセットする
        this.currentChoiceImage = null;
      }, 2000); // 2秒後に次のステージに進む
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
      // 選択肢がクリックされたときの画像をリセットする
      this.currentChoiceImage = null;
    },
  },
};
</script>

<style scoped>
.p {
  font-size: 20px;
  font-weight: bold;
}

.image-container {
  text-align: center;
}
</style>
