import { AVLTree } from "./AVLTree";

describe("AVL Tree tests", () => {
    let avlTree: AVLTree<number>;
    beforeEach(() => {
        avlTree = new AVLTree<number>();
    });

    it.each`
        array
        ${[2,4,6,8,10]}
        ${[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        ${[9, 8, 7, 6, 5, 4, 3, 2, 1]}
        ${[1, -1, 2, -2, 3, -3, 4, -4]}
    `(
        "Tree based on array: $array should be balanced each time we add a node",
        ({ array }: { array: number[] }) => {
            array.forEach((e) => {
                avlTree.add(e);
                expect(avlTree.head.isBalanced()).toBe(true);
            });

            expect(avlTree.head.isBalanced()).toBe(true);
        }
    );

    it("Array version matches the tree", () => {
        avlTree.add(1);
        avlTree.add(2);
        avlTree.add(3);
        avlTree.add(-1);

        expect(avlTree.toArray()).toStrictEqual([2, 1, 3, -1]);
    })
});
