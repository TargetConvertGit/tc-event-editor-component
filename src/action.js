import {
  EventActionTargetType,
  ClientType,
  AdLevelTypeGoogle,
  AdLevelTypeFacebook,
} from "./types/event-items";
import { i18n } from "./i18n";

export function getActionDescription(action) {
  if (!action) return "";
  const { t } = i18n.global;
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
      t(`${ClientType[action.client]}${adLevelType[action.adLevel]}`);
  }
  // 已開啟
  if (action.targetType === EventActionTargetType.ForActive) {
    description =
      t("已開啟的") +
      t(`${ClientType[action.client]}${adLevelType[action.adLevel]}`);
  }
  // 自選目標
  if (action.targetType === EventActionTargetType.ForID) {
    const count = action.target.length;
    description =
      `${count}${t("個")}` +
      t(`${ClientType[action.client]}${adLevelType[action.adLevel]}`);
  }
  return description;
}
