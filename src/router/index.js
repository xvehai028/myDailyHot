//import { createRouter, createWebHashHistory } from "vue-router";
import { createRouter, createWebHistory } from 'vue-router';
import routes from "@/router/routes";

const router = createRouter({
  //history: createWebHashHistory(),//哈希路由
  history: createWebHistory(process.env.BASE_URL), // 使用history模式
  routes,
});

// 路由守卫
router.beforeEach(() => {
  $loadingBar.start();
});

router.afterEach(() => {
  $loadingBar.finish();
});

export default router;
