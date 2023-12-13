let timezone = "";

/**
 * 設定 timezone
 * @param timezone
 */
export function setTimezone(tz: string) {
  timezone = tz;
}

/**
 * 取得 timezone
 * @returns
 */
export function getTimezone() {
  return timezone;
}
