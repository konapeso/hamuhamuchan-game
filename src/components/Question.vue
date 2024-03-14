<template>
  <div>
    <p>{{ question }}</p>
    <div v-for="(choice, index) in choices" :key="index">
      <button @click="selectAnswer(index)">{{ choice }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['question', 'choices'],
  methods: {
    selectAnswer(answerIndex) {
      this.$emit('answer', answerIndex);
    }
  }
};
</script>