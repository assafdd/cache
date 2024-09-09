import { LRUCache } from "./lruCache";

describe("LRUCache", () => {
  it("should return the correct values based on the LRU logic", () => {
    const lru = new LRUCache(2);
    lru.put(1, 1);
    lru.put(2, 2);
    expect(lru.get(1)).toBe(1);
    lru.put(3, 3); // evicts key 2
    expect(lru.get(2)).toBe(-1);
    lru.put(4, 4); // evicts key 1
    expect(lru.get(1)).toBe(-1);
    expect(lru.get(3)).toBe(3);
    expect(lru.get(4)).toBe(4);
  });
});
