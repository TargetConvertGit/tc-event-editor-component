import { createApp } from "vue";
import { vfmPlugin } from "vue-final-modal";
// import { createI18n } from "vue-i18n";
// import zh_TW from "./lang/zh_TW.js";

import "./style.css";

import App from "./App.vue";

const app = createApp(App);
// const i18n = createI18n({
//   locale: "zh_TW",
//   legacy: false,
//   globalInjection: true,
//   messages: {
//     zh_TW,
//   },
// });
app.use(vfmPlugin);
// app.use(i18n);
app.mount("#app");
