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

export const emptyFieldGenerator = (size: number, state: Cell = CellState.empty): Field =>
  new Array(size).fill(null).map(() => new Array(size).fill(state));
