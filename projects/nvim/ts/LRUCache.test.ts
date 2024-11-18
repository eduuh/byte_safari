
// __tests__/LRUCache.test.ts
import { describe, expect, test, beforeEach } from '@jest/globals';
import LRUCache from './LRUCache';

describe('LRUCache', () => {
  let cache: LRUCache<number, string>;

  beforeEach(() => {
    cache = new LRUCache<number, string>(3);
  });

  test('stores and retrieves values correctly', () => {
    cache.put(1, 'one');
    cache.put(2, 'two');
    cache.put(3, 'three');

    expect(cache.get(1)).toBe('one');
    expect(cache.get(2)).toBe('two');
    expect(cache.get(3)).toBe('three');
  });

  test('evicts least recently used item when capacity is exceeded', () => {
    cache.put(1, 'one');
    cache.put(2, 'two');
    cache.put(3, 'three');
    cache.put(4, 'four'); // Should evict key 1

    expect(cache.get(1)).toBeUndefined();
    expect(cache.get(2)).toBe('two');
    expect(cache.get(3)).toBe('three');
    expect(cache.get(4)).toBe('four');
  });

  test('updates usage order on get', () => {
    cache.put(1, 'one');
    cache.put(2, 'two');
    cache.put(3, 'three');

    cache.get(1); // Key 1 becomes most recently used
    cache.put(4, 'four'); // Should evict key 2

    expect(cache.get(1)).toBe('one');
    expect(cache.get(2)).toBeUndefined();
    expect(cache.get(3)).toBe('three');
    expect(cache.get(4)).toBe('four');
  });

  test('updates usage order on put of existing key', () => {
    cache.put(1, 'one');
    cache.put(2, 'two');
    cache.put(3, 'three');

    cache.put(1, 'ONE'); // Key 1 becomes most recently used and updated
    cache.put(4, 'four'); // Should evict key 2

    expect(cache.get(1)).toBe('ONE');
    expect(cache.get(2)).toBeUndefined();
    expect(cache.get(3)).toBe('three');
    expect(cache.get(4)).toBe('four');
  });

  test('handles non-existent keys gracefully', () => {
    expect(cache.get(999)).toBeUndefined();
  });

  test('works with complex data types as values', () => {
    const complexValue = { id: 1, data: [1, 2, 3] };
    cache.put(1, JSON.stringify(complexValue));

    expect(JSON.parse(cache.get(1)!)).toEqual(complexValue);
  });

  test('handles cache capacity of one', () => {
    cache = new LRUCache<number, string>(1);
    cache.put(1, 'one');
    cache.put(2, 'two'); // Should evict key 1

    expect(cache.get(1)).toBeUndefined();
    expect(cache.get(2)).toBe('two');
  });

  test('handles zero capacity cache', () => {
    cache = new LRUCache<number, string>(0);
    cache.put(1, 'one');

    expect(cache.get(1)).toBeUndefined();
  });

  test('does not exceed capacity when updating existing key', () => {
    cache.put(1, 'one');
    cache.put(2, 'two');
    cache.put(1, 'ONE'); // Update key 1
    cache.put(3, 'three');

    expect(cache.get(1)).toBe('ONE');
    expect(cache.get(2)).toBe('two');
    expect(cache.get(3)).toBe('three');
  });

  test('handles simultaneous puts and gets correctly', () => {
    // Simulate asynchronous puts and gets
    const promises = [];
    for (let i = 0; i < 100; i++) {
      promises.push(
        new Promise<void>((resolve) => {
          cache.put(i, `value${i}`);
          resolve();
        })
      );
      promises.push(
        new Promise<void>((resolve) => {
          cache.get(i - 1);
          resolve();
        })
      );
    }
    return Promise.all(promises).then(() => {
      expect(cache.get(99)).toBe('value99');
    });
  });
});
