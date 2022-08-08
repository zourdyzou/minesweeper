import { GameWithHooks } from "@modules/GameWithHooks/GameWithHooks";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("GameWithHooks test cases", function () {
  describe("Render component behaviour", function () {
    it("should render game field by default", function () {
      const { asFragment } = render(<GameWithHooks />);

      expect(screen.getAllByRole("cell")).toHaveLength(81);

      expect(asFragment()).toMatchSnapshot();
    });

    it("should observe onChange handler on game level", async function () {
      render(<GameWithHooks />);

      expect(screen.getAllByRole("cell")).toHaveLength(81);
      await userEvent.selectOptions(screen.getByRole("select-component"), "intermediate");
      expect(screen.getByRole("option", { name: "intermediate" })).toBeEnabled();
      expect(screen.getAllByRole("cell")).toHaveLength(256);

      await userEvent.selectOptions(screen.getByRole("select-component"), "expert");
      expect(screen.getAllByRole("cell")).toHaveLength(484);
    });
  });
});
