<template>
  <div class="bodyCard">
    <h1>Push.js</h1>
    <el-link href="https://pushjs.org/" target="_blank" type="primary"
      >Push.js 文档</el-link
    >
    <el-card header="What is Push?" class="card">
      Push 是使用 Javascript 进行桌面推送通知的"最佳实践"
      是对官方规范的API一个相当完全的封装，它允许 Chrome、 Safari、 Firefox 和
      Edge 等现代浏览器将消息推送到用户的桌面上.Push 是进行信息推送
      的跨浏览器解决方案。
    </el-card>
    <div class="btnbox">
      <el-button type="success" @click="example1('推送一')">推送1</el-button>
      <el-button type="success" @click="example2('推送二', '消息主体')"
        >推送2</el-button
      >
      <el-button type="primary" @click="example3">推送3</el-button>
      <el-button type="danger" @click="clearExample3">清除推送3</el-button>
      <el-button type="danger" @click="example4">清除所有推送</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import Push from "push.js";
export default {
  name: "PushCom",
  components: {},
  setup() {
    const example1 = (msg: string) => {
      Push.create(msg);
    };
    const example2 = (msg: string, body: string) => {
      Push.create(msg, {
        timeout: 4000,
        body,
        icon: "favicon.ico",
        onClick() {
          console.log("通知被打开");
          window.focus();
        },
      });
    };
    const example3 = () => {
      Push.create("推送三", {
        tag: "push3",
      });
    };
    const clearExample3 = () => Push.close("push3");
    const example4 = () => Push.clear();
    return {
      example1,
      example2,
      example3,
      clearExample3,
      example4,
    };
  },
};
</script>

<style scoped lang="scss">
.bodyCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  .card {
    width: 80%;
    margin-top: 8px;
  }
  .btnbox {
    margin: 16px;
  }
}
</style>
