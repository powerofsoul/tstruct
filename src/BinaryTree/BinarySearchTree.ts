import { BinaryTree, BinaryTreeNode, IBinaryTree } from "./BinaryTree";

export interface IBinarySearchTree<T> extends IBinaryTree<T> {
    readonly min: T;
    readonly max: T;
}

export class BinarySearchTree<T> extends BinaryTree<T> implements IBinarySearchTree<T> {
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
        if(node.val > value && !node.left) {
            node.left = new BinaryTreeNode(value);
        } else if(node.val > value) {
            this.insertNode(value, node.left);
        } else if(!node.right) {
            node.right = new BinaryTreeNode(value);
        } else {
            this.insertNode(value, node.right);
        }
    }
}