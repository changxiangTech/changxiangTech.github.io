import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "成都长享科技有限公司",
  description: "成都长享科技有限公司官网，长享科技，智造未来。",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
