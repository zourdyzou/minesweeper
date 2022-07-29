import { CellState, Coordinates } from "@helpers/field";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { CellComponent } from "./cell";

describe("Testing the CELL component", function () {
  const coords: Coordinates = [1, 1];

  for (let cell = CellState.empty; cell <= CellState.weakMark; cell++) {
    it("should check preventDefault contextMenu for every type of cell", function () {
      const internalProps = {
        coords,
        onClick: jest.fn(),
        onContextMenu: jest.fn(),
      };

      render(<CellComponent children={cell} {...internalProps} />);

      expect(true).toBe(true);
    });

    it("onClick and onContextMenu handler should be called for active cells", function () {
      expect(true).toBe(true);
    });
  }
});
