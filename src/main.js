import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import axios from 'axios'
import setAxios from './setAxios.js'
setAxios()
Vue.config.productionTip = false
Vue.prototype.$http = axios
//路由守卫
// router.beforeEach((to,from,next)=>{
//   store.commit('setToken',localStorage.getItem('token'))
//   if (to.meta.requireAuth) {
//     if (store.state.token) {
//       next()
//     }else{
//       next({
//         path:'/botnav/noLogin',
//         query:{redirect:to.fullPath}
//       })
//     }
//   }else{
//     next()
//   }
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
