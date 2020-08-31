export interface Connection<T> {
    from: T;
    to: T;
    weight?: number;
    bidirectional?: boolean;
}

export interface IGraph<T> {
    add(node: T): void;
    connect(connection: Connection<T>): void;
    exists(node: T): boolean;
    getNodes(): T[];
    getEdges(): Connection<T>[];
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

    public getNodes(): T[] {
        const result = [];
        for (var e of this._adjacencyList.keys()) {
            result.push(e);
        }

        return result;
    }

    public getEdges(): Connection<T>[] {
        const result: Connection<T>[] = [];
        for (let e of this._adjacencyList.values()) {
            for (let edge of e.values()) {
                result.push(edge);
            }
        }

        return result;
    }
}
