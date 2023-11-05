import { emailType } from "./types/event-items";
import { i18n } from "./i18n";

export function getNotifyDescription(notify) {
  const { t } = i18n.global;
  return t(`mail${emailType[notify.email]}`);
}
