<template>
  <div id="app">
    <Header /> <!-- ヘッダーコンポーネントを追加 -->
    <router-view /> <!-- ルーティングされたコンポーネントを表示 -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue'; // Header コンポーネントをインポート

export default {
  name: 'App',
  components: {
    Header // コンポーネントを登録
  }
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

      
  




