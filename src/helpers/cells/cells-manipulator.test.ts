import { CellState, Field } from "../field";
import { checkItemInField, getNeighbours, incrementNeighbours, openCell } from "./cells-manipulator";

const { empty, bomb, hidden } = CellState;

describe("Check neighbours selectors", function () {
  it("should render with [0, 0] as coordinates value", function () {
    expect(getNeighbours([0, 0])).toStrictEqual({
      top: [-1, 0],
      topRight: [-1, 1],
      right: [0, 1],
      rightBottom: [1, 1],
      bottom: [1, 0],
      bottomLeft: [1, -1],
      left: [0, -1],
      leftTop: [-1, -1],
    });
  });

  it("should render with [3, 3] as coordinates value", function () {
    expect(getNeighbours([3, 3])).toStrictEqual({
      top: [2, 3],
      topRight: [2, 4],
      right: [3, 4],
      rightBottom: [4, 4],
      bottom: [4, 3],
      bottomLeft: [4, 2],
      left: [3, 2],
      leftTop: [2, 2],
    });
  });
});

describe("checkItemField fn() test", function () {
  describe("simple cases", function () {
    const field: Field = [[empty]];

    it("should out of y range", function () {
      expect(checkItemInField([1, 0], field)).toBe(false);
    });

    it("should out of x range", function () {
      expect(checkItemInField([0, -1], field)).toBe(false);
    });

    it("should in x and y range", function () {
      expect(checkItemInField([0, 0], field)).toBe(true);
    });
  });

  describe("check big fields", function () {
    const bigField: Field = [
      [empty, empty, empty, empty, empty],
      [empty, empty, empty, empty, empty],
      [empty, empty, empty, empty, empty],
      [empty, empty, empty, empty, empty],
      [empty, empty, empty, empty, empty],
    ]; // 5x5 fields

    it("should ouut of x range", function () {
      expect(checkItemInField([5, 0], bigField)).toBe(false);
    });

    it("should out of x range with negative index", function () {
      expect(checkItemInField([-1, 0], bigField)).toBe(false);
    });

    it("should out of y range", function () {
      expect(checkItemInField([0, 5], bigField)).toBe(false);
    });

    it("should in x and y range", function () {
      expect(checkItemInField([3, 4], bigField)).toBe(true);
    });
  });
});

describe("Check Increment Neighbours on each cells", () => {
  describe("Simple Cases", function () {
    it("should have Field with only one item", function () {
      expect(incrementNeighbours([0, 0], [[bomb]])).toStrictEqual([[bomb]]);
    });

    it("should have Field with size 2x2 with one mines", function () {
      expect(
        incrementNeighbours(
          [0, 0],
          [
            [bomb, empty],
            [empty, empty],
          ]
        )
      ).toStrictEqual([
        [bomb, 1],
        [1, 1],
      ]);
    });

    it("should have Field with size 2x2 with two mines", function () {
      expect(
        incrementNeighbours(
          [0, 0],
          [
            [bomb, empty],
            [empty, bomb],
          ]
        )
      ).toStrictEqual([
        [bomb, 1],
        [1, bomb],
      ]);
    });
  });
});

describe("Open cell action", () => {
  describe("Simple cases with loose", () => {
    it("Open cell with the bomb", () => {
      expect(() =>
        openCell(
          [1, 1],
          [
            [hidden, hidden],
            [hidden, hidden],
          ],
          [
            [1, 1],
            [1, bomb],
          ]
        )
      ).toThrow("Game Over");
    });
  });
  describe("Open cell with number", () => {
    it("Open cell with state == 1", () => {
      const playerField = openCell(
        [1, 1],
        [
          [hidden, hidden, hidden],
          [hidden, hidden, hidden],
          [hidden, hidden, hidden],
        ],
        [
          [1, 1, 0],
          [9, 1, 0],
          [1, 1, 0],
        ]
      );
      expect(playerField).toStrictEqual([
        [hidden, hidden, hidden],
        [hidden, 1, hidden],
        [hidden, hidden, hidden],
      ]);
    });
    it("Open cell with state == 3", () => {
      const playerField = openCell(
        [1, 1],
        [
          [hidden, hidden, hidden],
          [hidden, hidden, hidden],
          [hidden, hidden, hidden],
        ],
        [
          [9, 2, 0],
          [9, 3, 0],
          [9, 2, 0],
        ]
      );
      expect(playerField).toStrictEqual([
        [hidden, hidden, hidden],
        [hidden, 3, hidden],
        [hidden, hidden, hidden],
      ]);
    });
  });
  describe("Open empty cell", () => {
    it("Open empty cell, simple 3*3 case", () => {
      const playerField = openCell(
        [1, 2],
        [
          [hidden, hidden, hidden],
          [hidden, hidden, hidden],
          [hidden, hidden, hidden],
        ],
        [
          [1, 1, 0],
          [9, 1, 0],
          [1, 1, 0],
        ]
      );
      expect(playerField).toStrictEqual([
        [hidden, 1, 0],
        [hidden, 1, 0],
        [hidden, 1, 0],
      ]);
    });
    it("Open empty cell 5*5 case", () => {
      const playerField = openCell(
        [2, 2],
        [
          [hidden, hidden, hidden, hidden, hidden],
          [hidden, hidden, hidden, hidden, hidden],
          [hidden, hidden, hidden, hidden, hidden],
          [hidden, hidden, hidden, hidden, hidden],
          [hidden, hidden, hidden, hidden, hidden],
        ],
        [
          [9, 9, 1, 1, 2],
          [9, 3, 1, 0, 0],
          [1, 1, 0, 1, 1],
          [1, 0, 0, 1, 9],
          [2, 1, 0, 1, 0],
        ]
      );
      expect(playerField).toStrictEqual([
        [hidden, hidden, 1, 1, 2],
        [hidden, 3, 1, 0, 0],
        [1, 1, 0, 1, 1],
        [1, 0, 0, 1, hidden],
        [2, 1, 0, 1, hidden],
      ]);
    });
  });
});
