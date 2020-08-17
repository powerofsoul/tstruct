import { Queue } from "./Queue";

describe("Queue", ()=>{
    let queue: Queue<number>;

    beforeEach(()=>{
        queue = new Queue<number>();
    })

    it("I can enqueue and dequeue", () => {
        expect(queue.dequeue()).toBeUndefined();
        queue.enqueue(2);
        
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBeUndefined();
    })
});