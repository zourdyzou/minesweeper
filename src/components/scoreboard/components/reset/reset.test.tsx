import { ResetButton } from "@components/scoreboard/components/reset/reset";
import { fireEvent, render, screen } from "@testing-library/react";
import React, { FunctionComponent } from "react";

describe("Reset button test", function () {
  const ResetWithDummyHandlerOnReset: FunctionComponent = () => <ResetButton onReset={() => null} />;

  it("should render elements with default state", function () {
    render(<ResetWithDummyHandlerOnReset />);

    expect(screen.getByRole("button", { name: /🙂/i })).toBeInTheDocument();
  });

  it("onReset handler should be called", function () {
    const onReset = jest.fn();

    render(<ResetButton onReset={onReset} />);
    fireEvent.click(screen.getByRole("button", { name: /🙂/i }));

    expect(onReset).toBeCalled();
  });

  it("should change state when onMouseDown and onMouseUp events happened", function () {
    render(<ResetWithDummyHandlerOnReset />);

    fireEvent.mouseDown(screen.getByRole("button", { name: /🙂/i }));
    expect(screen.getByRole("button", { name: /😯/i })).toBeInTheDocument();

    fireEvent.mouseUp(screen.getByRole("button", { name: /😯/i }));
    expect(screen.getByRole("button", { name: /🙂/i })).toBeInTheDocument();
  });

  it("should change state when onMouseDown and onMouseLeave events happened", function () {
    render(<ResetWithDummyHandlerOnReset />);

    fireEvent.mouseDown(screen.getByRole("button", { name: /🙂/i }));
    expect(screen.getByRole("button", { name: /😯/i })).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByRole("button", { name: /😯/i }));
    expect(screen.getByRole("button", { name: /🙂/i })).toBeInTheDocument();
  });
});
