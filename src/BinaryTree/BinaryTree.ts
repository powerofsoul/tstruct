import { Queue } from "../Queue/Queue";

export interface INode<T> {
    val: T;
    left: INode<T>;
    right: INode<T>;
}

export class Node<T> implements INode<T> {
    val: T;
    left: INode<T>;
    right: INode<T>;

    constructor(value: T){
        this.val = value;
    }
}

export interface IBinaryTree<T> {
    readonly head: INode<T>;
    add(value: T): void;
}

export class BinaryTree<T> implements IBinaryTree<T> {
    private _head: INode<T>;

    public get head(): INode<T> {
        return this._head;
    } 

    public add(value: T) {
        if(!this._head) {
            this._head = new Node<T>(value)
        } else {
            const queue = new Queue<Node<T>>();
            queue.enqueue(this._head);
            let foundSpot = false;
            
            while(!foundSpot) {
                let currentElement = queue.dequeue();
                
                if(!currentElement.left) {
                    foundSpot = true;
                    currentElement.left = new Node(value);
                } else if(!currentElement.right) {
                    foundSpot = true;
                    currentElement.right = new Node(value);
                } else {
                    queue.enqueue(currentElement.left);
                    queue.enqueue(currentElement.right);
                }
            }
        }
    }
}
