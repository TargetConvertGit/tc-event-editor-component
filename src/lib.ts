// enum => obj
function enumToObj<T>(enumType: T): { [key: string]: unknown } {
  const enumKeys = Object.keys(enumType)
    .filter((key) => isNaN(Number(enumType[key] as string)))
    .map((key) => ({ key: enumType[key], value: key }));

  const result: { [key: string]: unknown } = {};
  enumKeys.forEach(({ key, value }) => {
    result[key] = value;
  });

  return result;
}
// array=> obj
function arrayToObj(arr: string[]): { [key: string]: string } {
  const obj: { [key: string]: string } = {};
  arr.forEach((item) => {
    obj[item] = item;
  });
  return obj;
}
export { enumToObj, arrayToObj };
