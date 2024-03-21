<template>
    <div class="flex flex-col justify-center h-screen">
      <div class="sm:max-w-full md:w-3/5 mx-auto relative">
        <img :src="startImage" alt="" />
  
        <div class="absolute bottom-3 left-0 right-0 flex justify-center">
          <router-link to="/game">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              ゲームへ進む
            </button>
          </router-link>
        </div>
      </div>
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
  