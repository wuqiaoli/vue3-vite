import Layout from '@/layout/index.vue'
const goodsRouter = {
  path: '/goods',
  component: Layout,
  redirect: '/goods/manage',
  name: '商品管理',
  children: [
    {
      path: 'manage',
      component: () => import('@/views/Goods/manage.vue'), //* 路由懒加载
      meta: { name: "管理商品1" }
    },
    {
      path: 'test',
      component: () => import('@/views/Goods/manage.vue'), //* 路由懒加载
      meta: { name: "管理商品2" }
    },
  ]
}


export default goodsRouter