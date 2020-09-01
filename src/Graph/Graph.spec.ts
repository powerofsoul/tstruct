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

        expect(graph.getVertices()).toEqual([3, 44]);
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
        expect(graph.getVertices()).toEqual([]);
        graph.connect({
            from: 3,
            to: 99,
        });
        expect(graph.getEdges()).toEqual([]);
        expect(graph.getVertices()).toEqual([]);
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
        expect(graph.getVertices()).toEqual([3]);
        graph.add(3);
        expect(graph.getVertices()).toEqual([3]);
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

    it("Minimum spanning tree", () => {
        graph.add(1);
        graph.add(2);
        graph.add(3);
        graph.add(4);

        graph.connect({
            from: 1,
            to: 2,
            weight: 2,
        });
        graph.connect({
            from: 2,
            to: 3,
            weight: 4,
        });
        graph.connect({
            from: 3,
            to: 4,
            weight: 5,
        });

        graph.connect({
            from: 1,
            to: 3,
            weight: 1,
        });
        graph.connect({
            from: 2,
            to: 4,
            weight: 10,
        });

        graph.connect({
            from: 4,
            to: 2,
            weight: 11,
        });

        const mst = graph.minimumSpanningTree();
        expect(mst.getEdges()).toEqual([
            { from: 1, to: 3, weight: 1 },
            { from: 1, to: 2, weight: 2 },
            { from: 3, to: 4, weight: 5 },
        ]);

        const nodes = mst.getVertices();
        const firstNode = nodes[0];
        for (const node of nodes) {
            expect(
                mst.connectionExists({
                    from: firstNode,
                    to: node,
                })
            );
        }
    });

    it("Minimum spanning tree will return undefined if there are unconnected vertices", () => {
        graph.add(1);
        graph.add(2);
        graph.add(3);

        graph.connect({ from: 1, to: 2 });
        expect(graph.minimumSpanningTree()).toBe(undefined);
        graph.connect({ from: 1, to: 3 });
        expect(graph.minimumSpanningTree()?.getEdges().length).toBe(2);
    });

    it("Shortest path tests", () => {
        graph.add(1);
        graph.add(2);
        graph.add(3);
        graph.add(4);

        graph.connect({ from: 1, to: 2, weight: 3 });
        graph.connect({ from: 2, to: 3, weight: 1 });
        graph.connect({ from: 3, to: 4, weight: 1 });
        graph.connect({ from: 2, to: 10, weight: 10 });
        expect(graph.shortestPath(1, 4)).toStrictEqual([1, 2, 3, 4]);

        graph.connect({ from: 1, to: 4, weight: 10 });
        expect(graph.shortestPath(1, 4)).toStrictEqual([1, 2, 3, 4]);

        graph.add(5);
        graph.connect({from: 1, to: 5, weight: 1});
        graph.connect({from: 5, to: 4, weight: 1});
        expect(graph.shortestPath(1, 4)).toStrictEqual([1, 5, 4]);
    });
});
