<template>
  <div class="register">
    <img class="headerImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604414371848&di=e095d72a483717c9c7d13880f3a6d65e&imgtype=0&src=http%3A%2F%2Fshandan.gansu-ec.com%2FUploadFiles%2F75%2F2018-5%2FO131701305206480.jpg" alt="" />
    <cube-form
      :model="model"
      :schema="schema"
      @submit="submitHandler"
    ></cube-form>
    <p>已有账号?<router-link to="/login"><span> 立即登录</span></router-link></p>
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
              type: "string",
              min: 3,
              max: 15,
            },
            trigger: "blur",
            message: {
              required: "密码不能为空",
              min: "密码不能小于3个字符",
              max: "密码不能大于15个字符",
            }
          },
          //提交按钮
          {
            type: "submit",
            label: "注册",
          },
        ],
      },
    };
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      this.$http
        .get("/api/register", {
          params: this.model,
        })
        .then((res) => {
          console.log(res.success);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang = 'less' scoped>
.register{
  position: absolute;
  top: 20%;
  p{
    font-size: 14px;
    color: #666;
    text-align: center;
    margin-top: 30px;
    span{
      color: cornflowerblue;
    }
  }
}
.headerImg {
  height: 150px;
  width: 100%;
}
</style>