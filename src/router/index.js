import { createRouter, createWebHistory } from "vue-router";
import Game from "@/components/Game.vue"; // ゲームコンポーネントのパスを適切に設定する

const routes = [
  {
    path: "/",
    name: "Game",
    component: Game,
  },
  // 他のルートを必要に応じて追加
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
