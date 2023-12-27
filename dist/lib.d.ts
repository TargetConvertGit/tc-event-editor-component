declare function enumToObj<T>(enumType: T): {
    [key: string]: unknown;
};
declare function arrayToObj(arr: string[]): {
    [key: string]: string;
};
export { enumToObj, arrayToObj };
