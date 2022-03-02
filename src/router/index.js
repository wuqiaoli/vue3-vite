import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/layout/index.vue'
import homeRouter from "./modules/home.js"
import GoodsRouter from "./modules/goods.js"
//* 普通路由
export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: '首页',
    children: [{
      path: 'home',
      component: () => import('@/views/Home/index.vue'), //* 路由懒加载
      meta: { name: '首页' }
    }]
  },
  GoodsRouter
]
export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHashHistory(),
  routes: constantRouterMap
})

