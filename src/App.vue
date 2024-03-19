<template>
  <div id="app">
    <router-view />
    <!-- ルーティングされたコンポーネントを表示 -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  background-color: #FDF5DF; /* ここで背景色を指定 */
  /* 他のスタイルも必要であればここに記述 */
}
</style>
