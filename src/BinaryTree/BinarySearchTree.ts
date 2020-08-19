import { BinaryTree, BinaryTreeNode, IBinaryTree } from "./BinaryTree";

export interface IBinarySearchTree<T> extends IBinaryTree<T> {
    readonly min: T;
    readonly max: T;
}

type CompareFunctionType<T> = (a: T, b :T)=> 1 | 0 | -1;

export class BinarySearchTree<T> extends BinaryTree<T> implements IBinarySearchTree<T> {
    
    private compareFunction: CompareFunctionType<T> = (a, b) => a==b ? 0 : a>b ? 1 : -1;

    constructor(compareFunction?: CompareFunctionType<T>) {
        super()
        if(compareFunction) {
            this.compareFunction=compareFunction;
        }
    }

    public add(value: T) {
        if(!this._head) {
            this._head = new BinaryTreeNode<T>(value)
        } else {
            this.insertNode(value)
        }
    }

    public get min() {
        let currentNode = this.head;

        while(currentNode.left) {
            currentNode=currentNode.left;
        }

        return currentNode.val;
    }

    public get max() {
        let currentNode = this.head;
        while(currentNode.right) {
            currentNode=currentNode.right;
        }

        return currentNode.val;
    }

    private insertNode(value: T, node: BinaryTreeNode<T>=this.head) {
        const compareResult = this.compareFunction(node.val, value);

        if(compareResult > 0 && !node.left) {
            node.left = new BinaryTreeNode(value, node);
        } else if(compareResult > 0) {
            this.insertNode(value, node.left);
        } else if(compareResult < 0 && !node.right) {
            node.right = new BinaryTreeNode(value, node);
        } else if(compareResult < 0) {
            this.insertNode(value, node.right);
        }
    }
}