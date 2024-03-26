<template>
  <ImageFrame>
    <img :src="startImage" alt="スタート！" />

    <div class="absolute bottom-3 left-0 right-0 flex justify-center">
      <button
        @click="$emit('start')"
        class="text-yellow-500 border-2 border-yellow-500 font-semibold bg-white hover:bg-yellow-500 hover:text-white py-2 px-6 mb-3 rounded transition-colors duration-300"
      >
        スタート
      </button>
    </div>
  </ImageFrame>
</template>
<script>
import ImageFrame from "@/components/ImageFrame.vue";
import startImage from "@/assets/images/0-start-min.png";
export default {
  name: "Start",
  emits: ["start"],
  components: {
    ImageFrame,
  },
  data() {
    return {
      startImage: startImage,
    };
  },
};
</script>
