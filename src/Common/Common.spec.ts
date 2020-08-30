import { QuickSelect } from "./Common";
import { descendingCompareFunction } from "../CompareFunction";

describe("Common functions tests", () => {
    it.each`
        elements                           | kth  | ascending | result
        ${[1, 9, 3]}                       | ${1} | ${true}   | ${3}
        ${[99, 1, 4, 1, 5, 6, 1, 2, 0, 0]} | ${9} | ${false}  | ${0}
        ${[99, 1, 4, 1, 5, 6, 1, 2, 0, 0]} | ${9} | ${true}   | ${99}
        ${[1000, 1, 5, 99, 5]}             | ${3} | ${false}  | ${5}
        ${[-5, 2, -99, 44, 5, 3]}          | ${0} | ${true}   | ${-99}
        ${[1, 2, 3]}                       | ${3} | ${true}   | ${undefined}
    `(
        "Quick select find the ${kth} element in $elements to be $result",
        ({
            elements,
            kth,
            ascending,
            result,
        }: {
            elements: number[];
            kth: number;
            ascending: boolean;
            result: number;
        }) => {
            if (ascending) {
                expect(QuickSelect(elements, kth)).toBe(result);
            } else {
                expect(
                    QuickSelect(elements, kth, descendingCompareFunction)
                ).toBe(result);
            }
        }
    );
});
