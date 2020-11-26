<template>
  <div class="panelsbox">
    <!-- 左滑动页面 -->
    <cube-scroll class="leftpanels">
      <ul>
        <li
          v-for="(list, index) in tabslabel"
          @click="selectlist(index)"
          :class="list.active ? 'active' : ''"
          :key="index"
        >
          {{ list.label }}
        </li>
      </ul>
    </cube-scroll>
    <!-- 右滑动页面 -->
    <cube-scroll class="rightpanels">
      <ul>
        <li v-for="(tag, index) in tags" :key="index">
          <img :src="tag.image" alt="" />
          <p>
            {{ tag.label }}
            <i class="cubeic-add" @touchstart="addToCart($event, tag)" @touchend='touchend($event)'></i>
          </p>
        </li>
      </ul>
    </cube-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //左页面数据
      tabslabel: [
        {
          label: "热门推荐",
          active: true,
        },
        {
          label: "小米手机",
          active: false,
        },
        {
          label: "华为手机",
          active: false,
        },
        {
          label: "荣耀手机",
          active: false,
        },
        {
          label: "小米手机",
          active: false,
        },
        {
          label: "苹果手机",
          active: false,
        },
        {
          label: "小米手机",
          active: false,
        },
        {
          label: "女装",
          active: false,
        },
        {
          label: "箱包配饰",
          active: false,
        },
        {
          label: "钟表珠宝",
          active: false,
        },
        {
          label: "电脑办公",
          active: false,
        },
        {
          label: "生鲜",
          active: false,
        },
        {
          label: "食品酒饮",
          active: false,
        },
        {
          label: "母婴童装",
          active: false,
        },
        {
          label: "玩具乐器",
          active: false,
        },
        {
          label: "医药保健",
          active: false,
        },
        {
          label: "运动户外",
          active: false,
        },
        {
          label: "汽车生活",
          active: false,
        },
        {
          label: "家居厨具",
          active: false,
        },
        {
          label: "宠物鲜花",
          active: false,
        },
        {
          label: "生活旅行",
          active: false,
        },
      ],
      //右页面数据
      tags: [],
      ball: {
        show: false,
        el: "",
      },
    };
  },
  methods: {
    //点击左侧分类
    selectlist(index) {
      this.tabslabel.forEach((value, ind) => {
        if (index === ind) {
          value.active = true;
        } else {
          value.active = false;
        }
        this.getclassify(index);
      });
    },
    //获取分类数据方法
    async getclassify(index) {
      const result = await this.$http.get("/api/classify", {
        params: { type: index },
      });
      this.tags = result.data;
    },
    //添加商品到购物车
    addToCart(e, tag) {
      this.$store.commit("toCart", tag);
      //添加按钮变色
      e.target.style.color = 'black';
    },
    touchend(e){
      e.target.style.color = '#ff4200'
    }
  },
  created() {
    //获取默认分类数据
    this.getclassify(0);
  },
  mounted() {
    //设置滚动盒子的高度
    const leftpanels = document.querySelector(".leftpanels");
    const rightpanels = document.querySelector(".rightpanels");
    const bodyheight = document.documentElement.clientHeight;
    leftpanels.style.height = bodyheight - 61 + "px";
    rightpanels.style.height = bodyheight - 61 + "px";
  },
};
</script>

<style lang = 'less' scoped>
.panelsbox {
  display: flex;
  .leftpanels {
    width: 30%;
    li {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #e9e9e9;
      color: #333;
      background-color: #f8f8f8;
      font-size: 14px;
      text-align: center;
    }
    .active {
      color: #e93b3d;
      background-color: #ffffff;
    }
  }
  .rightpanels {
    width: 70%;
    text-align: center;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 50%;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        img {
          height: 80px;
          width: 80px;
        }
        .cubeic-add {
          font-size: 18px;
          color: #ff4200;
        }
      }
    }
  }
}
</style>