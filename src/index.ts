import { setApiUrlBase } from "./apiConfig";
import * as TCEventItems from "./types/event-items.ts";
import TCEventEditorApp from "./components/TCEventEditorApp.vue";
import QuickSetup from "./components/QuickSetup.vue";
import { createI18n } from "vue-i18n";
import zh_TW from "./lang/zh_TW.js";

const install = (app) => {
  app.component("TCEventEditorApp", TCEventEditorApp);
  // const i18n = createI18n({
  //   locale: "zh_TW",
  //   legacy: false,
  //   globalInjection: true,
  //   messages: {
  //     zh_TW,
  //   },
  // });
  // app.use(i18n);
};

export default {
  install,
};

export { setApiUrlBase, TCEventEditorApp, TCEventItems, QuickSetup };
