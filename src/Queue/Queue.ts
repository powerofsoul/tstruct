import { LinkedList } from "../LinkedList/LinkedList";

export interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T;
    peek(): T;

    readonly size: number;
    readonly isEmpty: boolean;

    [Symbol.iterator](): Iterator<T, any, undefined>;
}

/**
 * Standard Queue based on Single Linked List
 */
export class Queue<T> implements IQueue<T> {
    private _list: LinkedList<T>;

    constructor() {
        this._list = new LinkedList<T>();
    }

    /**
     * Adds a new item to queue.
     * @param item {T}
     */
    public enqueue(item: T): void {
        this._list.add(item);
    }

    /**
     * Gets and remove next item in queue.
     * @return {T}
     */
    public dequeue(): T {
        const val = this._list.get(0);
        this._list.remove(0);
        return val;
    }

    /**
     * Gets next item in queue.
     */
    public peek(): T {
        return this._list.get(0);
    }

    /**
     * @return {boolean} Determine if the queue is empty or not
     */
    public get isEmpty(): boolean {
        return this._list.size == 0;
    }

    /**
     * @return {number} Returns the size of the queue
     */
    public get size(): number {
        return this._list.size;
    }

    /**
     * Foreach Iterator
     */
    public [Symbol.iterator](): Iterator<T, any, undefined> {
        return this._list[Symbol.iterator]();
    }
}
