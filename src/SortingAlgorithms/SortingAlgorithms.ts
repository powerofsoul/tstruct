import { ascendingCompareFunction } from "../CompareFunction";
import { PriorityQueue } from "../Queue";

export function HeapSort<T>(elements: T[], getComparisonValue = (e: T) => e, compareFunction=ascendingCompareFunction): T[]{
    const result = [];
    const priorityQueue = new PriorityQueue<T>(getComparisonValue, compareFunction);

    elements.forEach(e=> priorityQueue.enqueue(e));

    while(!priorityQueue.isEmpty){
        result.push(priorityQueue.dequeue());
    }

    return result;
}