export interface ITrie {
    add(word: string): void;
    exists(word: string): boolean;
    complete(incompleteWord: string): string[];
}

interface TrieNode {
    value: string;
    isWord: boolean;
    children: Map<string, TrieNode>;
}

export class Trie implements ITrie {
    private _map: Map<string, TrieNode>;

    constructor() {
        this._map = new Map();
    }

    public add(word: string): void {
        if (word.length <= 0) return;

        let map = this._map;
        for (let i = 0; i < word.length; i++) {
            const c = word[i];

            if (!map.has(c)) {
                const children = new Map<string, TrieNode>();

                map.set(c, {
                    value: c,
                    children: children,
                    isWord: i == word.length - 1,
                });
                map = children;
            } else {
                map = map.get(c).children;
            }
        }
    }

    public exists(word: string): boolean {
        const leaf = this.findLeaf(word);
        return leaf != undefined && leaf.isWord ? true : false;
    }

    private findLeaf(word: string, map = this._map): TrieNode | undefined {
        const char = word[0];
        if(!map.has(char)) return;

        if (word.length == 1) {
            return map.get(char);
        }

        return this.findLeaf(word.substr(1), map.get(char).children);
    }

    public complete(word: string): string[] {
        const result: string[] = [];
        const leaf = this.findLeaf(word);
        if (leaf == undefined) return result;

        this._complete(leaf, word, result);

        return result;
    }

    private _complete(node: TrieNode, word = "", result: string[] = []) {
        if(node.isWord){
            result.push(word);
        }

        for(const n of node.children) {
            this._complete(n[1], word+n[0], result);
        }
    }
}
