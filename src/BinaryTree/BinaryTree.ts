import { Queue } from "../Queue/Queue";

export interface IBinaryTreeNode<T> {
    val: T;
    left?: IBinaryTreeNode<T>;
    right?: IBinaryTreeNode<T>;
    parent?: IBinaryTreeNode<T>;
    parentSide(): "left" | "right";

    copyTo(node?: IBinaryTreeNode<T>): void;
    height(): number;
    isBalanced():boolean;
}

export class BinaryTreeNode<T> implements IBinaryTreeNode<T> {
    val: T;
    left?: IBinaryTreeNode<T>;
    right?: IBinaryTreeNode<T>;
    parent?: IBinaryTreeNode<T>;

    public copyTo(node?: IBinaryTreeNode<T>) {
        if(!node) return;

        node.val=this.val;
        node.left=this.left;
        node.right=this.right;
        node.parent=this.parent;
    }

    public height(node: IBinaryTreeNode<T> = this): number {
        if (!node) {
            return 0;
        }

        const leftHeight = this.height(node.left || null);
        const rightHeight = this.height(node.right || null);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    public parentSide() {
        return this.parent?.right?.val == this.val ? "right" : "left";
    }

    public isBalanced() {
        return Math.abs(this.height(this.left ?? null)-this.height(this.right ?? null)) <= 1;
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
    readonly head?: IBinaryTreeNode<T>;
    add(value: T): void;
    toArray(): T[];
    findNode(value: T): IBinaryTreeNode<T> | undefined;
    valueExists(value: T): boolean;
    remove(value: T): void;
}

export class BinaryTree<T> implements IBinaryTree<T> {
    protected _head: IBinaryTreeNode<T>;

    public get head(): IBinaryTreeNode<T> {
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

    public remove(value: T) {
        const node = this.findNode(value);
        if(node) {
            
            let bottomNode: IBinaryTreeNode<T>;

            if(node.left) {
                bottomNode = this.findBottomNode(node.left);
            } else {
                bottomNode = this.findBottomNode(node.right);
            }

            if(bottomNode) {
                const bottomNodeParentSide = bottomNode.parentSide();
                bottomNode.parent[bottomNodeParentSide] = undefined;
                node.val = bottomNode.val;
            } else {
                const parentSide = node.parentSide();
                node.parent[parentSide] = undefined;
            }
        }
    }

    private findBottomNode(node: IBinaryTreeNode<T>): IBinaryTreeNode<T> {
        if(node.left) return this.findBottomNode(node.left);
        return node;
    }

    public toArray() {
        if(!this.head) return [];

        const result = [];
        const queue = new Queue<IBinaryTreeNode<T>>();
        queue.enqueue(this.head);

        while(!queue.isEmpty) {
            const node = queue.dequeue();
            result.push(node.val);

            if(node.left){
                queue.enqueue(node.left);
            }

            if(node.right){
                queue.enqueue(node.right);
            }
        }

        return result;
    }

    public findNode(value: T, node = this.head): IBinaryTreeNode<T> {
        if(!node) return;

        if(node.val == value) {
            return node;
        }

        const left = this.findNode(value, node.left ?? null);
        if(left) return left;

        const right = this.findNode(value, node.right ?? null);
        return right;
    }
    
    public valueExists(value: T): boolean {
        return this.findNode(value) != undefined;
    }
}
