import { Queue } from "../Queue/Queue";

export interface IBinaryTreeNode<T> {
    val: T;
    left: BinaryTreeNode<T>;
    right: BinaryTreeNode<T>;
}

export class BinaryTreeNode<T> implements IBinaryTreeNode<T> {
    val: T;
    left: BinaryTreeNode<T>;
    right: BinaryTreeNode<T>;

    constructor(value: T){
        this.val = value;
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
        if(!this._head) {
            this._head = new BinaryTreeNode<T>(value)
        } else {
            const queue = new Queue<BinaryTreeNode<T>>();
            queue.enqueue(this._head);
            let foundSpot = false;
            
            while(!foundSpot) {
                let currentElement = queue.dequeue();
                
                if(!currentElement.left) {
                    foundSpot = true;
                    currentElement.left = new BinaryTreeNode(value);
                } else if(!currentElement.right) {
                    foundSpot = true;
                    currentElement.right = new BinaryTreeNode(value);
                } else {
                    queue.enqueue(currentElement.left);
                    queue.enqueue(currentElement.right);
                }
            }
        }
    }
}
