<template>
  <div>
    <div v-if="correct">
      <p>クリア！</p>
    </div>
    <div v-else>
      <p>残念！</p>
    </div>
    <button @click="restart">再スタート</button>
  </div>
</template>

<script>
export default {
  props: {
    correct: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    restart() {
      this.$emit('restart');
    }
  }
};
</script>