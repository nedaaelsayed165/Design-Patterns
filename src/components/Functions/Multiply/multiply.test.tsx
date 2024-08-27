import { multiply } from './multiply';

describe('multiply', () => {
  it('should return the correct result when multiplying two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('should return a negative result when multiplying a positive number by a negative number', () => {
    expect(multiply(3, -4)).toBe(-12);
  });

  it('should return zero when multiplying any number by zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should return the correct result when multiplying two negative numbers', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  it('should handle multiplication involving decimal numbers', () => {
    expect(multiply(2.5, 4)).toBe(10);
    expect(multiply(2.5, 0.4)).toBe(1);
  });
});
