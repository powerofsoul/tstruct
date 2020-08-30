import { UnionFind, IUnionFind } from "./UnionFind";

describe("Union Find tests", () => {
    let unionFind: IUnionFind<number>;

    beforeEach(() => {
        unionFind = new UnionFind<number>();
    });

    it("Union find adds items correctly", () => {
        expect(unionFind.numberOfComponents).toBe(0);
        unionFind.add(9);
        expect(unionFind.numberOfComponents).toBe(1);

        unionFind.add(-9);
        expect(unionFind.numberOfComponents).toBe(2);

        expect(unionFind.find(-9)).toBe(-9);
        expect(unionFind.find(9)).toBe(9);
        expect(unionFind.isConnected(9, -9)).toBe(false);

        unionFind.union(-9, 9);
        expect(unionFind.numberOfComponents).toBe(1);
        expect(unionFind.find(-9)).toBe(9);
        expect(unionFind.find(9)).toBe(9);
        expect(unionFind.isConnected(-9, 9)).toBe(true);
        expect(unionFind.size(9)).toBe(2);
        expect(unionFind.size(-9)).toBe(2);

        unionFind.add(10);
        expect(unionFind.size(10)).toBe(1);
        expect(unionFind.numberOfComponents).toBe(2);

        unionFind.add(11);
        expect(unionFind.size(11)).toBe(1);
        expect(unionFind.numberOfComponents).toBe(3);
        
        unionFind.union(10, 11);
        expect(unionFind.isConnected(10, 11)).toBe(true);
        expect(unionFind.size(-9)).toBe(2);
        expect(unionFind.size(10)).toBe(2);

        unionFind.union(10, -9);
        expect(unionFind.numberOfComponents).toBe(1);
        expect(unionFind.size(10)).toBe(4);
        expect(unionFind.find(10)).toBe(9);
        expect(unionFind.find(11)).toBe(9);
        expect(unionFind.find(-9)).toBe(9);
        expect(unionFind.find(9)).toBe(9);
    });

    it("Cannot add same item twice", () => {
        unionFind.add(1);
        expect(unionFind.numberOfComponents).toBe(1);
        unionFind.add(1);
        expect(unionFind.numberOfComponents).toBe(1);
        unionFind.add(2);
        expect(unionFind.numberOfComponents).toBe(2);
        unionFind.add(2);
        expect(unionFind.numberOfComponents).toBe(2);
    })
});
