import { CellState, Field } from "../field";
import { checkItemInField, getNeighbours, incrementNeighbours } from "./cells-manipulator";

const { empty, bomb } = CellState;

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
      leftTop: [-1, 1],
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
  });
});
