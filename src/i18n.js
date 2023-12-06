// i18n.js

import { createI18n } from "vue-i18n";
import zh_TW from "./lang/zh_TW.js";
import en_US from "./lang/en_US.js";

const messages = {
  zh_TW,
  en_US,
};

export const i18n = createI18n({
  locale: "zh_TW",
  legacy: false,
  globalInjection: true,
  messages,
});
