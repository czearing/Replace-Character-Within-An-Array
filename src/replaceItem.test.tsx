import { replace } from "./replaceItem";

describe("replace", () => {
  it("replaces a character", () => {
    expect(replace([1, 2, 3, 1], 1, [2])).toStrictEqual([2, 2, 3, 2]);
  });

  it("handles multiple numbers", () => {
    expect(replace([4, 5, 1, 2, 3], 1, [1, 2, 3])).toStrictEqual([
      4,
      5,
      1,
      2,
      3,
      2,
      3
    ]);
  });

  it("handles strings", () => {
    expect(replace(["a", "b", "c", "d"], "b", ["test"])).toStrictEqual([
      "a",
      "test",
      "c",
      "d"
    ]);
  });

  it("handles null, 0, and undefined values", () => {
    expect(replace([null, undefined, "c", 0], "c", ["test"])).toStrictEqual([
      null,
      undefined,
      "test",
      0
    ]);
  });

  it("handles non existentent searchValue", () => {
    expect(replace([4, 5, 1, 2, 3], 10, [1, 2, 3])).toStrictEqual([
      4,
      5,
      1,
      2,
      3
    ]);
  });

  it("handles null searchValue", () => {
    expect(replace([4, 5, null, 2, 3], null, [1, 2, 3])).toStrictEqual([
      4,
      5,
      1,
      2,
      3,
      2,
      3
    ]);
  });

  it("handles an empty array", () => {
    expect(replace([], 1, [2, 4])).toStrictEqual([]);
  });

  it("handles an array with one item", () => {
    expect(replace([1], 1, [2, 4])).toStrictEqual([2, 4]);
  });
});
