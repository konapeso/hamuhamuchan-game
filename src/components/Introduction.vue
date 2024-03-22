<template>
  <div class="flex flex-col justify-center h-screen">
    <div class="sm:max-w-full md:w-3/5 mx-auto relative">
      <img
        :src="IntroductionImage"
        alt="ゲーム背景"
        class="w-full max-w-xs mx-auto"
      />

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
        <router-link to="/game">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            進む
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import IntroductionImage from "@/assets/images/1st-1-min.png";
export default {
  data() {
    return {
      IntroductionImage: IntroductionImage,
    };
  },
};
</script>
