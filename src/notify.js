import { EmailNotify } from "./types/event-items";
import { i18n } from "./i18n";

export function getNotifyDescription(notify, lang = i18n.global.locale.value) {
  const { t } = i18n.global;
  if (lang) i18n.global.locale.value = lang;
  if (!notify?.email) return "";
  return t(`mail${EmailNotify[notify.email]}`);
}
