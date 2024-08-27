// src/utils/subtract.test.ts

import { subtract } from './subtract';

describe('subtract', () => {
  it('should return the correct result when subtracting two positive numbers', () => {
    expect(subtract(10, 5)).toBe(5);
  });

  it('should return a negative result when the subtrahend is greater than the minuend', () => {
    expect(subtract(5, 10)).toBe(-5);
  });

  it('should return zero when subtracting a number from itself', () => {
    expect(subtract(7, 7)).toBe(0);
  });

  it('should handle subtraction involving negative numbers', () => {
    expect(subtract(-3, -2)).toBe(-1);
  });

  it('should handle subtraction with zero', () => {
    expect(subtract(0, 5)).toBe(-5);
    expect(subtract(5, 0)).toBe(5);
  });
});
