import { Cell, CellState, Coordinates, Field } from "../field";

/**
 * Get neighbour cells indexes
 * @param { Coordinates } coords
 * @return { Record<string, [number, number]>}
 */
export const getNeighbours = ([y, x]: Coordinates): Record<string, [number, number]> => ({
  top: [y - 1, x],
  topRight: [y - 1, x + 1],
  right: [y, x + 1],
  rightBottom: [y + 1, x + 1],
  bottom: [y + 1, x],
  bottomLeft: [y + 1, x - 1],
  left: [y, x - 1],
  leftTop: [y - 1, x - 1],
});

/**
 * Check item in the Field
 * @param { Coordinates } [y, x]
 * @param { Field } length
 * @return boolean
 */
export const checkItemInField = ([y, x]: Coordinates, { length }: Field): boolean =>
  y >= 0 && x >= 0 && length - y > 0 && length - x > 0;

export const incrementNeighbours = (coords: Coordinates, field: Field): Field => {
  const items = getNeighbours(coords);

  for (const [y, x] of Object.values(items)) {
    if (checkItemInField([y, x], field)) {
      const cell = field[y][x];

      if (cell < 8) {
        field[y][x] = (cell + 1) as Cell;
      }
    }
  }

  return field;
};

/**
 * Open cell in the player field using game field info
 * @param {Coords} coords
 * @param {Field} playerField
 * @param {Field} gameField
 * @returns {Field}
 */

export const openCell = (coords: Coordinates, playerField: Field, gameField: Field): Field => {
  const { empty, hidden, bomb } = CellState;

  const [y, x] = coords;
  const gameCell = gameField[y][x];

  if (gameCell === bomb) throw new Error("Game Over!");

  if (gameCell === empty) {
    playerField[y][x] = gameCell;

    const items = getNeighbours(coords);

    for (const [y, x] of Object.values(items)) {
      if (checkItemInField([y, x], gameField)) {
        const scopedGameCell = gameField[y][x];
        const scopedPlayerCell = playerField[y][x];

        if (scopedPlayerCell === hidden && scopedGameCell !== bomb) {
          playerField = openCell([y, x], playerField, gameField);
        }
      }
    }
  }

  playerField[y][x] = gameCell;

  return playerField;
};
