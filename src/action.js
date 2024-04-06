import {
  EventActionTargetType,
  ClientType,
  AdLevelTypeGoogle,
  AdLevelTypeFacebook,
} from "./types/event-items";
import { i18n } from "./i18n";

export function getActionDescription(action, lang = i18n.global.locale.value) {
  if (!action) return "";
  const { t } = i18n.global;
  if (lang) i18n.global.locale.value = lang;
  let description;
  let adLevelType;
  if (action.client === ClientType.Google) {
    adLevelType = AdLevelTypeGoogle;
  } else {
    adLevelType = AdLevelTypeFacebook;
  }
  // 所有
  if (action.targetType === EventActionTargetType.ForAll) {
    description =
      t("所有的") +
      `${i18n.global.locale.value == "en-US" ? " " : ""}` +
      t(`${ClientType[action.client]}${adLevelType[action.adLevel]}`);
  }
  // 已開啟
  if (action.targetType === EventActionTargetType.ForActive) {
    description =
      t("已開啟的") +
      `${i18n.global.locale.value == "en-US" ? " " : ""}` +
      t(`${ClientType[action.client]}${adLevelType[action.adLevel]}`);
  }
  // 自選目標
  if (action.targetType === EventActionTargetType.ForID) {
    const count = action.target.length;
    description =
      `${count}${i18n.global.locale.value == "en-US" ? " " : ""}${t("個")}${
        i18n.global.locale.value == "en-US" ? " " : ""
      }` + t(`${ClientType[action.client]}${adLevelType[action.adLevel]}`);
  }
  return description;
}
