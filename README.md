# LRU Cache TypeScript Project

## Objective:

Implement an LRU (Least Recently Used) Cache in TypeScript based on the LeetCode problem:

### Problem Description:

Design a data structure that follows the constraints of a **Least Recently Used (LRU) cache**.

Implement the `LRUCache` class:

- `LRUCache(int capacity)` Initializes the LRU cache with **positive size** `capacity`.
- `int get(int key)` Return the value of the `key` if the key exists, otherwise return `-1`.
- `void put(int key, int value)` Update the value of the `key` if the `key` exists. Otherwise, add the `key-value` pair to the cache. If the number of keys exceeds the `capacity` from this operation, **evict the least recently used key**.

The functions `get` and `put` must each run in **O(1)** average time complexity.

### Instructions:

- Implement the LRU cache in `src/lruCache.ts` according to the problem description above.
- Ensure that your solution runs in O(1) time complexity for both `get` and `put` operations.

### Requirements:

- The solution must be implemented in TypeScript.
- You are expected to write unit tests for your solution in `src/lruCache.test.ts`.

### Example:

```typescript
const lru = new LRUCache(2); // Capacity of 2
lru.put(1, 1); // cache is {1=1}
lru.put(2, 2); // cache is {1=1, 2=2}
lru.get(1); // return 1
lru.put(3, 3); // evicts key 2, cache is {1=1, 3=3}
lru.get(2); // return -1 (not found)
lru.put(4, 4); // evicts key 1, cache is {4=4, 3=3}
lru.get(1); // return -1 (not found)
lru.get(3); // return 3
lru.get(4); // return 4
```
