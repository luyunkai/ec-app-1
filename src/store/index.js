import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let Store = new Vuex.Store({
  state: {
    token:'',
    cartArry:JSON.parse(localStorage.getItem('cartArry')) || [] //存储购物车商品的数组
  },
  mutations: {
    //设置Vuex的token
    setToken(state,token){
      state.token = token
    },
    toCart(state,tag){
      let goods = state.cartArry.find(v=>v.title === tag.label)
      if (goods) {
        goods.cartCount += 1
      }else{
        state.cartArry.push({title:tag.label,cartCount:1})
      }
    },
    //购物车商品数量加1
    cartAdd(state,index){
      state.cartArry[index].cartCount++
    },
    //购物车商品数量减1
    cartRemove(state,index){
      if (state.cartArry[index].cartCount>1) {
        state.cartArry[index].cartCount--
      }else{
        if (window.confirm('确定移除商品?')) {
          state.cartArry.splice(index,1)
        }
      }
    },
    //清空购物车
    clearCart(state){
      if (state.cartArry.length>0) {
        if (window.confirm('确定清空购物车?')) {
          state.cartArry = []
        }
      }else{
        window.alert('没东西清空啥')
      }
    },
    //下单
    buy(state){
      if (state.cartArry.length===0) {
        window.alert('购物车里没东西')
      }else{
        window.alert('没钱')
      }
    }
  },
  actions: {
  },
  getters: {
    countsum:state=>{
      let num = 0
      state.cartArry.forEach(v=>{
        num+=v.cartCount
      })
      return num
    }
  }
})
//监听每次调用mutations都会进入这个方法
Store.subscribe((mutations,state)=>{
  localStorage.setItem('cartArry',JSON.stringify(state.cartArry))
})
export default Store
