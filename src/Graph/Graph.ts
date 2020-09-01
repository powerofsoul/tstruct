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
    add(node: T): void;
    connect(connection: Connection<T>): void;
    connectionExists(connection: Connection<T>): boolean;
    exists(node: T): boolean;
    getNodes(): T[];
    getEdges(): Connection<T>[];
    minimumSpanningTree(): Graph<T>;
}

export class Graph<T> implements IGraph<T> {
    private _adjacencyList: Map<T, Map<T, Connection<T>>>;

    constructor() {
        this._adjacencyList = new Map();
    }

    public add(node: T): void {
        if (!this._adjacencyList.has(node)) {
            this._adjacencyList.set(node, new Map());
        }
    }

    public connect(connection: Connection<T>): void {
        if (
            !this._adjacencyList.has(connection.from) ||
            !this._adjacencyList.has(connection.to)
        ) {
            return;
        }

        this._adjacencyList.get(connection.from).set(connection.to, connection);
        if (connection.bidirectional) {
            this._adjacencyList.get(connection.to).set(connection.from, {
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
        if(connection.from == connection.to) return true;

        const check = (currentLocation: T, haveBeenHere: T[] = []) => {
            if (haveBeenHere.includes(currentLocation)) return false;

            if (connection.to == currentLocation) {
                return true;
            }

            for (let edge of this._adjacencyList
                .get(currentLocation)
                .values()) {
                if (check(edge.to, [...haveBeenHere, currentLocation])) {
                    return true;
                }
            }

            return false;
        };

        return check(connection.from);
    }

    public getNodes(): T[] {
        const result = [];
        for (var e of this._adjacencyList.keys()) {
            result.push(e);
        }

        return result;
    }

    public getEdges(): Connection<T>[] {
        const result = new PriorityQueue<Connection<T>>(
            (c) => c?.weight || 0,
            ascendingCompareFunction
        );

        for (let e of this._adjacencyList.values()) {
            for (let edge of e.values()) {
                result.enqueue(edge);
            }
        }

        return result.toArray();
    }

    /**
     * Complexity O(V+E)
     * It uses Kruskal's Algorithm
     * @returns {Graph<T>} 
     * @returns undefined if graph have unconnected vertices
     */
    public minimumSpanningTree(): Graph<T> {
        const unionFind = new UnionFind<T>();

        const graph = new Graph<T>();
        const nodes = this.getNodes();
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

        if(unionFind.numberOfComponents != 1) {
            return undefined;
        }

        return graph;
    }
}
