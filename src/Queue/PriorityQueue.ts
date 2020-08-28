import { IMaxHeap, MaxHeap, IHeap, Heap } from "../Heap/Heap";
import { descendingCompareFunction } from "..";

export interface IPriorityQueue<T> {
    enqueue(item: T): void;
    dequeue(): T;
    peek(): T;

    readonly size: number;
    readonly isEmpty: boolean;

    [Symbol.iterator](): Iterator<T, any, undefined>;
}

export class PriorityQueue<T> implements IPriorityQueue<T>{
    private _heap: IHeap<T>;

    constructor(getPriority: (value: T) => any, compareFunction = descendingCompareFunction) {
        const heapCompareFunction = (e:T , e2: T) => {
            const ePriority = getPriority(e);
            const e2Priority = getPriority(e2);

            return compareFunction(ePriority, e2Priority);
        }
        this._heap = new Heap(heapCompareFunction);
    }

    enqueue(item: T): void {
        this._heap.add(item);
    }

    dequeue(): T {
        return this._heap.extractRoot();
    }

    peek(): T {
        return this._heap.getRoot();
    }

    public get size() {
        return this._heap.size;
    }

    public get isEmpty() {
        return this.size == 0;
    }

    [Symbol.iterator](): Iterator<T, any, undefined> {
        return this._heap[Symbol.iterator]();
    }

}