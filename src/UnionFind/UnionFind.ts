export interface IUnionFind<T> {
    add(item: T): void;
    union(item1: T, item2: T): void;
    find(item: T): T;
    size(item: T): number;

    isConnected(item1: T, item2: T): boolean;

    readonly numberOfComponents: number;
}

export class UnionFind<T> implements IUnionFind<T> {
    private _objectToId: Map<T, number>;
    private _idToObject: Map<number, T>;
    private _arr: number[];
    private _sizes: number[];

    private _numberOfComponents: number;

    constructor() {
        this._objectToId = new Map();
        this._idToObject = new Map();
        this._arr = [];
        this._sizes = [];
        this._numberOfComponents = 0;
    }

    public get numberOfComponents() {
        return this._numberOfComponents;
    }

    public add(item: T) {
        if(this._objectToId.has(item)) return;
        
        const itemId = this._arr.length;

        this._arr.push(itemId);
        this._sizes.push(1);

        this._objectToId.set(item, itemId);
        this._idToObject.set(itemId, item);
        this._numberOfComponents++;
    }

    public union(item1: T, item2: T): void {
        const item1Index = this.findIndex(item1);
        const item2Index = this.findIndex(item2);

        if (item1Index == item2Index) return;

        if (this._sizes[item1Index] <= this._sizes[item2Index]) {
            this._arr[item1Index] = item2Index;
            this._sizes[item2Index] =
                this._sizes[item1Index] + this._sizes[item2Index];
        } else {
            this._arr[item2Index] = item1Index;
            this._sizes[item1Index] =
                this._sizes[item1Index] + this._sizes[item2Index];
        }

        this._numberOfComponents--;
    }

    public find(item: T): T {
        let itemId = this.findIndex(item);

        return this._idToObject.get(itemId);
    }

    private findIndex(item: T) {
        let itemId = this._objectToId.get(item);
        let root = itemId;
        while (root != this._arr[root]) {
            root = this._arr[root];
        }

        //Path compression
        while (itemId != root) {
            const next = this._arr[itemId];
            this._arr[itemId] = root;
            itemId = next;
        }
        return itemId;
    }

    public size(item: T) {
        const itemIndex = this.findIndex(item);
        return this._sizes[itemIndex];
    }

    public isConnected(item1: T, item2: T) {
        return this.find(item1) == this.find(item2);
    }
}
