<template>
  <div class="button-container">
    <h1>ハムハムちゃん！</h1>
    <router-link to="/game">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        スタート
      </button>
    </router-link>
  </div>
</template>

<!-- <script>
new Vue({
  el: "#app",
  data: {
    img: "../imgs/0-start.png",
  },
});
</script> -->

<style scoped>
h1 {
  font-size: 3em;
  text-align: center;
  /* 仮です */
}

.image-container {
  position: relative;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.button-container {
  display: flex;
  justify-content: center;
}
</style>
