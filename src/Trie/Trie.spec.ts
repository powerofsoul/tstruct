import { Trie, ITrie } from "./Trie";
describe("Trie tests", () => {
    let trie: ITrie;

    beforeEach(()=>{
        trie = new Trie();
    });

    it("I can add words to trie", () => {
        expect(trie.exists("TEST")).toBe(false);
        trie.add("TEST");
        expect(trie.exists("TEST")).toBe(true);
        expect(trie.exists("TEST2")).toBe(false);
        trie.add("TEST2");
        expect(trie.exists("TEST2")).toBe(true);
    });

    it("Complet will show all possible words", ()=>{
        expect(trie.complete("Bla")).toEqual([]);
        trie.add("LongWord");
        expect(trie.complete("Lon")).toEqual(["LongWord"]);
        trie.add("LongLand");
        expect(trie.complete("Lon")).toEqual(["LongWord", "LongLand"]);
        expect(trie.complete("LongW")).toEqual(["LongWord"]);
        expect(trie.complete("Bla")).toEqual([]);
    })

    it("I will not be able to add empty word", () => {
        trie.add("");
        expect(trie.exists("")).toBe(false);
    })
})