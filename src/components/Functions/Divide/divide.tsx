// تعريف نوع العدد
type Number = number;

// دالة لقسمة رقمين
export function divide(dividend: Number, divisor: Number): number {
  if (divisor === 0) {
    throw new Error("Divisor cannot be zero.");
  }
  return dividend / divisor;
}
