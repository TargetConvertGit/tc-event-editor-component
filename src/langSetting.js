import { i18n } from "./i18n";
export default function setLang(lang) {
  i18n.global.locale.value = lang;
}
