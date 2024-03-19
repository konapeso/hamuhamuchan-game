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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #fdf5df;
}
</style>
