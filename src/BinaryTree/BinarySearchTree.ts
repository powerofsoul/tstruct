import {
    BinaryTree,
    BinaryTreeNode,
    IBinaryTree,
    IBinaryTreeNode,
} from "./BinaryTree";
import {
    CompareFunctionType,
    descendingCompareFunction,
} from "../CompareFunction";

export interface IBinarySearchTree<T> extends IBinaryTree<T> {
    readonly min: T | undefined;
    readonly max: T | undefined;
}

export class BinarySearchTree<T>
    extends BinaryTree<T>
    implements IBinarySearchTree<T> {
    protected compareFunction: CompareFunctionType<
        T
    > = descendingCompareFunction;

    constructor(compareFunction?: CompareFunctionType<T>) {
        super();
        if (compareFunction) {
            this.compareFunction = compareFunction;
        }
    }

    public add(
        value: T,
        callback: (node: IBinaryTreeNode<T>) => void = undefined
    ) {
        if (!this._head) {
            this._head = new BinaryTreeNode<T>(value);
        } else {
            const newNode = this.insertNode(value, this._head);
            callback?.(newNode);
        }
    }

    public delete(value: T) {
        throw "Not Implemented Yet";
    }

    public get min() {
        if (!this.head) return undefined;

        let currentNode = this.head;

        while (currentNode.left) {
            currentNode = currentNode.left;
        }

        return currentNode.val;
    }

    public get max() {
        if (!this.head) return undefined;

        let currentNode = this.head;
        while (currentNode.right) {
            currentNode = currentNode.right;
        }

        return currentNode.val;
    }

    protected insertNode(
        value: T,
        node: IBinaryTreeNode<T>
    ): IBinaryTreeNode<T> {
        const compareResult = this.compareFunction(node.val, value);

        if (compareResult > 0 && !node.left) {
            node.left = new BinaryTreeNode(value, node);
            return node.left;
        } else if (compareResult > 0 && node.left) {
            return this.insertNode(value, node.left);
        } else if (compareResult < 0 && !node.right) {
            node.right = new BinaryTreeNode(value, node);
            return node.right;
        } else if (compareResult < 0 && node.right) {
            return this.insertNode(value, node.right);
        }
    }
}
