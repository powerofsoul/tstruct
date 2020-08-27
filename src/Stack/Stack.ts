import { ILinkedList, LinkedList } from "../LinkedList/LinkedList";

export interface IStack<T> {
    readonly isEmpty: boolean;
    readonly size: number;
    push(val: T): void;
    pop(): T;

    [Symbol.iterator](): Iterator<T, any, undefined>;
}

export class Stack<T> implements IStack<T> {
    private _list: ILinkedList<T>

    constructor() {
        this._list = new LinkedList<T>();    
    }

    public get isEmpty() {
        return this._list.isEmpty;
    }

    public get size() {
        return this._list.size;
    }

    public push(val: T) {
        this._list.add(val);
    }

    public pop(){
        if(this._list.size == 0) return;

        const val = this._list.tail.val;
        const lastIndex = this._list.size - 1;
        this._list.remove(lastIndex);

        return val;
    }

    [Symbol.iterator](): Iterator<T, any, undefined> {
        return this._list[Symbol.iterator]();
    }
}