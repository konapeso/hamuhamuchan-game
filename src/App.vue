<template>
  <Header />
  <div class="flex flex-col items-center justify-center h-screen">
    <Start v-if="showStart" @start="handleStart" />
    <Introduction v-if="showIntroduction" @proceed="startGame" />
    <Game
      v-else-if="showGame"
      :currentStageIndex="currentStageIndex"
      :currentQuestion="currentQuestion"
      :questionImages="questionImages"
      @answer="checkAnswer"
      @next="moveToNextStage"
      @gameWon="handleGameWon"
      @gameOver="handleGameOver"
    />
    <Result
      v-if="gameWon || gameOver"
      :gameWon="gameWon"
      :isGameOver="gameOver"
      @restart="restartGame"
    />
  </div>
  <Footer v-if="isMobileScreen" />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Start from "@/components/Start.vue";
import Introduction from "@/components/Introduction.vue";
import Game from "@/components/Game.vue";
import Result from "@/components/Result.vue";

import FirstClearImage from "@/assets/images/1st-won-min.png";
import FirstQuestionImage from "@/assets/images/1st-q-min.png";
import SecondClearImage from "@/assets/images/2nd-won-min.png";
import SecondQuestionImage from "@/assets/images/2nd-q-min.png";
import ThirdClearImage from "@/assets/images/3rd-won-min.png";
import ThirdQuestionImage from "@/assets/images/3rd-q-min.png";
import ClearImage from "@/assets/images/clear-min.png";
import FailImage from "@/assets/images/fail2-min.png";
import FirstRImage from "@/assets/images/1st-r-1-min.png";
import FirstSImage from "@/assets/images/1st-s-1-min.png";
import FirstTImage from "@/assets/images/1st-t-1-min.png";
import FirstUImage from "@/assets/images/1st-u-1-min.png";
import SecondTImage from "@/assets/images/2nd-t-1-min.png";
import SecondUImage from "@/assets/images/2nd-u-1-min.png";
import ThirdSImage from "@/assets/images/3rd-s-1-min.png";
import ThirdTImage from "@/assets/images/3rd-t-1-min.png";
import ThirdUImage from "@/assets/images/3rd-u-1-min.png";

const STAGES = [
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
        text: "小声で「すみません」と言う",
        image: FirstTImage,
      },
      {
        text: "「あの、15分ぐらい見送ってまして、、」と言う",
        image: FirstTImage,
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
        image: FirstTImage,
      },
      {
        text: "「外国ではみんな譲ってくれるんだけどな〜」と大きな独り言を言う",
        image: ThirdUImage,
      },
      {
        text: "仁義を切る",
        image: ThirdSImage,
      },
      {
        text: "「あ、UFOだ！」と言う",
        image: ThirdTImage,
      },
    ],
    correctAnswer: [0],
    correctAnswerImage: ThirdClearImage,
    wrongAnswerImage: FailImage,
  },
];

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Start,
    Introduction,
    Game,
    Result,
  },
  data() {
    return {
      showStart: true,
      showIntroduction: false,
      showGame: false,
      stages: STAGES,
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
      isMobileScreen: false,
    };
  },
  computed: {
    currentQuestion() {
      return this.stages[this.currentStageIndex];
    },
  },
  methods: {
    handleStart() {
      this.showStart = false;
      this.showIntroduction = true;
    },
    handleGameWon() {
      this.showGame = false;
      this.gameWon = true;
    },
    handleGameOver() {
      this.showGame = false;
      this.gameOver = true;
    },
    startGame() {
      this.showStart = false;
      this.showIntroduction = false;
      setTimeout(() => {
        this.showGame = true;
      }, 500);
    },
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
    restartGame() {
      this.showStart = true;
      this.showIntroduction = false;
      this.currentStageIndex = 0;
      this.correctAnswers = 0;
      this.wrongAnswers = 0;
      this.gameWon = false;
      this.gameOver = false;
    },
  },
  mounted() {
    // スマートフォン画面かどうかをチェックする
    this.isMobileScreen = window.matchMedia("(max-width: 767px)").matches;
    // ウィンドウのサイズが変更された場合に再度チェックする
    window.addEventListener("resize", () => {
      this.isMobileScreen = window.matchMedia("(max-width: 767px)").matches;
    });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #fdf5df;
}
</style>
