<template>
  <div class="mine">
    <img
      class="headerImg"
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604414371848&di=e095d72a483717c9c7d13880f3a6d65e&imgtype=0&src=http%3A%2F%2Fshandan.gansu-ec.com%2FUploadFiles%2F75%2F2018-5%2FO131701305206480.jpg"
      alt=""
    />
    <ul>
      <li
        v-for="item in mineArry"
        class="mine-item"
        @click="itemclick(item)"
        :key="item.label"
      >
        <span class="mine-title">{{ item.label }}</span>
        <i class="cubeic-arrow"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mineArry: [
        { label: "商品收藏" },
        { label: "我的足迹" },
        { label: "店铺收藏" },
        { label: "我的订单" },
        { label: "退出", type: "exit" },
      ],
    };
  },
  methods: {
    itemclick(item) {
      if (item.type === "exit") {
        if (window.confirm("确定退出登录?")) {
          this.$store.commit("setToken", "");
          localStorage.removeItem("token");
          this.$router.push({ path: "/login" });
        }
      }
    },
  },
};
</script>

<style lang = 'less' scoped>
.mine {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
}
.headerImg {
  height: 150px;
  width: 100%;
  margin-bottom: 15%;
}
.mine-item {
  color: #666;
  font-size: 14px;
  text-align: left;
  height: 50px;
  line-height: 50px;
  padding-left: 5%;
  border-bottom: 1px solid #eee;
  .mine-title {
    display: inline-block;
    width: 90%;
    font-weight: 700;
    font-family: 'SimSun';
  }
}
</style>