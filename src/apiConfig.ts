let apiUrlBase = '';

/**
 * 指定 API Base 網址
 * @param url
 */
export function setApiUrlBase(url: string) {
  apiUrlBase = url;
}

/**
 * 取得 API Base 網址
 * @returns 
 */
export function getApiUrlBase() {
  return apiUrlBase;
}
