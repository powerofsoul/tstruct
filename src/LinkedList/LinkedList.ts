export interface ILinkedListNode<T> {
    val: T;
    next?: ILinkedListNode<T>;
}

export class ILinkedListNode<T> implements ILinkedListNode<T> {
    constructor(public val: T, public next?: ILinkedListNode<T>) {}
}

export interface ILinkedList<T> {
    add(val: T): void;
    remove(index: number): void;
    get(index: number): T;

    readonly size: number;
    readonly head: ILinkedListNode<T>;
    readonly tail: ILinkedListNode<T>;
    readonly isEmpty: boolean;

    [Symbol.iterator](): Iterator<T, any, undefined>;
}

export class LinkedList<T> implements ILinkedList<T>, Iterable<T> {
    private _head: ILinkedListNode<T>;
    private _tail: ILinkedListNode<T>;
    private _length: number = 0;

    public get head() {
        return this._head;
    }

    public get tail() {
        return this._tail;
    }

    public get isEmpty() {
        return this.size == 0;
    }

    public add(val: T): void {
        const node = new ILinkedListNode(val);

        if (!this._head) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            this._tail = node;
        }

        this._length++;
    }

    private getNode(index: number): ILinkedListNode<T> {
        if (index < 0 || index >= this.size) {
            return undefined;
        }

        let currentIndex = 0;
        let currentNode = this._head;

        while (currentIndex < index && currentNode) {
            currentNode = currentNode?.next;
            currentIndex++;
        }

        return currentNode;
    }

    public get(index: number): T {
        return this.getNode(index)?.val;
    }

    public remove(index: number) {
        if (index < 0 || index >= this.size || this.size == 0) return;

        if (index == 0 && this.size == 1) {
            this._head = undefined;
            this._tail = undefined;
        } else if (index == 0) {
            this._head = this._head?.next;
        } else if (index == this._length - 1) {
            const node = this.getNode(index - 1);
            node.next = undefined;
            this._tail = node;
        } else {
            const node = this.getNode(index - 1);
            node.next = node?.next?.next;
        }

        this._length--;
    }

    public get size(): number {
        return this._length;
    }

    [Symbol.iterator](): Iterator<T, any, undefined> {
        let node = this._head;

        return {
            next(): IteratorResult<T> {
                if (node) {
                    const val = node.val;
                    node = node.next;

                    return {
                        done: false,
                        value: val,
                    };
                } else {
                    return {
                        done: true,
                        value: null,
                    };
                }
            },
        };
    }
}
