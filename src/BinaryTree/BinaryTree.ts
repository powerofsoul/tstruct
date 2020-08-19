import { Queue } from "../Queue/Queue";

export interface IBinaryTreeNode<T> {
    val: T;
    left: IBinaryTreeNode<T>;
    right: IBinaryTreeNode<T>;
    parent: IBinaryTreeNode<T>;
    copyTo(node?: IBinaryTreeNode<T>): void;
}

export class BinaryTreeNode<T> implements IBinaryTreeNode<T> {
    val: T;
    left: IBinaryTreeNode<T>;
    right: IBinaryTreeNode<T>;
    parent: IBinaryTreeNode<T>;

    public copyTo(node?: IBinaryTreeNode<T>) {
        if(!node) return;

        node.val=this.val;
        node.left=this.left;
        node.right=this.right;
        node.parent=this.parent;
    }

    constructor(
        value: T,
        parent?: IBinaryTreeNode<T>,
        left?: IBinaryTreeNode<T>,
        right?: IBinaryTreeNode<T>
    ) {
        this.val = value;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
}

export interface IBinaryTree<T> {
    readonly head: BinaryTreeNode<T>;
    add(value: T): void;
}

export class BinaryTree<T> implements IBinaryTree<T> {
    protected _head: BinaryTreeNode<T>;

    public get head(): BinaryTreeNode<T> {
        return this._head;
    }

    public add(value: T) {
        if (!this._head) {
            this._head = new BinaryTreeNode<T>(value);
        } else {
            const queue = new Queue<BinaryTreeNode<T>>();
            queue.enqueue(this._head);
            let foundSpot = false;

            while (!foundSpot) {
                let currentElement = queue.dequeue();

                if (!currentElement.left) {
                    foundSpot = true;
                    currentElement.left = new BinaryTreeNode(value, currentElement);
                } else if (!currentElement.right) {
                    foundSpot = true;
                    currentElement.right = new BinaryTreeNode(value, currentElement);
                } else {
                    queue.enqueue(currentElement.left);
                    queue.enqueue(currentElement.right);
                }
            }
        }
    }
}
