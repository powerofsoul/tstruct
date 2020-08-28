import {
    ascendingCompareFunction,
    CompareFunctionType,
} from "../CompareFunction";
import { PriorityQueue } from "../Queue";

export type GetComparisonValueFunc<T, K> = (e: T) => K;

export function HeapSort<T>(
    elements: T[],
    getComparisonValue: GetComparisonValueFunc<T, any> = (e: T) => e,
    compareFunction = ascendingCompareFunction
): T[] {
    const result = [];
    const priorityQueue = new PriorityQueue<T>(
        getComparisonValue,
        compareFunction
    );

    elements.forEach((e) => priorityQueue.enqueue(e));

    while (!priorityQueue.isEmpty) {
        result.push(priorityQueue.dequeue());
    }

    return result;
}

export function QuickSort<T>(
    elements: T[],
    getComparisonValue: GetComparisonValueFunc<T, any> = (e: T) => e,
    compareFunction = ascendingCompareFunction
): T[] {
    const result = [...elements];
    const sort = (arr: T[], start: number, end: number) => {
        if(start>=end) return;

        const pivot = arr[end];
        let i = start-1;

        for(let j=start;j<=end;j++) {
            if(compareFunction(getComparisonValue(pivot), getComparisonValue(arr[j])) <= 0) {
                i++;
                const tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }

        sort(arr, start, i-1);
        sort(arr, i+1, end);
    }

    sort(result, 0, elements.length-1);

    return result;
}
