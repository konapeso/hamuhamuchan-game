<template>
    <div class="image-container">
      <img  class="background-image" src="src/imgs/0-start.png" alt="" />
     <div class="content">
       <h1>ハムハムちゃん！</h1>
       <router-link to="/game">
         <button>スタート</button>
        </router-link>
     </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      
    }
  };
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
