import { createApp } from "vue";
import { vfmPlugin } from "vue-final-modal";
import { createI18n } from "vue-i18n";
import zh_TW from "./lang/zh_TW.js";

import "./style.css";
import App from "./App.vue";

const app = createApp(App);
const i18n = createI18n({
  locale: "zh_TW",
  legacy: false,
  messages: {
    zh_TW,
  },
  // something vue-i18n options here ...
});
app.use(vfmPlugin).use(i18n).mount("#app");
