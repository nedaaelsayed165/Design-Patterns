// src/components/6Function/Sum/sum.tsx

// تصدير نوع عدد كسري
export interface Fraction {
    numerator: number;
    denominator: number;
  }
  
  type Integer = number;
  
  // دالة لتحويل الأعداد الكسرية إلى قيم عشرية
  function fractionToDecimal(fraction: Fraction): number {
    if (fraction.denominator === 0) {
      throw new Error("Denominator cannot be zero.");
    }
    return fraction.numerator / fraction.denominator;
  }
  
  // دالة لجمع الأعداد الصحيحة والكسرية
  export function sumIntegersAndFractions(
    integers: Integer[],
    fractions: Fraction[]
  ): number {
    // جمع الأعداد الصحيحة
    const integerSum = integers.reduce((sum, value) => sum + value, 0);
  
    // تحويل الأعداد الكسرية إلى قيم عشرية وجمعها
    const fractionSum = fractions.reduce(
      (sum, fraction) => sum + fractionToDecimal(fraction),
      0
    );
  
    // إرجاع المجموع الكلي
    return integerSum + fractionSum;
  }
  