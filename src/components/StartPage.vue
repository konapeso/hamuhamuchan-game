<template>
    <div>
      <h1>ハムハムちゃん！</h1>
      <button @click="startGame">スタート</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      startGame() {
        this.$router.push('/game'); // クイズの画面に遷移
      }
    }
  };
  </script>