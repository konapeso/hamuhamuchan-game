<template>
    <div class="image-container">
     <div class="content">
       <h1>ハムハムちゃん！</h1>
       <router-link to="/game">
         <button>スタート</button>
        </router-link>
     </div>
    </div>
  </template>
  
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>


  <div id-"app">
    <img v-bind:src="img" class="background-image" /img>
    </div>
  
  <script>
   new Vue ({
     el: '#app',
     data: {
       img: '../imgs/0-start.png'
     }
   })
  </script>


<style>
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

  h1 {
    font-size: 3em;
    text-align: center;
    /* 仮です */
  }

  button {
   font-size: 2em;
   margin: 0 auto;
   display: block;
  }
</style>
