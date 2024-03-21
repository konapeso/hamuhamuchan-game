<template>
  <div
    class="flex flex-col items-center justify-center h-screen -mt-56 md:mt-0 lg:mt-0"
  >
    <div>
      <p class="font-bold">ステージ{{ currentStageIndex + 1 }}</p>
    </div>
    <div class="flex justify-center sm:max-w-full md:w-3/5 relative">
      <!-- ステージに応じた質問画像 -->
      <img
        v-if="
          currentQuestionImage && !displayCorrectImage && !displayWrongImage
        "
        :src="currentQuestionImage"
        alt="Question Image"
        class="mx-auto"
      />
      <!-- 問題が正解だった場合の画像 -->
      <img
        v-if="displayCorrectImage"
        :src="correctAnswerImage"
        alt="Correct Image"
        class="mx-auto"
      />
      <!-- 問題が不正解だった場合の画像 -->
      <img
        v-if="displayWrongImage"
        :src="wrongAnswerImage"
        alt="Wrong Image"
        class="mx-auto"
      />
      <!-- ゲームがクリアされた場合の画像 -->
      <img v-if="gameWon" :src="clearImage" alt="Clear Image" class="mx-auto" />
      <Result
        v-if="gameWon || isGameOver"
        :gameOver="isGameOver"
        :gameWon="gameWon"
        @restart="restartGame"
      />
      <Question
        v-if="
          !gameOver &&
          !gameWon &&
          !currentChoiceImage &&
          !displayCorrectImage &&
          !displayWrongImage
        "
        :question="currentQuestion.question"
        :choices="currentQuestion.choices"
        @answer="checkAnswer"
        class="absolute"
      />
    </div>
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
      currentChoiceImage: null,
      questionImages: [
        FirstQuestionImage,
        SecondQuestionImage,
        ThirdQuestionImage,
      ],
      displayCorrectImage: false,
      displayWrongImage: false,
      gameWon: false,
      gameOver: false,
      clearImage: ClearImage,
    };
  },
  computed: {
    currentQuestion() {
      return this.stages[this.currentStageIndex];
    },
    isGameOver() {
      return this.wrongAnswers > 0;
    },
    // 現在のステージに対応する質問画像を取得する計算されたプロパティ
    currentQuestionImage() {
      if (this.gameWon) {
        return null;
      } else if (this.currentChoiceImage) {
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
      this.currentChoiceImage = this.currentQuestion.choices[answerIndex].image;
      const isCorrect =
        this.currentQuestion.correctAnswer.includes(answerIndex);
      setTimeout(() => {
        this.currentChoiceImage = null;
        this.$forceUpdate();
        if (isCorrect) {
          this.displayCorrectImage = true;
          setTimeout(() => {
            this.displayCorrectImage = false;
            if (this.currentStageIndex === 2) {
              this.gameWon = true;
            } else {
              this.moveToNextStage();
            }
          }, 2000);
        } else {
          this.wrongAnswers++;
          this.displayWrongImage = true;
          this.gameOver = true;
        }
      }, 2000);
    },
    moveToNextStage() {
      if (this.currentStageIndex < this.stages.length - 1) {
        this.currentStageIndex++;
        this.currentChoiceImage = null;
      }
    },
    resetImages() {
      this.currentChoiceImage = null;
      this.displayCorrectImage = false;
      this.displayWrongImage = false;
    },
    restartGame() {
      this.currentStageIndex = 0;
      this.correctAnswers = 0;
      this.wrongAnswers = 0;
      this.gameWon = false;
      this.gameOver = false;
      this.resetImages();
    },
  },
};
</script>
