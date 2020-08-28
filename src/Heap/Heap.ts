import { descendingCompareFunction, ascendingCompareFunction } from "../CompareFunction";

export interface IHeap<T> {
    add(value: T): void;
    remove(value: T): void;
    getRoot(): T;
    extractRoot(): T;

    toArray(): T[];

    readonly size: number;
    [Symbol.iterator](): Iterator<T, any, undefined>;
}

export interface IMaxHeap<T> extends IHeap<T> {
    extractMax(): T;
    getMax(): T;
}

export interface IMinHeap<T> extends IHeap<T> {
    extractMin(): T;
    getMin(): T;
}

export class Heap<T> implements IHeap<T> {
    private _data: T[];
    public get size() {
        return this._data.length;
    }

    constructor(
        private compareFunction: (
            e1: T,
            e2: T
        ) => -1 | 0 | 1 = descendingCompareFunction
    ) {
        this._data = [];
    }

    public getRoot(): T {
        return this._data[0];
    }

    public extractRoot(): T {
        const root = this._data[0];
        if(root != undefined) {
            this.remove(root);
        }

        return root;
    }

    public add(value: T): void {
        this._data.push(value);
        if(this.size == 1) return;
        
        let currentId = this.size - 1;
        let parentId = this.getParentIndex(this.size - 1);

        while (
            this.compareFunction(this._data[parentId], this._data[currentId]) <
                0 &&
            currentId > 0
        ) {
            const tmp = this._data[parentId];
            this._data[parentId] = this._data[currentId];
            this._data[currentId] = tmp;

            currentId = parentId;
            parentId = this.getParentIndex(currentId);
        }
    }

    public remove(value: T): void {
        let index = this._data.findIndex(v=> v == value);
        if(index<0) return;

        const elem = this._data.pop();
        if(index >= this.size) return;

        this._data[index] = elem;
        while(index < this.size) {
            const children = this.getChildrenIndex(index);
            if(children[0] >= this.size && children[1] >= this.size) {
                break;
            }

            const childrenValues = children.map( i=> this._data[i]);
            if(this.compareFunction(childrenValues[0], this._data[index]) < 0 && this.compareFunction(childrenValues[1], this._data[index]) < 0) {
                break;
            }

            if(this.compareFunction(childrenValues[0], childrenValues[1]) > 0 || !childrenValues[1]) {
                this._data[children[0]] = this._data[index];
                this._data[index] = childrenValues[0];
                index=children[0];
            } else {
                this._data[children[1]] = this._data[index];
                this._data[index] = childrenValues[1];
                index=children[1];
            }
        }
    }

    public toArray() {
        return this._data;
    }

    private getParentIndex(index: number) {
        return Math.floor((index-1) / 2);
    }

    private getChildrenIndex(index: number) {
        return [index * 2 + 1, index * 2 + 2];
    }

    public [Symbol.iterator](): Iterator<T, any, undefined> {
        return this._data[Symbol.iterator]();
    }

}

export class MaxHeap<T> extends Heap<T> implements IMaxHeap<T> {
    constructor() {
        super(descendingCompareFunction);
    }

    public extractMax(): T {
        return this.extractRoot();
    }

    public getMax(): T {
        return this.getRoot();
    }
}

export class MinHeap<T> extends Heap<T> implements IMinHeap<T> {
    constructor() {
        super(ascendingCompareFunction);
    }

    public extractMin(): T {
        return this.extractRoot();
    }

    public getMin(): T {
        return this.getRoot();
    }
}
