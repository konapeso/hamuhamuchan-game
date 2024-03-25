<template>
  <!-- 追加した文章 -->
  <p class="text-center text-lg mb-3 mt-6">
    車椅子ユーザーのハムハムちゃん。<br />
    ショッピングモールで上の階にいきたいけど、<br />
    来るエレベーターはどれも満員。<br />
    ドアが開いて車椅子のハムハムちゃんを見ても、<br />
    みんな知らん顔で、乗ることができません。<br />
    <br />
    満員のエレベーターに車椅子でどうやって入るのか！？<br />
    ４つの選択肢の中から一つを選んで、<br />
    余裕のある人に譲ってもらおう。<br />
    適切な声かけで、エレベーターに乗れたらクリア。<br />
    <br />
    戦略やコミュニケーション力が問われる、<br />
    ハムハムちゃんvs満員エレベータの対戦型ブラウザゲームです。<br />
  </p>
  <div class="text-center">
    <button
      @click="$emit('proceed')"
      class="text-yellow-500 border-2 border-yellow-500 font-semibold bg-white hover:bg-yellow-500 hover:text-white py-2 px-6 mb-3 rounded transition-colors duration-300"
    >
      進む
    </button>
  </div>
</template>

<script>
import IntroductionImage from "@/assets/images/1st-1-min.png";
export default {
  name: "Introduction",
  emits: ["proceed"],
  data() {
    return {
      IntroductionImage: IntroductionImage,
    };
  },
};
</script>
