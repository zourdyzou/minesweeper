import { act, renderHook } from "@testing-library/react";
import { useMouseDown } from "~hooks/useMouseDown/index";

describe("useMouseDown hook test", function () {
  it("should toggle state after onMouseDown/onMouseUp calls", function () {
    const { result } = renderHook(useMouseDown);

    const [mouseDown, onMouseDown, onMouseUp] = result.current;

    expect(mouseDown).toBe(false);

    act(onMouseDown);
    expect(result.current[0]).toBe(true);

    act(onMouseUp);
    expect(result.current[0]).toBe(false);

    act(onMouseDown);
    expect(result.current[0]).toBe(true);
  });
});
