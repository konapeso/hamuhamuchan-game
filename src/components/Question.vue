<template>
  <div class="mt-10 md:mt-18 lg:mt-20 flex flex-col items-center">
    <transition name="fade">
      <p class="text-lg md:text-xl font-bold mb-1 md:mb-3" v-if="showQuestion">
        {{ question }}
      </p>
    </transition>
    <transition-group name="fade">
      <div v-if="showChoices" class="w-full flex flex-col items-center">
        <button
          v-for="(choice, index) in choices"
          :key="index"
          @click="selectAnswer(index)"
          class="bg-blue-500 hover:bg-blue-700 opacity-80 text-white font-bold py-1 md:py-2 px-4 mb-2 md:mb-3 rounded"
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
    setTimeout(() => {
      this.showQuestion = true;
    }, 1000);
    setTimeout(() => {
      this.showChoices = true;
    }, 2000);
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
