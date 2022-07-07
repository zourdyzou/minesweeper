import { incrementNeighbours } from "@helpers/cells";
import { CellState, Field } from "@helpers/field";

const { empty, bomb } = CellState;

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
