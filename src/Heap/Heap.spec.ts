import { MinHeap, MaxHeap } from "./Heap";

describe("Heap tests", () => {
    let minHeap: MinHeap<number>;
    let maxHeap: MaxHeap<number>;

    beforeEach(() => {
        minHeap = new MinHeap<number>();
        maxHeap = new MaxHeap<number>();
    });

    it.each`
        elements                                       | result
        ${[99, 98, 97, 96, 95, 94, 93]}                | ${[93, 96, 94, 99, 97, 98, 95]}
        ${[7, 6, 5, 4, 3, 2, 1]}                       | ${[1, 4, 2, 7, 5, 6, 3]}
        ${[3, 1, -9, 4, 1, 2, 3, 4, 5, 6, 1, 22, 999]} | ${[-9, 1, 1, 4, 1, 2, 3, 4, 5, 6, 3, 22, 999]}
    `(
        "Min Heap from array $elements becomes $result",
        ({ elements, result }: { elements: number[]; result: number[] }) => {
            elements.forEach((e) => minHeap.add(e));
            expect(minHeap.toArray()).toStrictEqual(result);
        }
    );

    it.each`
        elements                                       | result
        ${[99, 98, 97, 96, 95, 94, 93]}                | ${[99, 98, 97, 96, 95, 94, 93]}
        ${[7, 6, 5, 4, 3, 2, 1]}                       | ${[7, 6, 5, 4, 3, 2, 1]}
        ${[3, 1, -9, 4, 1, 2, 3, 4, 5, 6, 1, 22, 999]} | ${[999, 5, 22, 4, 4, 6, 2, 1, 3, 1, 1, -9, 3]}
    `(
        "Max Heap from array $elements becomes $result",
        ({ elements, result }: { elements: number[]; result: number[] }) => {
            elements.forEach((e) => maxHeap.add(e));
            expect(maxHeap.toArray()).toStrictEqual(result);
        }
    );

    it("Extract Root from MinHeap will make heap still be valid", () => {
        minHeap.add(1);
        minHeap.add(3);
        minHeap.add(6);
        minHeap.add(5);
        minHeap.add(9);
        minHeap.add(8);

        minHeap.extractRoot();
        expect(minHeap.toArray()).toStrictEqual([3, 5, 6, 8, 9])
        minHeap.extractRoot();
        expect(minHeap.toArray()).toStrictEqual([5, 8, 6, 9])
        minHeap.extractRoot();
        expect(minHeap.toArray()).toStrictEqual([6, 8, 9 ])
        minHeap.extractRoot();
        expect(minHeap.toArray()).toStrictEqual([8, 9 ])
        minHeap.extractRoot();
        expect(minHeap.toArray()).toStrictEqual([9])
        minHeap.extractRoot();
        expect(minHeap.toArray()).toStrictEqual([])
        minHeap.extractRoot();
        expect(minHeap.toArray()).toStrictEqual([])
    })
    
    
    it("Extract Root from MaxHeap will make heap still be valid", () => {
        maxHeap.add(1);
        maxHeap.add(3);
        maxHeap.add(6);
        maxHeap.add(5);
        maxHeap.add(9);
        maxHeap.add(8);

        maxHeap.extractRoot();
        expect(maxHeap.toArray()).toStrictEqual([ 8, 6, 3, 1, 5])
        
        maxHeap.extractRoot();
        expect(maxHeap.toArray()).toStrictEqual([6, 5, 3, 1])
        
        maxHeap.extractRoot();
        expect(maxHeap.toArray()).toStrictEqual([5, 1, 3])
        
        maxHeap.extractRoot();
        expect(maxHeap.toArray()).toStrictEqual([3, 1])
        
        maxHeap.extractRoot();
        expect(maxHeap.toArray()).toStrictEqual([1])
        
        maxHeap.extractRoot();
        expect(maxHeap.toArray()).toStrictEqual([])
        
        maxHeap.extractRoot();
        expect(maxHeap.toArray()).toStrictEqual([])
        
    })
});
