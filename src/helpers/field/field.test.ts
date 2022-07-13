import { CellState, fieldGenerator, generateFieldWithDefaultState } from "./field";

const { empty, bomb, hidden } = CellState;

describe("Field Generator", () => {
  describe("emptyFieldGenerator tests", () => {
    it("should go with 2x2", function () {
      expect(generateFieldWithDefaultState(2)).toStrictEqual([
        [empty, empty],
        [empty, empty],
      ]);
    });

    it("should go with 3x3", function () {
      expect(generateFieldWithDefaultState(3)).toStrictEqual([
        [empty, empty, empty],
        [empty, empty, empty],
        [empty, empty, empty],
      ]);
    });

    it("should go with 2x2", function () {
      expect(generateFieldWithDefaultState(3, hidden)).toStrictEqual([
        [hidden, hidden, hidden],
        [hidden, hidden, hidden],
        [hidden, hidden, hidden],
      ]);
    });
  });

  describe("Simple Case", () => {
    it("should throw wrong density", function () {
      const errorText = "Probability must be between 0 and 1";
      expect(() => fieldGenerator(1, -1)).toThrow(errorText);
      expect(() => fieldGenerator(1, 2)).toThrow(errorText);
    });

    it("should have a smallest possible field without mine(bomb)", function () {
      expect(fieldGenerator(1, 0)).toStrictEqual([[empty]]);
    });

    it("should have a BIG field without mine", () => {
      expect(fieldGenerator(10, 0)).toStrictEqual([
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
      ]);
    });

    it("should have a smallest possible field with mine(bomb)", function () {
      expect(fieldGenerator(1, 1)).toStrictEqual([[bomb]]);
    });

    it("should have 2x2 field with mines(bomb)", function () {
      expect(fieldGenerator(2, 1)).toStrictEqual([
        [bomb, bomb],
        [bomb, bomb],
      ]);
    });

    it("should have 2x2 field with 50% probability mines(bomb)", function () {
      const field = fieldGenerator(2, 0.5);
      const flatField = field.flat();

      const cellsWithBombs = flatField.filter((cell) => cell === bomb);
      const cellWithoutBombs = flatField.filter((cell) => cell === 2);

      expect(cellsWithBombs).toHaveLength(2);
      expect(cellWithoutBombs).toHaveLength(2);
    });
  });
});
