<template>
  <div class="button-container">
    <h1>ハムハムちゃん！</h1>
    <div>
      <img :src="startImage" alt="スタート！" />
    </div>
    <router-link to="/game">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        スタート
      </button>
    </router-link>
  </div>
</template>

<script>
import startImage from "@/assets/images/0-start.png";
export default {
  data() {
    return {
      startImage: startImage,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 3em;
  text-align: center;
  /* 仮です */
}
</style>
