import { Cell, Coordinates, Field } from "../field";

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
  return field;
};
