import { CellState, Coordinates, Field } from "@helpers/field";

/**
 * Set flag to the cell
 * @param {Coordinates} coords
 * @param {Field} playerField
 * @param {Field} gameField
 * @returns {[Field, FlagCounter]}
 */

export const setFlag = (coords: Coordinates, playerField: Field, gameField: Field): Field => {
  const [y, x] = coords;
  const cell = playerField[y][x];

  const { mark, weakMark, hidden } = CellState;

  switch (cell) {
    case mark:
      playerField[y][x] = weakMark;
      break;
    case weakMark:
      playerField[y][x] = hidden;
      break;
    case hidden:
      playerField[y][x] = mark;
      break;
  }

  return playerField;
};
