import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/test',
    component: () => import('../views/elementBack/layout/Layout.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/elementBack/Product.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('../views/frontend/layout/Layout.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/frontend/Home.vue')
      },
      {
        path: 'products',
        component: () => import('../views/frontend/Products.vue')
      },
      {
        path: 'about',
        component: () => import('../views/frontend/About.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/frontend/Product.vue')
      },
      {
        path: 'payment',
        component: () => import('../views/frontend/Payment.vue')
      },
      {
        path: 'login',
        component: () => import('../views/frontend/Login.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/backend/layout/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/backend/Products.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'order',
        component: () => import('../views/backend/Order.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'coupon',
        component: () => import('../views/backend/Coupon.vue'),
        meta: { requiresAuth: true }

      }
    ]
  },
  { path: '/*', redirect: '/' }
]

const router = new VueRouter({
  routes
})

export default router
