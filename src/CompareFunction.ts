export type CompareFunctionType<T> = (a: T, b: T) => 1 | 0 | -1;
export const descendingCompareFunction: CompareFunctionType<any> = (a, b) =>
    a == b ? 0 : a > b ? 1 : -1;
export const ascendingCompareFunction: CompareFunctionType<any> = (a, b) =>
    a == b ? 0 : a < b ? 1 : -1;
