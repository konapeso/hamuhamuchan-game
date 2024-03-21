<template>
  <header class="mb-auto">
    <nav class="flex items-center justify-between flex-wrap bg-green-200 p-6" @click="goToHome" :style="{ backgroundColor: backgroundColor }">
      <div class="flex items-center flex-shrink-0 text-black mr-6">
        <span class="font-semibold text-xl tracking-tight hover:text-gray-600">{{ title }}</span>
      </div>
    </nav>
  </header>
</template>


<script>
export default {
  name: "Header",
  data() {
    return {
      title: "仁義なきハムハムちゃん",
      backgroundColor: "#D6E5CB" // 初期状態の背景色を指定
    };
  },
  methods: {
    goToHome() {
      // ルーターを使用してホーム画面に遷移
      this.$router.push('/');
      alert("ホーム画面に遷移します");
    }
  }
};
</script>




  







