import { QuickSelect } from "./Common";

describe("Common functions tests", () => {
    it.each`
        elements                           | kth  | result
        ${[1, 9, 3]}                       | ${1} | ${3}
        ${[99, 1, 4, 1, 5, 6, 1, 2, 0, 0]} | ${9} | ${99}
        ${[1000, 1, 5, 99, 5]}             | ${3} | ${99}
        ${[-5, 2, -99, 44, 5, 3]}          | ${0} | ${-99}
    `(
        "Quick select find the ${kth} element in $elements to be $result",
        ({
            elements,
            kth,
            result,
        }: {
            elements: number[];
            kth: number;
            result: number;
        }) => {
            expect(QuickSelect(elements, kth)).toBe(result);
        }
    );
});
