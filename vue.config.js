module.exports = {
  configureWebpack: {
    devServer: {
      //Mock接口
      //每次更改数据都要重启serve才能生效
      before(app) {
        //用户信息池
        let userPoor = [
          {
            username: "xiaoming",
            password: "123456",
          },
          {
            username: "xiaohong",
            password: "123456",
          },
        ];
        //注册接口
        app.get("/api/register", (req, res) => {
          const { username, password } = req.query;
          const userLength = userPoor.filter((v) => v.username === username)
            .length;
          if (userLength > 0) {
            res.json({
              success: false,
              message: "用户名已存在",
            });
          } else {
            res.json({
              success: true,
              message: "注册成功",
            });
          }
        });
        //登录接口
        let tokenKey = "ykclass";
        app.get("/api/login", (req, res) => {
          const { username, password } = req.query;
          if (
            (username === "xiaoming" && password === "123456") ||
            (username === "xiaohong" && password === "123456")
          ) {
            res.json({
              code: 0,
              message: "登录成功",
              token:
                tokenKey +
                "-" +
                username +
                "-" +
                (new Date().getTime() + 60 * 60 * 1800),
            });
          } else {
            res.json({
              code: 1,
              message: "账号或密码错误",
            });
          }
        });
        //首页轮播图数据接口
        app.get("/api/banner", (req, res) => {
          res.json({
            data: [
              {
                url: "#",
                image:
                  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605623397651&di=917083c7ddefbefcd89709130d58688a&imgtype=0&src=http%3A%2F%2Fmp.ofweek.com%2Fdata%2Fimages%2Fit168%2F2020-04-19%2F4715f2b9789434b2d35b9e23ba48f5cd.jpg",
              },
              {
                url: "#",
                image:
                  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604568246481&di=b3cca8f390e3904643203dc266f37c50&imgtype=0&src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-436341076-248AE154DC27AFE0C4F46F789BC4E036%2F0%3Ffmt%3Djpg%26amp%3Bsize%3D29%26amp%3Bh%3D506%26amp%3Bw%3D900%26amp%3Bppv%3D1",
              },
              {
                url: "#",
                image:
                  "https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/forum/pic/item/5ab5c9ea15ce36d3dd608c672df33a87e950b104.jpg",
              },
            ],
          });
        });
        //滚动分类接口
        app.get("/api/rollinglist", (req, res) => {
          res.json({
            data: [
              [
                {
                  url: "#",
                  image:
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605263378426&di=6e5a1e76fe9c3c68fcb05c312013927b&imgtype=0&src=http%3A%2F%2Fp0.meituan.net%2Fwaimaipoi%2F13abbc6a721e346d0203d258622b0e6d181766.jpg",
                  label: "第一页",
                },
                {
                  url: "#",
                  image:
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605263378426&di=6e5a1e76fe9c3c68fcb05c312013927b&imgtype=0&src=http%3A%2F%2Fp0.meituan.net%2Fwaimaipoi%2F13abbc6a721e346d0203d258622b0e6d181766.jpg",
                  label: "第一页",
                },
                {
                  url: "#",
                  image:
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605263378426&di=6e5a1e76fe9c3c68fcb05c312013927b&imgtype=0&src=http%3A%2F%2Fp0.meituan.net%2Fwaimaipoi%2F13abbc6a721e346d0203d258622b0e6d181766.jpg",
                  label: "第一页",
                },
                {
                  url: "#",
                  image:
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605263378426&di=6e5a1e76fe9c3c68fcb05c312013927b&imgtype=0&src=http%3A%2F%2Fp0.meituan.net%2Fwaimaipoi%2F13abbc6a721e346d0203d258622b0e6d181766.jpg",
                  label: "第一页",
                },
                {
                  url: "#",
                  image:
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605263378426&di=6e5a1e76fe9c3c68fcb05c312013927b&imgtype=0&src=http%3A%2F%2Fp0.meituan.net%2Fwaimaipoi%2F13abbc6a721e346d0203d258622b0e6d181766.jpg",
                  label: "第一页",
                },
                {
                  url: "#",
                  image:
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605263378426&di=6e5a1e76fe9c3c68fcb05c312013927b&imgtype=0&src=http%3A%2F%2Fp0.meituan.net%2Fwaimaipoi%2F13abbc6a721e346d0203d258622b0e6d181766.jpg",
                  label: "第一页",
                },
                {
                  url: "#",
                  image:
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605263378426&di=6e5a1e76fe9c3c68fcb05c312013927b&imgtype=0&src=http%3A%2F%2Fp0.meituan.net%2Fwaimaipoi%2F13abbc6a721e346d0203d258622b0e6d181766.jpg",
                  label: "第一页",
                },
                {
                  url: "#",
                  image:
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605263378426&di=6e5a1e76fe9c3c68fcb05c312013927b&imgtype=0&src=http%3A%2F%2Fp0.meituan.net%2Fwaimaipoi%2F13abbc6a721e346d0203d258622b0e6d181766.jpg",
                  label: "第一页",
                },
                {
                  url: "#",
                  image:
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605263378426&di=6e5a1e76fe9c3c68fcb05c312013927b&imgtype=0&src=http%3A%2F%2Fp0.meituan.net%2Fwaimaipoi%2F13abbc6a721e346d0203d258622b0e6d181766.jpg",
                  label: "第一页",
                },
                {
                  url: "#",
                  image:
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605263378426&di=6e5a1e76fe9c3c68fcb05c312013927b&imgtype=0&src=http%3A%2F%2Fp0.meituan.net%2Fwaimaipoi%2F13abbc6a721e346d0203d258622b0e6d181766.jpg",
                  label: "第一页",
                },
              ],
              [
                {
                  url: "#",
                  image:
                    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=313594558,2150157177&fm=26&gp=0.jpg",
                  label: "第二页",
                },
                {
                  url: "#",
                  image:
                    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=313594558,2150157177&fm=26&gp=0.jpg",
                  label: "第二页",
                },
                {
                  url: "#",
                  image:
                    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=313594558,2150157177&fm=26&gp=0.jpg",
                  label: "第二页",
                },
                {
                  url: "#",
                  image:
                    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=313594558,2150157177&fm=26&gp=0.jpg",
                  label: "第二页",
                },
                {
                  url: "#",
                  image:
                    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=313594558,2150157177&fm=26&gp=0.jpg",
                  label: "第二页",
                },
                {
                  url: "#",
                  image:
                    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=313594558,2150157177&fm=26&gp=0.jpg",
                  label: "第二页",
                },
                {
                  url: "#",
                  image:
                    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=313594558,2150157177&fm=26&gp=0.jpg",
                  label: "第二页",
                },
                {
                  url: "#",
                  image:
                    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=313594558,2150157177&fm=26&gp=0.jpg",
                  label: "第二页",
                },
                {
                  url: "#",
                  image:
                    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=313594558,2150157177&fm=26&gp=0.jpg",
                  label: "第二页",
                },
                {
                  url: "#",
                  image:
                    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=313594558,2150157177&fm=26&gp=0.jpg",
                  label: "第二页",
                },
              ],
            ],
          });
        });
        //获取分类页的分类接口
        app.get("/api/classify", (req, res) => {
          switch (req.query.type) {
            case "0":
              res.json({
                data: [
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米",
                  },
                  {
                    image:
                      "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
                    label: "华为",
                  },
                  {
                    image:
                      "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
                    label: "荣耀",
                  },
                  {
                    image:
                      "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
                    label: "苹果",
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米",
                  },
                  {
                    image:
                      "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
                    label: "华为",
                  },
                  {
                    image:
                      "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
                    label: "荣耀",
                  },
                  {
                    image:
                      "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
                    label: "苹果",
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米",
                  },
                  {
                    image:
                      "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
                    label: "华为",
                  },
                  {
                    image:
                      "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
                    label: "荣耀",
                  },
                  {
                    image:
                      "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
                    label: "苹果",
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米",
                  },
                  {
                    image:
                      "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
                    label: "华为",
                  },
                  {
                    image:
                      "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
                    label: "荣耀",
                  },
                  {
                    image:
                      "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
                    label: "苹果",
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米",
                  },
                  {
                    image:
                      "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
                    label: "华为",
                  },
                  {
                    image:
                      "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
                    label: "荣耀",
                  },
                  {
                    image:
                      "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
                    label: "苹果",
                  },
                ],
              });
              break;
            case "1":
              res.json({
                data: [
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米",
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米",
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米",
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米",
                  },
                ],
              });
              break;
            case "2":
              res.json({
                data: [
                  {
                    image:
                      "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
                    label: "华为",
                  },
                  {
                    image:
                      "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
                    label: "华为",
                  },
                  {
                    image:
                      "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
                    label: "华为",
                  },
                  {
                    image:
                      "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
                    label: "华为",
                  },
                ],
              });
              break;
            case "3":
              res.json({
                data: [
                  {
                    image:
                      "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
                    label: "荣耀",
                  },
                  {
                    image:
                      "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
                    label: "荣耀",
                  },
                  {
                    image:
                      "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
                    label: "荣耀",
                  },
                  {
                    image:
                      "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
                    label: "荣耀",
                  },
                ],
              });
              break;
            case "4":
              res.json({
                data: [
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米",
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米",
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米",
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米",
                  },
                ],
              });
              break;
            case "5":
              res.json({
                data: [
                  {
                    image:
                      "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
                    label: "苹果",
                  },
                  {
                    image:
                      "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
                    label: "苹果",
                  },
                  {
                    image:
                      "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
                    label: "苹果",
                  },
                  {
                    image:
                      "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
                    label: "苹果",
                  },
                ],
              });
              break;
            case "6":
              res.json({
                data: [
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米",
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米",
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米",
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米",
                  },
                ],
              });
              break;
          }
        });
      },
    },
  },

  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"],
      },
    },
  },

  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true,
    },
  },
};
