import { IMaxHeap, MaxHeap, IHeap, Heap } from "../Heap/Heap";
import { descendingCompareFunction } from "../CompareFunction";

export interface IPriorityQueue<T> {
    enqueue(item: T): void;
    dequeue(): T;
    peek(): T;
    toArray(): T[];
    rearrange():void;

    readonly size: number;
    readonly isEmpty: boolean;

    [Symbol.iterator](): Iterator<T, any, undefined>;
}

export class PriorityQueue<T> implements IPriorityQueue<T> {
    private _heap: IHeap<T>;

    constructor(
        getPriority: (value: T) => any,
        compareFunction = descendingCompareFunction
    ) {
        const heapCompareFunction = (e: T, e2: T) => {
            const ePriority = getPriority(e);
            const e2Priority = getPriority(e2);

            return compareFunction(ePriority, e2Priority);
        };
        this._heap = new Heap(heapCompareFunction);
    }

    public rearrange(): void {
        this._heap.rearrange();
    }

    public enqueue(item: T): void {
        this._heap.add(item);
    }

    public dequeue(): T {
        return this._heap.extractRoot();
    }

    public peek(): T {
        return this._heap.getRoot();
    }

    public toArray(): T[] {
        const result = [];
        while(!this.isEmpty) {
            result.push(this.dequeue());
        }

        return result;
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
