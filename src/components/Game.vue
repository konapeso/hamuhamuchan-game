<!-- src/components/Game.vue -->
<template>
  <div>
    <p>ハムハムちゃん！</p>
    <p class="bold">ステージ{{ currentStageIndex + 1 }}</p>
    <div class="image-container">
      <!-- ステージに応じた質問画像 -->
      <img
        v-if="
          currentQuestionImage && !displayCorrectImage && !displayWrongImage
        "
        :src="currentQuestionImage"
        alt="Question Image"
      />
      <!-- 選択肢がクリックされたときに表示される画像 -->
      <!-- <img
        v-if="currentChoiceImage"
        :src="currentChoiceImage"
        alt="Choice Image"
      /> -->
      <!-- 問題が正解だった場合の画像 -->
      <img
        v-if="displayCorrectImage"
        :src="correctAnswerImage"
        alt="Correct Image"
      />
      <!-- 問題が不正解だった場合の画像 -->
      <img v-if="displayWrongImage" :src="wrongAnswerImage" alt="Wrong Image" />
    </div>

    <Question
      v-if="!gameOver && !gameWon && !currentChoiceImage"
      :question="currentQuestion.question"
      :choices="currentQuestion.choices"
      @answer="checkAnswer"
    />
    <Result
      v-else-if="(gameOver || gameWon) && !currentChoiceImage"
      :gameOver="gameOver"
      :gameWon="gameWon"
      @restart="restartGame"
    />
  </div>
</template>

<script>
import Question from "./Question.vue";
import Result from "./Result.vue";

import FirstClearImage from "@/assets/images/1st-won.png";
import FirstQuestionImage from "@/assets/images/1st-q.png";
import SecondClearImage from "@/assets/images/2nd-won.png";
import SecondQuestionImage from "@/assets/images/2nd-q.png";
import ThirdClearImage from "@/assets/images/3rd-won.png";
import ThirdQuestionImage from "@/assets/images/3rd-q.png";
import ClearImage from "@/assets/images/clear.png";
import FailImage from "@/assets/images/fail2.png";
import FirstRImage from "@/assets/images/1st-r-1.png";
import FirstSImage from "@/assets/images/1st-s-1.png";
import FirstTImage from "@/assets/images/1st-t-1.png";
import FirstUImage from "@/assets/images/1st-u-1.png";
import SecondTImage from "@/assets/images/2nd-t-1.png";
import SecondUImage from "@/assets/images/2nd-u-1.png";
import ThirdSImage from "@/assets/images/3rd-s-1.png";
import ThirdTImage from "@/assets/images/3rd-t-1.png";
import ThirdUImage from "@/assets/images/3rd-u-1.png";

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
              image: FirstRImage,
            },
            {
              text: "突撃する",
              image: FirstSImage,
            },
            {
              text: "「乗りたいんですけど〜」と言う",
              image: FirstTImage,
            },
            {
              text: "ため息をつく",
              image: FirstUImage,
            },
          ],
          correctAnswer: [0, 1, 2],
          correctAnswerImage: FirstClearImage,
          wrongAnswerImage: FailImage,
        },
        {
          question: "エレベーターに乗るにはどうすれば！？",
          choices: [
            {
              text: "「小声ですみませんと言う」",
              image: SecondUImage,
            },
            {
              text: "「あの、15分ぐらい見送ってまして、、」と言う",
              image: SecondUImage,
            },
            {
              text: "舌打ちする",
              image: SecondTImage,
            },
            {
              text: "譲ってもらえるまで待ってみる",
              image: SecondUImage,
            },
          ],
          correctAnswer: [0, 1],
          correctAnswerImage: SecondClearImage,
          wrongAnswerImage: FailImage,
        },
        {
          question: "エレベーターに乗るにはどうすれば！？",
          choices: [
            {
              text: "「歩ける方、時間に余裕のある方はエスカレーターで行ってもらえませんか？」と言う",
              image: ThirdSImage,
            },
            {
              text: "「外国ではみんな譲ってくれるんだけどな〜」と大きな独り言を言う",
              image: ThirdSImage,
            },
            {
              text: "仁義を切る",
              image: ThirdTImage,
            },
            {
              text: "「あ、UFOだ！」と言う",
              image: ThirdUImage,
            },
          ],
          correctAnswer: [0],
          correctAnswerImage: ThirdClearImage,
          wrongAnswerImage: FailImage,
        },
      ],
      currentStageIndex: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      // 選択肢がクリックされたときに表示される画像を保持するプロパティ
      currentChoiceImage: null,
      // 各ステージの質問画像を追加
      questionImages: [
        FirstQuestionImage,
        SecondQuestionImage,
        ThirdQuestionImage,
      ],
      // 正解不正解画像を表示するためのフラグを追加
      displayCorrectImage: false,
      displayWrongImage: false,
    };
  },
  computed: {
    currentQuestion() {
      // currentStageIndex が stages 配列の最後の要素を超えている場合は gameWon を返す
      if (this.currentStageIndex >= this.stages.length) {
        return {
          gameWon: true,
        };
      } else {
        return this.stages[this.currentStageIndex];
      }
    },
    gameOver() {
      return this.wrongAnswers > 0;
    },
    gameWon() {
      return this.correctAnswers === this.stages.length;
    },
    // 現在のステージに対応する質問画像を取得する計算されたプロパティ
    currentQuestionImage() {
      if (this.currentChoiceImage) {
        return this.currentChoiceImage;
      } else {
        return this.questionImages[this.currentStageIndex];
      }
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

      const isCorrect =
        this.currentQuestion.correctAnswer.includes(answerIndex);

      // 選択肢画像を2秒間表示する
      setTimeout(() => {
        this.currentChoiceImage = null;
        this.$forceUpdate(); // コンポーネントを強制的に再描画する

        if (isCorrect) {
          // 正解画像を2秒間表示する
          this.displayCorrectImage = true;
          setTimeout(() => {
            this.displayCorrectImage = false;
            this.moveToNextStage();
          }, 2000);
        } else {
          this.wrongAnswers++;
          this.displayWrongImage = true;
        }
      }, 2000);
    },
    moveToNextStage() {
      if (this.currentStageIndex < this.stages.length - 1) {
        this.currentStageIndex++;
        // 次のステージに進む前に、currentChoiceImageをクリアする
        this.currentChoiceImage = null;
      }
    },
    resetImages() {
      // 画像をリセットする
      this.currentChoiceImage = null;
      this.displayCorrectImage = false;
      this.displayWrongImage = false;
    },
    restartGame() {
      this.currentStageIndex = 0;
      this.correctAnswers = 0;
      this.wrongAnswers = 0;
      // 画像をリセットする
      this.resetImages();
    },
  },
};
</script>
