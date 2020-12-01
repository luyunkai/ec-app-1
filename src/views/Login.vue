<template>
  <div class="login">
    <img
      class="headerImg"
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604414371848&di=e095d72a483717c9c7d13880f3a6d65e&imgtype=0&src=http%3A%2F%2Fshandan.gansu-ec.com%2FUploadFiles%2F75%2F2018-5%2FO131701305206480.jpg"
      alt=""
    />
    <cube-form
      :model="model"
      :schema="schema"
      @submit="submitHandler"
    ></cube-form>
    <p>
      还没账号?<router-link to="/register"><span> 马上注册</span></router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: "",
      },
      schema: {
        fields: [
          //用户名配置
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名",
            },
            rules: {
              required: true,
              type: "string",
              min: 3,
              max: 15,
            },
            trigger: "blur",
            message: {
              required: "用户名不能为空",
              min: "用户名不能小于3个字符",
              max: "用户名不能大于15个字符",
            },
          },
          //密码配置
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "请输入密码",
              type: "password",
              eye: {
                open: false,
              },
            },
            rules: {
              required: true,
            },
            trigger: "blur",
          },
          //提交按钮
          {
            type: "submit",
            label: "登录",
          },
        ],
      },
    };
  },
  methods: {
    async submitHandler(e) {
      e.preventDefault();
      try {
        const result = await this.$http.get("/api/login", {
          params: this.model,
        });
        if (result.code === 0) {
          this.$store.commit("setToken", result.token);
          window.localStorage.setItem("token", result.token);
          this.$router.replace({ path: "/botnav/index" });
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang = 'less' scoped>
.login {
  position: absolute;
  top: 20%;
  p {
    font-size: 14px;
    color: #666;
    text-align: center;
    margin-top: 30px;
    span {
      color: cornflowerblue;
    }
  }
}
.headerImg {
  height: 150px;
  width: 100%;
}
</style>