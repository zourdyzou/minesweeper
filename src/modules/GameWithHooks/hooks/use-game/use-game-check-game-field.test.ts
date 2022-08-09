import { CellState, Field } from "@helpers/field";
import { useGame } from "@modules/GameWithHooks/hooks/use-game/index";
import { act, renderHook } from "@testing-library/react";

const { bomb: b } = CellState;

const flatWithFilter = (field: Field, cond: number) => field.flat().filter((v) => v === cond);

describe("useGame test cases", () => {
  it("Render hook by default", () => {
    const { result } = renderHook(useGame);
    const { gameField } = result.current;

    expect(flatWithFilter(gameField, b)).toHaveLength(10);
  });
  it("onReset game handler", () => {
    const { result } = renderHook(useGame);
    const { playerField, onClickHandler, onResetHandler } = result.current;

    expect(playerField).toHaveLength(9);

    act(() => onClickHandler([5, 5]));
    act(onResetHandler);

    const { gameField } = result.current;

    expect(flatWithFilter(gameField, b)).toHaveLength(10);
  });
});
