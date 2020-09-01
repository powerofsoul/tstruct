import { UnionFind } from "../UnionFind/UnionFind";
import { PriorityQueue } from "../Queue/PriorityQueue";
import {
    descendingCompareFunction,
    ascendingCompareFunction,
} from "../CompareFunction";

export interface Connection<T> {
    from: T;
    to: T;
    weight?: number;
    bidirectional?: boolean;
}

export interface IGraph<T> {
    add(vertex: T): void;
    connect(connection: Connection<T>): void;
    connectionExists(connection: Connection<T>): boolean;
    exists(node: T): boolean;
    getVertices(): T[];
    getEdges(): Connection<T>[];
    minimumSpanningTree(): Graph<T>;
    shortestPath(from: T, to: T): T[];
}

export class Graph<T> implements IGraph<T> {
    private _adjacencyList: Map<T, PriorityQueue<Connection<T>>>;

    constructor() {
        this._adjacencyList = new Map();
    }

    public add(vertex: T): void {
        if (!this._adjacencyList.has(vertex)) {
            this._adjacencyList.set(vertex, this.newConnectionPriorityQueue());
        }
    }

    public connect(connection: Connection<T>): void {
        if (
            !this._adjacencyList.has(connection.from) ||
            !this._adjacencyList.has(connection.to)
        ) {
            return;
        }

        const edges = this._adjacencyList.get(connection.from);
        for (const e of edges) {
            if (e.from == connection.from && e.to == connection.to) {
                return;
            }
        }

        edges.enqueue(connection);
        if (connection.bidirectional) {
            edges.enqueue({
                ...connection,
                from: connection.to,
                to: connection.from,
            });
        }
    }

    public exists(node: T): boolean {
        return this._adjacencyList.has(node);
    }

    public connectionExists(connection: Connection<T>): boolean {
        if (connection.from == connection.to) return true;

        const check = (currentLocation: T, haveBeenHere: T[] = []) => {
            if (haveBeenHere.includes(currentLocation)) return false;

            if (connection.to == currentLocation) {
                return true;
            }

            for (const edge of this._adjacencyList.get(currentLocation)) {
                if (check(edge.to, [...haveBeenHere, currentLocation])) {
                    return true;
                }
            }

            return false;
        };

        return check(connection.from);
    }

    public getVertices(): T[] {
        const result = [];
        for (const e of this._adjacencyList.keys()) {
            result.push(e);
        }

        return result;
    }

    /**
     * Gets all edges in sorted ascending order
     * @param {T} vertex
     */
    public getEdges(): Connection<T>[] {
        const result = this.newConnectionPriorityQueue();

        for (const edges of this._adjacencyList.values()) {
            for (const edge of edges) {
                result.enqueue(edge);
            }
        }

        return result.toArray();
    }

    /**
     * Gets all edges for vertex in sorted ascending order
     * @param {T} vertex
     */
    public getEdgesFor(vertex: T): Connection<T>[] {
        if (!this._adjacencyList.has(vertex)) return [];

        const result: Connection<T>[] = [];
        const edges = this._adjacencyList.get(vertex);

        for (const edge of edges) {
            result.push(edge);
        }

        return result;
    }

    /**
     * Complexity O(V+E)
     * It uses Kruskal's Algorithm
     * @returns {Graph<T>}
     * @returns {undefined} if graph have unconnected vertices
     */
    public minimumSpanningTree(): Graph<T> {
        const unionFind = new UnionFind<T>();

        const graph = new Graph<T>();
        const nodes = this.getVertices();
        for (const node of nodes) {
            graph.add(node);
            unionFind.add(node);
        }

        const edges = this.getEdges();
        for (const edge of edges) {
            if (!unionFind.isConnected(edge.from, edge.to)) {
                graph.connect(edge);
                unionFind.union(edge.from, edge.to);
            }
        }

        if (unionFind.numberOfComponents != 1) {
            return undefined;
        }

        return graph;
    }

    public shortestPath(from: T, to: T) {
        //TODO Add Dijkstra if there are no negative weights
        return this.bellmanFord(from, to).path;
    }

    /**
     * Requires no negative cycles
     * Complexity O(VE)
     * @param {T} from Vertex
     * @param {T} to Vertex
     */
    private bellmanFord(from: T, to: T) {
        const distances = new Map<T, {distance: number, previous?: T}>();

        const vertices = this.getVertices();
        for (const vertex of vertices) {
            distances.set(vertex, {
                distance: vertex == from ? 0 : Number.MAX_SAFE_INTEGER,
            });
        }

        const edges = this.getEdges();

        for (let i = 0; i < vertices.length; i++) {
            for (const edge of edges) {
                const newDistance = distances.get(edge.from).distance + edge.weight;

                if (newDistance < distances.get(edge.to).distance) {
                    distances.set(edge.to, {
                        distance: newDistance,
                        previous: edge.from
                    });
                }
            }
        }

        for (const e of edges) {
            if (
                distances.get(e.from).distance + e?.weight <
                distances.get(e.to).distance
            ) {
                throw "Negative Cycle Exists in Graph";
            }
        }

        let distance = distances.get(to);
        const path = [];
        while (distance?.previous != undefined) {
            path.unshift(distance.previous);
            distance = distances.get(distance.previous);
        }

        if(path.length > 0) {
            path.push(to);
        }

        return {
            distance: distance.distance,
            path
        };
    }

    private newConnectionPriorityQueue() {
        return new PriorityQueue<Connection<T>>(
            (e) => e?.weight || 0,
            ascendingCompareFunction
        );
    }
}
