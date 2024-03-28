<template>
  <div
    class="fixed top-28 h-screen flex flex-col items-center"
    :class="position"
  >
    <div
      v-for="(ad, index) in ads"
      :key="index"
      class="w-36 h-auto bg-white shadow-sm flex justify-center items-center mb-7"
    >
      <img
        :src="ad.src"
        :alt="`Advertisement ${index + 1}`"
        class="max-w-full max-h-full"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Advertisement",
  props: {
    position: {
      type: String,
      validator: function (value) {
        return true;
      },
    },
    ads: {
      type: Array,
      required: true,
    },
  },
};
</script>
