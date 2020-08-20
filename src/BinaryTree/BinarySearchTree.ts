import { BinaryTree, BinaryTreeNode, IBinaryTree, IBinaryTreeNode } from "./BinaryTree";

export interface IBinarySearchTree<T> extends IBinaryTree<T> {
    readonly min: T | undefined;
    readonly max: T | undefined;
}

type CompareFunctionType<T> = (a: T, b :T)=> 1 | 0 | -1;

export class BinarySearchTree<T> extends BinaryTree<T> implements IBinarySearchTree<T> {
    protected compareFunction: CompareFunctionType<T> = (a, b) => a==b ? 0 : a>b ? 1 : -1;

    constructor(compareFunction?: CompareFunctionType<T>) {
        super()
        if(compareFunction) {
            this.compareFunction=compareFunction;
        }
    }

    public add(value: T, callback: (node: IBinaryTreeNode<T>) => void = ()=>{}) {
        if(!this._head) {
            this._head = new BinaryTreeNode<T>(value)
        } else {
           const newNode = this.insertNode(value, this._head);
           callback?.(newNode);
        }
    }

    public get min() {
        if(!this.head) return undefined;

        let currentNode = this.head;

        while(currentNode.left) {
            currentNode=currentNode.left;
        }

        return currentNode.val;
    }

    public get max() {
        if(!this.head) return undefined;

        let currentNode = this.head;
        while(currentNode.right) {
            currentNode=currentNode.right;
        }

        return currentNode.val;
    }

    protected insertNode(value: T, node: IBinaryTreeNode<T>): IBinaryTreeNode<T> {
        const compareResult = this.compareFunction(node.val, value);

        if(compareResult > 0 && !node.left) {
            node.left = new BinaryTreeNode(value, node);
            return node.left;
        } else if(compareResult > 0 && node.left) {
            return this.insertNode(value, node.left);
        } else if(compareResult < 0 && !node.right) {
            node.right = new BinaryTreeNode(value, node);
            return node.right;
        } else if(compareResult < 0 && node.right) {
            return this.insertNode(value, node.right);
        }
    }
}