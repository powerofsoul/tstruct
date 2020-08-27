import { IPriorityQueue, PriorityQueue } from "./PriorityQueue";

interface Patient {
    name: string;
    severity: number;
}

describe("Priority queue tests", () => {
    let priorityQueue: IPriorityQueue<Patient>;

    beforeEach(() => {
        priorityQueue = new PriorityQueue<Patient>((p) => p?.severity);
    });

    it("Queue dequeue the correct item with priority", () => {
        priorityQueue.enqueue({
            name: "Paul",
            severity: 1,
        });

        priorityQueue.enqueue({
            name: "Florin",
            severity: 33,
        });

        priorityQueue.enqueue({
            name: "George",
            severity: 0,
        });

        let highestPriority = priorityQueue.dequeue();
        expect(highestPriority.name).toBe("Florin");

        highestPriority = priorityQueue.dequeue();
        expect(highestPriority.name).toBe("Paul");

        highestPriority = priorityQueue.dequeue();
        expect(highestPriority.name).toBe("George");

        highestPriority = priorityQueue.dequeue();
        expect(highestPriority).toBeUndefined();
    });
});
