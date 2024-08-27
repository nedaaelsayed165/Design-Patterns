import { range } from '../Generator/generator';
import { RangeIterator  } from './iterator'; 

describe('RangeIterator class', () => {
  test('should generate numbers from start to end with given step', () => {
    const iterator = new RangeIterator(0, 5, 1);
    expect(iterator.next()).toEqual({ value: 0, done: false });
    expect(iterator.next()).toEqual({ value: 1, done: false });
    expect(iterator.next()).toEqual({ value: 2, done: false });
    expect(iterator.next()).toEqual({ value: 3, done: false });
    expect(iterator.next()).toEqual({ value: 4, done: false });
    expect(iterator.next()).toEqual({ value: null, done: true });
  });

  test('should work with different steps', () => {
    const iterator = new RangeIterator(0, 10, 2);
    expect([...iterator]).toEqual([0, 2, 4, 6, 8]);
  });

  test('should return an empty array if start is greater than end', () => {
    const iterator = new RangeIterator(5, 0, 1);
    expect([...iterator]).toEqual([]);
  });

  test('should work with negative steps', () => {
    const iterator = new RangeIterator(5, 0, -1);
    expect([...iterator]).toEqual([5, 4, 3, 2, 1]);
  });

  test('range function should return iterable object', () => {
    const result = [...range(1, 4, 1)];
    expect(result).toEqual([1, 2, 3]);
  });
});
