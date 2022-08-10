import { ScoreBoard } from "@components/scoreboard/scoreboard";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("Scoreboard test cases", () => {
  const levels = ["beginner", "intermediate", "expert"];

  it("Scoreboard renders correctly", () => {
    const { asFragment } = render(
      <ScoreBoard time="000" levels={levels} onReset={() => null} mines="010" onChangeLevel={() => null} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("Scoreboard select level handler check", async () => {
    const onChange = jest.fn();

    render(<ScoreBoard time="000" levels={levels} onReset={() => null} mines="010" onChangeLevel={onChange} />);

    await userEvent.selectOptions(screen.getByRole("select-component"), "expert");

    expect(screen.getByRole("option", { name: "expert" })).toBeEnabled();

    await Promise.resolve();
    expect(onChange).toHaveBeenCalled();
  });
});
