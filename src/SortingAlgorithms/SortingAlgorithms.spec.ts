import { HeapSort, QuickSort } from "./SortingAlgorithms";

describe("Sorting Algorithms tests", () => {
    it.each`
        unsorted                                  | sorted
        ${[9, 1, 5, 2]}                           | ${[1, 2, 5, 9]}
        ${[1, 0, 0, 1]}                           | ${[0, 0, 1, 1]}
        ${[5, 4, 3, 2, 1]}                        | ${[1, 2, 3, 4, 5]}
        ${[-3, -3, -3, -3]}                       | ${[-3, -3, -3, -3]}
        ${[91, 9091, 2, 5, -23, 4, 111, 2, 3, 4]} | ${[-23, 2, 2, 3, 4, 4, 5, 91, 111, 9091]}
    `(
        "Heap Sort tests array $unsorted will become $sorted",
        ({ unsorted, sorted }: { unsorted: number[]; sorted: number[] }) => {
            expect(HeapSort(unsorted)).toStrictEqual(sorted);
        }
    );

    it.each`
        unsorted                                  | sorted
        ${[9, 1, 5, 2]}                           | ${[1, 2, 5, 9]}
        ${[1, 0, 0, 1]}                           | ${[0, 0, 1, 1]}
        ${[5, 4, 3, 2, 1]}                        | ${[1, 2, 3, 4, 5]}
        ${[-3, -3, -3, -3]}                       | ${[-3, -3, -3, -3]}
        ${[91, 9091, 2, 5, -23, 4, 111, 2, 3, 4]} | ${[-23, 2, 2, 3, 4, 4, 5, 91, 111, 9091]}
    `(
        "Quick Sort tests array $unsorted will become $sorted",
        ({ unsorted, sorted }: { unsorted: number[]; sorted: number[] }) => {
            expect(QuickSort(unsorted)).toStrictEqual(sorted);
        }
    );
});
