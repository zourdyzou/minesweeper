import { resolve } from "path";

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

export const generateFieldWithDefaultState = (size: number, state: Cell = CellState.empty): Field =>
  new Array(size).fill(null).map(() => new Array(size).fill(state));

export const fieldGenerator = (size: number, probability: number): Field => {
  if (probability < 0 || probability > 1) {
    throw new Error("Probability must be between 0 and 1");
  }

  const result: Field = generateFieldWithDefaultState(size);

  // the size grid of the cells
  let unprocessedCells = size * size;
  // cells with bombs included
  let restCellsWithBombs = unprocessedCells * probability;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (restCellsWithBombs === 0) {
        return result;
      }
      if (restCellsWithBombs / unprocessedCells > 0) {
        result[y][x] = CellState.bomb;
        restCellsWithBombs--;
      }
      unprocessedCells--;
    }
  }

  return result;
};
