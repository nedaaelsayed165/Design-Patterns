// src/components/6Function/Sum/sumIntegersAndFractions.test.tsx
import { sumIntegersAndFractions, Fraction } from './sum';

describe('sumIntegersAndFractions', () => {
  it('should correctly sum integers and fractions', () => {
    const integers = [1, 2, 3, 4];
    const fractions: Fraction[] = [
      { numerator: 1, denominator: 2 },
      { numerator: 3, denominator: 4 }
    ];

    const result = sumIntegersAndFractions(integers, fractions);
    const expected = 10 + 0.5 + 0.75; // 10 (من الأعداد الصحيحة) + 0.5 (من الكسر الأول) + 0.75 (من الكسر الثاني)

    expect(result).toBe(expected);
  });

  it('should throw an error if a fraction has a zero denominator', () => {
    const integers = [1, 2, 3];
    const fractions: Fraction[] = [
      { numerator: 1, denominator: 0 } // هذا كسر غير صالح
    ];

    expect(() => sumIntegersAndFractions(integers, fractions)).toThrow('Denominator cannot be zero.');
  });

  it('should return 0 for empty input arrays', () => {
    const integers: number[] = [];
    const fractions: Fraction[] = [];

    const result = sumIntegersAndFractions(integers, fractions);
    expect(result).toBe(0);
  });
});
