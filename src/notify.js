import { EmailNotify } from "./types/event-items";
import { i18n } from "./i18n";

export function getNotifyDescription(notify) {
  const { t } = i18n.global;
  if (!notify?.email) return "";
  return t(`mail${EmailNotify[notify.email]}`);
}
