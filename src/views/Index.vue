<template>
  <div class="index">
    <!-- 轮播图 -->
    <cube-slide ref="slide" :data="items">
      <cube-slide-item
        v-for="(item, index) in items"
        :key="index"
        @click.native="clickHandler(item, index)"
      >
        <a :href="item.url">
          <img class="banner" :src="item.image" />
        </a>
      </cube-slide-item>
    </cube-slide>
    <!-- 滚动分类 -->
    <cube-slide :auto-play="false" ref="slidelists" :data="lists">
      <cube-slide-item v-for="(list, index) in lists" :key="index">
        <ul class="listUl">
          <li class="listLi" v-for="(item, index) in list" :key="index">
            <a :href="item.url">
              <img :src="item.image" alt="" />
              <p>{{ item.label }}</p>
            </a>
          </li>
        </ul>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [], //轮播图数组
      lists: [], //滚动分类数组
    };
  },

  async created() {
    try {
      //获取轮播图数据
      const items = await this.$http.get("/api/banner");
      this.items = items.data;
      //获取滚动分类数据
      const lists = await this.$http.get("/api/rollinglist");
      this.lists = lists.data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style lang = 'less' scoped>
.banner {
  width: 100%;
  height: 175px;
}
.listUl {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  .listLi {
    width: 20%;
    display: flex;
    justify-content: center;
    a {
      text-align: center;
      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        padding: 5px 0;
      }
      p {
        font-size: 14px;
        padding-bottom: 10px;
      }
    }
  }
}
</style>