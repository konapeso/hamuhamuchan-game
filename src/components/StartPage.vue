<template>
    <div class="button-container">
      <h1>ハムハムちゃん！</h1>
      <router-link to="/game">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          スタート
        </button>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      
    }
  };
  </script>
  <style scoped>
  .button-container {
    display: flex;
    justify-content: center;
  }
  </style>