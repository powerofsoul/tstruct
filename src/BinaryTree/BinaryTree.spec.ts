import { BinaryTree, IBinaryTree } from "../BinaryTree/BinaryTree";

describe("Binary Tree tests", () => {
    let binaryTree: IBinaryTree<number>;

    beforeEach(() => {
        binaryTree = new BinaryTree<number>();
    });

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
    });

    it("Array version matches the tree", () => {
        binaryTree.add(1);
        binaryTree.add(2);
        binaryTree.add(3);
        binaryTree.add(4);

        expect(binaryTree.toArray()).toStrictEqual([1, 2, 3, 4]);
    });

    it.each`
        tree                  | value | exists
        ${[1, 2, 3, 4, 5, 6]} | ${7}  | ${false}
        ${[9, 7, 1, -2, 3]}   | ${7}  | ${true}
        ${[1, 2, 3, 4, 5, 6]} | ${1}  | ${true}
        ${[0, 9, 99, -1, 33]} | ${3}  | ${false}
    `(
        "For $tree value $value valueExists returns $exists",
        ({
            tree,
            value,
            exists,
        }: {
            tree: number[];
            value: number;
            exists: boolean;
        }) => {
            tree.forEach((e) => {binaryTree.add(e)});;
            expect(binaryTree.valueExists(value)).toBe(exists);
        }
    );
});
