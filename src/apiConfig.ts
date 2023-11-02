let apiUrlBase = "";
let apiToken = "";
/**
 * 指定 API Base 網址
 * @param url
 */
export function setApiUrlBase(url: string) {
  apiUrlBase = url;
}

/**
 * 設定 token
 * @param token
 */
export function setToken(token: string) {
  apiToken = token;
}

/**
 * 取得 API Base 網址
 * @returns
 */
export function getApiUrlBase() {
  return apiUrlBase;
}

/**
 * 取得 token
 * @returns
 */
export function getToken() {
  return apiToken;
}
