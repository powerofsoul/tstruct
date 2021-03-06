import { BinarySearchTree } from "./BinarySearchTree";
import { IBinaryTreeNode, BinaryTreeNode } from "./BinaryTree";

export class AVLTree<T> extends BinarySearchTree<T> {
    public add(value: T) {
       super.add(value, this.balanceNode.bind(this));
    }

    private balanceNode(node: IBinaryTreeNode<T>) {
        const balanceFactor = (node.left?.height() ?? 0) - (node.right?.height() ?? 0);

        if (balanceFactor > 1) {
            const leftBalance = (node.left?.left?.height() ?? 0) - (node.left?.right?.height() ?? 0);
            if (leftBalance > 0) {
                this.rightRotate(node);
            }
            else if (leftBalance < 0) {
                this.leftRightRotate(node);
            }
        }
        else if (balanceFactor <= -1) {
            const rightBalance = (node.right?.right?.height() ?? 0) - (node.right?.left?.height() ?? 0);
            if (rightBalance > 0) {
                this.leftRotate(node);
            }
            else if (rightBalance < 0) {
                this.rightLeftRotate(node);
            }
        }

        if(node.parent){
            this.balanceNode(node.parent);
        }
    }

    public leftRotate(node: IBinaryTreeNode<T>) {
        const isHead = node == this.head;
 
        const tmpParent = node.parent;

        const right = node.right;
        node.right = node.right.left;
        node.parent = right;

        right.parent = tmpParent;
        right.left = node;

        if(isHead) {
            this._head = right;
        } else {
            const side = tmpParent.right?.val == node.val ? "right" : "left";
            tmpParent[side]=right;
        }
    }

    public leftRightRotate(node: IBinaryTreeNode<T>) {
        this.leftRotate(node.left);
        this.rightRotate(node.right);
    }

    public rightRotate(node: IBinaryTreeNode<T>) {
        const isHead = node == this.head || !node.parent;
        const tmpParent = node.parent;

        const left = node.left;
        node.left = node.left.right;
        node.parent = left;
        
        left.parent = tmpParent;
        left.right = node;

        if(isHead){
            this._head = left;
        } else {
            const side = tmpParent.right?.val == node.val ? "right" : "left";
            tmpParent[side]=left;
        }
        
    }

    public rightLeftRotate(node: IBinaryTreeNode<T>) {
        this.rightRotate(node.right);
        this.leftRotate(node);
    }
}
