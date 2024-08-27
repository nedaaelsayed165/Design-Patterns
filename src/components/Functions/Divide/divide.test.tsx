import { divide } from './divide';

describe('divide', () => {
  it('should return the correct result when dividing two positive numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('should return a negative result when dividing a positive number by a negative number', () => {
    expect(divide(10, -2)).toBe(-5);
  });

  it('should return zero when dividing zero by any positive number', () => {
    expect(divide(0, 5)).toBe(0);
  });

  it('should handle division involving decimal numbers', () => {
    expect(divide(7.5, 2.5)).toBe(3);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Divisor cannot be zero.');
  });
});
