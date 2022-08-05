import { Level } from "@components/scoreboard/components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("Level component test case", function () {
  it("should render level correctly", function () {
    const onChange = jest.fn();
    const levelData = ["beginner", "intermediate", "expert"];
    const { asFragment } = render(<Level levelData={levelData} onChange={onChange} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should Select level behaviour", async function () {
    const onChange = jest.fn();
    const levelData = ["beginner", "intermediate", "expert"];
    render(<Level levelData={levelData} onChange={onChange} />);

    await userEvent.selectOptions(screen.getByRole("select-component"), "intermediate");
    expect(screen.getByRole("option", { name: "intermediate" })).toBeEnabled();

    await Promise.resolve();
    expect(onChange).toHaveBeenCalled();
  });
});
