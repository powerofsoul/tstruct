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

    
    it("Peek will not dequeue", () => {
        queue.enqueue(2);
        expect(queue.size).toBe(1);
        expect(queue.peek()).toBe(2);
        expect(queue.size).toBe(1);
    })

    it("Size changes", () => {
        queue.enqueue(2);
        expect(queue.size).toBe(1);
        queue.enqueue(3);
        expect(queue.size).toBe(2);
        queue.dequeue();
        expect(queue.size).toBe(1);
    })

    it("Queue is empty will be true after removing all items", () => {
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.isEmpty).toBe(false);
        queue.dequeue();
        expect(queue.isEmpty).toBe(false);
        queue.dequeue();
        expect(queue.isEmpty).toBe(true);
    })
});