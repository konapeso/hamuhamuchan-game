<template>
  <p
    class="invisible md:visible absolute top-28 bg-opacity-80 text-2xl text-orange-950 font-bold"
  >
    ステージ{{ currentStageIndex + 1 }}
  </p>
  <div class="max-w-md w-full relative mt-20 md:mt-0">
    <transition name="fade">
      <div v-if="isVisible" class="question text-center">
        <p class="md:hidden bg-opacity-80 text-lg font-bold text-orange-950">
          ステージ{{ currentStageIndex + 1 }}
        </p>
        <p
          class="bg-orange-50 bg-opacity-80 text-orange-950 text-lg md:text-xl font-bold mb-1 md:mb-3"
        >
          {{ question }}
        </p>
        <ul class="mx-2">
          <li v-for="(choice, index) in choices" :key="index">
            <button
              class="text-yellow-500 border-2 border-yellow-500 font-semibold bg-white hover:bg-yellow-500 hover:text-white opacity-90 py-3 md:py-3 px-4 mb-4 rounded transition-colors duration-300 w-full text-lg md:text-xl"
              @click="$emit('answer', index)"
            >
              {{ choice.text }}
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  emits: ["answer"],
  props: {
    currentStageIndex: Number,
    question: String,
    choices: Array,
    isVisible: Boolean,
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
