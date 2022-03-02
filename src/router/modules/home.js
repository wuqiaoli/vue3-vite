import Layout from '@/layout/index.vue'
const homeRouter = {
  path: '/',
  component: Layout,
  children: [
    {
      path: 'home',
      component: () => import('@/views/Home/index.vue'), //* 路由懒加载
      meta: { name: " 首页" }
    },
  ]
}


export default homeRouter