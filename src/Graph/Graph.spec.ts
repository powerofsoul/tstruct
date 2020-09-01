import { IGraph, Graph } from "./Graph";
describe("Graphs tests", () => {
    let graph: IGraph<number>;

    beforeEach(() => {
        graph = new Graph();
    });

    it("I can add vertices", () => {
        expect(graph.exists(3)).toBe(false);
        expect(graph.exists(44)).toBe(false);
        graph.add(3);
        expect(graph.exists(3)).toBe(true);
        expect(graph.exists(44)).toBe(false);
        graph.add(44);
        expect(graph.exists(44)).toBe(true);

        expect(graph.getNodes()).toEqual([3, 44]);
    });

    it("I can create connections", () => {
        graph.add(3);
        expect(graph.getEdges()).toEqual([]);
        graph.add(4);
        expect(graph.getEdges()).toEqual([]);
        graph.connect({
            from: 3,
            to: 4,
        });

        expect(graph.getEdges()).toEqual([
            {
                from: 3,
                to: 4,
            },
        ]);

        graph.connect({
            from: 3,
            to: 4,
        });

        expect(graph.getEdges()).toEqual([
            {
                from: 3,
                to: 4,
            },
        ]);

        graph.connect({
            from: 4,
            to: 3,
        });

        expect(graph.getEdges()).toEqual([
            {
                from: 3,
                to: 4,
            },
            {
                from: 4,
                to: 3,
            },
        ]);
    });

    it("I should not be able to connect nonexisting nodes", () => {
        expect(graph.getEdges()).toEqual([]);
        expect(graph.getNodes()).toEqual([]);
        graph.connect({
            from: 3,
            to: 99,
        });
        expect(graph.getEdges()).toEqual([]);
        expect(graph.getNodes()).toEqual([]);
    });

    it("I can add bidirectional edges", () => {
        graph.add(3);
        graph.add(4);

        graph.connect({
            from: 3,
            to: 4,
            bidirectional: true,
        });

        expect(graph.getEdges()).toEqual([
            { from: 3, to: 4, bidirectional: true },
            { from: 4, to: 3, bidirectional: true },
        ]);
    });

    it("I cannot add the same node", () => {
        graph.add(3);
        expect(graph.getNodes()).toEqual([3]);
        graph.add(3);
        expect(graph.getNodes()).toEqual([3]);
    });

    it("Connection exists", () => {
        graph.add(3);
        graph.add(5);

        expect(
            graph.connectionExists({
                from: 3,
                to: 5,
            })
        ).toBe(false);

        graph.add(6);
        graph.connect({
            from: 5,
            to: 6,
        });

        expect(
            graph.connectionExists({
                from: 3,
                to: 5,
            })
        ).toBe(false);

        expect(
            graph.connectionExists({
                from: 5,
                to: 6,
            })
        ).toBe(true);

        expect(
            graph.connectionExists({
                from: 6,
                to: 5,
            })
        ).toBe(false);

        graph.connect({
            from: 3,
            to: 5,
        });

        expect(
            graph.connectionExists({
                from: 3,
                to: 6,
            })
        ).toBe(true);
    });
});
