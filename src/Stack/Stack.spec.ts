import { Stack, IStack } from "./Stack";

describe("Stack tests", () => {
    var stack: IStack<number>;

    beforeEach(() => {
        stack = new Stack<number>();
    });

    it.each`
        elements
        ${[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        ${[99, -123, 4, 1, 5, 666, 12, 34, 5]}
    `("I can add elements", ({ elements }: { elements: number[] }) => {
        elements.forEach((e) => {
            stack.push(e);
        });

        elements.reverse().forEach((e) => {
            const stackElement = stack.pop();
            expect(stackElement).toBe(e);
        });
    });

    it("Is Empty is correct", () => {
        expect(stack.isEmpty).toBe(true);
        stack.push(4);
        stack.push(-1);
        expect(stack.isEmpty).toBe(false);
        stack.pop();
        expect(stack.isEmpty).toBe(false);
        stack.pop();
        expect(stack.isEmpty).toBe(true);
    });

    it("Empty stack returns undefined", () => {
        expect(stack.pop()).toBeUndefined();
        stack.push(1);
        expect(stack.pop()).toBe(1);
        expect(stack.pop()).toBeUndefined();
    })
});
