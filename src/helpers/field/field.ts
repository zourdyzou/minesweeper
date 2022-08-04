import { incrementNeighbours } from "../cells";

export type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Field = Cell[][];
export type Coordinates = [number, number];

export const CellState: Record<string, Cell> = {
  empty: 0,
  bomb: 9,
  hidden: 10,
  mark: 11,
  weakMark: 12,
};

/**
 * Create empty field
 *
 * Example generateFieldWithDefaultState(2)
 * [
 *   [0, 0],
 *   [0, 0],
 * ]
 *
 * @param {number} size
 * @param {Cell} state
 * @returns {Field}
 */
export const generateFieldWithDefaultState = (size: number, state: Cell = CellState.empty): Field =>
  new Array(size).fill(null).map(() => new Array(size).fill(state));

/**
 * Generate field with mines
 * Cell has a range between 0 and 9 where
 * 0 - have no any mine
 * from 0 to 8 - count of mines arrount the cell
 * 9 - special flag for the mine
 *
 * (1/9 ~ 11.11%)
 * Example fieldGenerator(3, 1/9) would return
 * [
 *   [1, 1, 1],
 *   [1, 9, 1],
 *   [1, 1, 1]
 * ]
 *
 * @param {number} size
 * @param {number} probability
 * @return {Field}
 */
export const fieldGenerator = (size: number, probability: number): Field => {
  if (probability < 0 || probability > 1) {
    throw new Error("Probability must be between 0 and 1");
  }

  const result: Field = generateFieldWithDefaultState(size);

  // the size grid of the cells
  let unprocessedCells = size * size;
  // cells filled with bombs
  let restCellsWithBombs = unprocessedCells * probability;

  // Stryker disable next-line EqualityOperator
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      // Stryker disable next-line EqualityOperator
      if (restCellsWithBombs / unprocessedCells > Math.random()) {
        result[y][x] = CellState.bomb;
        incrementNeighbours([y, x], result);
        restCellsWithBombs--;
      }
      unprocessedCells--;
    }
  }

  return result;
};
