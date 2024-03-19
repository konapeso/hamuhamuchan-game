<template>
  <div class="mt-20 flex flex-col items-center">
    <p>{{ question }}</p>
    <div v-for="(choice, index) in choices" :key="index">
      <button
        @click="selectAnswer(index)"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded"
      >
        {{ choice.text }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["question", "choices"],
  methods: {
    selectAnswer(answerIndex) {
      this.$emit("answer", answerIndex);
    },
  },
};
</script>
