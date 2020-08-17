import { LinkedList } from "../LinkedList/LinkedList";

export interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T;
}

export class Queue<T> implements IQueue<T> {
    private _list: LinkedList<T>;

    constructor() {
        this._list = new LinkedList<T>();
    }

    enqueue(item: T): void {
        this._list.add(item);
    }
    
    dequeue(): T {
        const val = this._list.get(0);
        this._list.remove(0);
        return val;
    }
}
