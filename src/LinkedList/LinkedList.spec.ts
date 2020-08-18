import { LinkedList } from "./LinkedList";

describe("LinkedList tests", ()=> {
    let linkedList: LinkedList<number>;

    beforeEach(()=> {
        linkedList = new LinkedList<number>();
    });

    it("Item is added to list", () => {
        expect(linkedList.size).toBe(0);
        linkedList.add(1);
        expect(linkedList.size).toBe(1);
        linkedList.add(2);
        expect(linkedList.get(0)).toBe(1);
        expect(linkedList.get(1)).toBe(2);
    })

    it("Can loop on list", () => {
        linkedList.add(3);
        linkedList.add(4);
        linkedList.add(-1);

        const result = [];
        for(let e of linkedList){
            result.push(e);
        }

        expect(result).toStrictEqual([3,4,-1]);
    })

    it("I can remove element", () => {
        linkedList.add(4);
        linkedList.add(5);

        linkedList.remove(0);
        expect(linkedList.get(0)).toBe(5);

        linkedList.add(6);
        expect(linkedList.get(1)).toBe(6);
    })

    it("I can remove first item and list will be empty", () => {
        linkedList.add(1);
        expect(linkedList.get(0)).toBe(1);
        linkedList.remove(0);
        expect(linkedList.get(0)).toBeUndefined();
    })

    it("List will not change if index is invalid", () => {
        linkedList.add(3);
        linkedList.remove(-1);
        expect(linkedList.size).toBe(1);
        expect(linkedList.get(0)).toBe(3);

        linkedList.remove(1);
        expect(linkedList.size).toBe(1);
        expect(linkedList.get(0)).toBe(3);
    })
})