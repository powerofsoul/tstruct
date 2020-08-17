import { Dummy } from "./dummy";

describe("Dummy Tests", () => {
    test("Dummy Adds", () => {
        const myDummy = new Dummy();
        expect(myDummy.add(2,2)).toEqual(4);
    })
})