<template>
  <div class="mt-20 flex flex-col items-center">
    <!-- 使用する要素にtransitionを追加 -->
    <transition name="fade">
      <p class="text-xl font-bold mb-3" v-if="showQuestion">{{ question }}</p>
    </transition>
    <transition-group name="fade">
      <!-- choices を直接表示せずに、条件に応じて遅延表示する -->
      <div v-if="showChoices" class="w-full flex flex-col items-center">
        <button
          v-for="(choice, index) in choices"
          :key="index"
          @click="selectAnswer(index)"
          class="bg-blue-500 hover:bg-blue-700 opacity-80 text-white font-bold py-2 px-4 mb-3 rounded"
        >
          {{ choice.text }}
        </button>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ["question", "choices"],
  data() {
    return {
      showQuestion: false,
      showChoices: false,
    };
  },
  methods: {
    selectAnswer(answerIndex) {
      this.$emit("answer", answerIndex);
    },
  },
  mounted() {
    // マウントされたときに遅延して質問を表示
    setTimeout(() => {
      this.showQuestion = true;
    }, 100); // 1000ミリ秒（1秒）の遅延
    // マウントされたときに遅延して選択肢を表示
    setTimeout(() => {
      this.showChoices = true;
    }, 1500); // 2000ミリ秒（2秒）の遅延
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
