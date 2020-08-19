import { BinaryTree, BinaryTreeNode } from "./BinaryTree";

export class BinarySearchTree<T> extends BinaryTree<T> {
    add(value: T) {
        if(!this._head) {
            this._head = new BinaryTreeNode<T>(value)
        } else {
            this.insertNode(value)
        }
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