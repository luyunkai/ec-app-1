<template>
  <div>
    <div class="cartHeader" v-show="this.isKong">
      空 的
    </div>
    <div class="goods" v-for="(item, index) in cartArr" :key="index">
      {{ item.title }}
      <div class="goodsRight">
        <i class="cubeic-remove" @click="removeCart(index)"></i>
        <span>{{ item.cartCount }}</span>
        <i class="cubeic-add" @click="addCart(index)"></i>
      </div>
    </div>
    <div class="operation">
      <cube-button class="buy" @click="buy">下单</cube-button>
      <cube-button @click="clearCart">清空购物车</cube-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      cartArr: (state) => state.cartArry,
    }),
    isKong(){
      const stock = JSON.parse(localStorage.getItem('cartArry'))
      if (stock.length > 0) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    //减少商品
    removeCart(index) {
      this.$store.commit("cartRemove", index);
    },
    //增加商品
    addCart(index) {
      this.$store.commit("cartAdd", index);
    },
    //清空购物车
    clearCart() {
      this.$store.commit("clearCart");
    },
    //下单
    buy() {
      this.$store.commit("buy");
    },
  },
};
</script>

<style lang = 'less' scoped>
.cartHeader{
  font-family: 'SimSun';
  text-align: center;
  margin-top: 50%;
  color: #999;
  font-size: 50px;
}
.goods {
  padding: 10px;
  text-align: left;
  .goodsRight {
    float: right;
  }
  i {
    font-size: 18px;
    margin: 0 10px;
  }
}
.operation {
  width: 100%;
  position: fixed;
  bottom: 11%;
  .buy {
    margin: 10px 0;
  }
}
</style>