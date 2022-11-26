import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// ElementPlus 图标库
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// 引入深色模式
import "element-plus/theme-chalk/dark/css-vars.css";
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(ElementPlus).use(store).use(router).mount("#app");
