<template>
  <div>
    <router-view />
    <cube-tab-bar
      class="botnav"
      v-model="selectedLabelDefault"
      :data="tabs"
      @change="changeHandler"
    >
    </cube-tab-bar>
    <span class="countsum">{{countsum}}</span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      transitionName: "slide-right",
      selectedLabelDefault: "首页",
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home",
        },
        {
          label: "分类",
          icon: "cubeic-tag",
        },
        {
          label: "购物车",
          icon: "cubeic-mall",
        },
        {
          label: "我的",
          icon: "cubeic-person",
        },
      ],
    };
  },
  methods: {
  
    changeHandler(label) {
      // if you clicked different tab, this methods can be emitted
      switch (label) {
        case "首页":
          this.$router.push({ path: "/botnav/index" });
          break;
        case "分类":
          this.$router.push({ path: "/botnav/list" });
          break;
        case "购物车":
          this.$router.push({ path: "/botnav/cart" });
          break;
        case "我的":
          this.$router.push({ path: "/botnav/mine" });
          break;
      }
    },
  },
  computed:{
    ...mapGetters({
      countsum:'countsum'
    })
  },
  created(){
    switch (this.$route.path) {
      case '/botnav/index':
      this.selectedLabelDefault = '首页';
      break;
      case '/botnav/list':
      this.selectedLabelDefault = '分类';
      break;
      case '/botnav/search':
      this.selectedLabelDefault = '搜索';
      break;
      case '/botnav/cart':
      this.selectedLabelDefault = '购物车';
      break;
      case '/botnav/mine':
      this.selectedLabelDefault = '我的';
      break;
    }
  }
};
</script>

<style lang='less' >
.cube-tab-bar.botnav {
  background-color: rgb(245, 245, 245);
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  border-top: 1px solid rgb(231, 231, 231);
  .cube-tab {
    div {
      font-size: 16px;
      margin-top: 5px;
    }
  }
  
}
.countsum{
    position: fixed;
    bottom: 6%;
    right: 29%;
    z-index: 101;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    line-height: 18px;
    font-size: 14px;
    background-color:red;
    color: white;
    text-align: center;
  }
</style>