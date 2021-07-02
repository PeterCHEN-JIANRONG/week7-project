import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        name: '首頁',
        component: () => import('../views/Index.vue'),
      },
      {
        path: 'products',
        name: '產品列表',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'product/:id',
        name: '產品詳細頁',
        component: () => import('../views/Product.vue'),
        props: (route) => ({
          id: route.params.id,
        }),
      },
      {
        path: 'carts',
        name: '購物車',
        component: () => import('../views/Carts.vue'),
      },
      {
        path: 'about',
        name: '關於我們',
        component: () => import('../views/About.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: '後台登入',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: '產品管理頁',
        component: () => import('../views/Dashboard/Products.vue'),
      },
      {
        path: 'orders',
        name: '訂單管理頁',
        component: () => import('../views/Dashboard/Orders.vue'),
      },
      {
        path: 'coupons',
        name: '優惠券',
        component: () => import('../views/Dashboard/Coupons.vue'),
      },
      {
        path: 'articles',
        name: '貼文',
        component: () => import('../views/Dashboard/Articles.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404頁',
    component: import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
