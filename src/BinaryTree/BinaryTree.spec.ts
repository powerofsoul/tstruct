import { BinaryTree, IBinaryTree } from "../BinaryTree/BinaryTree";

describe("Binary Tree tests", () => {
    let binaryTree: IBinaryTree<number>;

    beforeEach(()=>{
        binaryTree = new BinaryTree<number>();
    })

    it("I can add items", () => {
        expect(binaryTree.head).toBeUndefined();

        binaryTree.add(2);
        expect(binaryTree.head.val).toBe(2);
        expect(binaryTree.head.left).toBeUndefined();
        expect(binaryTree.head.right).toBeUndefined();

        binaryTree.add(-1);
        expect(binaryTree.head.left.val).toBe(-1);
        expect(binaryTree.head.right).toBeUndefined();

        binaryTree.add(99);
        expect(binaryTree.head.left.val).toBe(-1);
        expect(binaryTree.head.right.val).toBe(99);
    })
});