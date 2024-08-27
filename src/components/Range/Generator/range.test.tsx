import { range } from "./generator"; // قم بتغيير هذا المسار إلى المسار الفعلي لملف range الخاص بك

describe("range function", () => {
  test("should generate numbers from start to end with given step", () => {
    const result = [...range(0, 5, 1)];
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });

  test("should work with different step", () => {
    const result = [...range(0, 10, 2)];
    expect(result).toEqual([0, 2, 4, 6, 8]);
  });

  test("should return an empty array if start is greater than end", () => {
    const result = [...range(5, 0, 1)];
    expect(result).toEqual([]);
  });

  test("should work with negative step", () => {
    const result = [...range(5, 0, -1)];
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });
});
