<template>
  <ImageFrame>
    <img :src="introductionImage" alt="説明文" />
    <div
      class="absolute inset-0 flex flex-col flex-start md:justify-center items-center mx-2"
    >
      <p
        class="bg-orange-50 bg-opacity-80 text-center text-orange-950 text-lg font-semibold leading-8 md:leading-9 tracking-wide mb-3 mt-6 fade-in whitespace-pre-line"
        v-show="!showSecondPart"
      >
        {{ introductionTextPart1 }}
      </p>
      <p
        class="bg-orange-50 bg-opacity-80 text-center text-orange-950 text-lg font-semibold leading-8 md:leading-9 tracking-wide mb-3 mt-6 fade-in whitespace-pre-line"
        v-show="showSecondPart"
      >
        {{ introductionTextPart2 }}
      </p>
      <div class="text-center">
        <button
          v-if="!showSecondPart"
          @click="showSecondPart = true"
          class="text-yellow-500 border-2 border-yellow-500 font-semibold bg-white hover:bg-yellow-500 hover:text-white py-2 px-6 mb-3 rounded transition-colors duration-300"
        >
          次へ
        </button>
        <button
          v-else
          @click="$emit('proceed')"
          class="text-yellow-500 border-2 border-yellow-500 font-semibold bg-white hover:bg-yellow-500 hover:text-white py-2 px-6 mb-3 rounded transition-colors duration-300"
        >
          進む
        </button>
      </div>
    </div>
  </ImageFrame>
</template>

<script>
import ImageFrame from "./ImageFrame.vue";
import IntroductionImage from "../assets/images/1st-1-min.png";

export default {
  data() {
    return {
      introductionTextPart1: `車椅子ユーザーのハムハムちゃん。
ショッピングモールで上の階にいきたいけど、
来るエレベーターはどれも満員。
ドアが開いて車椅子のハムハムちゃんを見ても、
みんな知らん顔で、乗ることができません。`,
      introductionTextPart2: `満員のエレベーターに車椅子でどうやって入るのか！？
４つの選択肢の中から一つを選んで、
余裕のある人に譲ってもらおう。
適切な声かけで、エレベーターに乗れたらクリア。

戦略やコミュニケーション力が問われる、
ハムハムちゃんvs満員エレベータの対戦型ブラウザゲームです。`,
      showSecondPart: false,

      introductionImage: IntroductionImage,
    };
  },
  components: {
    ImageFrame,
  },
};
</script>

<style>
.fade-in {
  animation: fadeIn 1.5s ease;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
