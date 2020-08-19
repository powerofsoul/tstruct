import { BinarySearchTree, IBinarySearchTree} from "./BinarySearchTree";
import { IBinaryTree } from "./BinaryTree";

describe("Binary Search Tree Tests", () => {
    let bst: IBinarySearchTree<number>;
    
    beforeEach(()=>{
        bst = new BinarySearchTree<number>();
    });

    it("Values are added to the correct spot", () => {
        bst.add(3);
        bst.add(5);
        bst.add(1);
        bst.add(33);

        expect(bst.head.val).toBe(3);
        expect(bst.head.left.val).toBe(1);

        expect(bst.head.right.val).toBe(5);
        expect(bst.head.right.right.val).toBe(33);
        expect(bst.head.right.left).toBeUndefined();

        expect(bst.head.left.left).toBeUndefined();
        expect(bst.head.left.right).toBeUndefined();
    })

    it("Min, max value are correct", ()=>{
        bst.add(3);
        bst.add(5);
        bst.add(99);
        bst.add(-987);
        bst.add(1);

        expect(bst.min).toBe(-987);
        expect(bst.max).toBe(99);
    })

    it("It is not possible to have duplicate vals", () => {
        bst.add(1);
        bst.add(1);

        expect(bst.head.left).toBeUndefined();
        expect(bst.head.right).toBeUndefined();
    })
})