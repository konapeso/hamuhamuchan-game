<template>
  <div class="flex flex-col justify-center h-screen -mt-54 md:mt-0 lg:mt-0">
    <div class="sm:max-w-full md:w-3/5 mx-auto relative">
      <img :src="startImage" alt="スタート！" />

      <div class="absolute bottom-3 left-0 right-0 flex justify-center">
        <router-link to="/introduction">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            スタート
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import startImage from "@/assets/images/0-start-min.png";
export default {
  data() {
    return {
      startImage: startImage,
    };
  },
};
</script>
