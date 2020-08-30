import { ascendingCompareFunction } from "../CompareFunction";

/**
 * 
 * @param elements {T}
 * @param kth 0 based index of the element after the array is supposed to be sorted
 * @param compareFunction How comparison is done. By default this functions sort in ascending order
 */
export function QuickSelect<T>(
    elements: T[],
    kth: number,
    compareFunction = ascendingCompareFunction
): T {
    if (kth >= elements.length) {
        return undefined;
    }

    const arr = [...elements];
    const find = (start = 0, end = elements.length - 1): T => {
        const pivot = arr[end];
        let i = start - 1;
        for (let j = start; j <= end; j++) {
            if (compareFunction(pivot, arr[j]) <= 0) {
                i++;
                const tmp = arr[j];
                arr[j] = arr[i];
                arr[i] = tmp;
            }
        }

        if (kth == i) return arr[i];
        if (kth < i) return find(start, i - 1);
        return find(i + 1, end);
    };

    return find();
}
