import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect : '/botnav/index'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  
  {
    path: '/register',
    name: 'About',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/botnav',
    component: () => import('../views/Botnav.vue'),
    children:[
      {
        path: 'index',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'list',
        component: () => import('../views/List.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/Cart.vue')
      },
      // {
      //   path: 'noLogin',
      //   component: () => import('../views/NoLogin.vue')
      // },
      {
        path: 'mine',
        // meta:{
        //   requireAuth:true
        // },
        component: () => import('../views/Mine.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
