<template>
  <header class="mb-auto">
    <nav
      class="fixed top-0 left-0 w-full z-10 bg-green-200 p-6"
      :style="{ backgroundColor: backgroundColor }"
    >
      <router-link
        to="/"
        class="flex items-center flex-shrink-0 text-gray-800 mr-6"
      >
        <span
          class="font-semibold text-xl tracking-tight hover:text-gray-600"
          >{{ title }}</span
        >
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      title: "仁義なきハムハムちゃん",
      backgroundColor: "#D6E5CB", // 初期状態の背景色を指定
    };
  },
};
</script>
