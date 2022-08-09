import { Field } from "@helpers/field";
import { GameLevels, GameSettings } from "@modules/GameSettings";
import { useGame } from "@modules/GameWithHooks/hooks/use-game/index";
import { act, renderHook } from "@testing-library/react";

const [beginner, intermediate, expert] = GameLevels;

const flatWithFilter = (field: Field, cond: number) => field.flat().filter((v) => v === cond);

describe("useGame test cases", function () {
  it("should render hooks behaviour", function () {
    const { result } = renderHook(useGame);
    const { level, isGameOver, isWin, settings, playerField } = result.current;

    expect({ level, isGameOver, isWin, settings }).toStrictEqual({
      level: beginner,
      isGameOver: false,
      isWin: false,
      settings: GameSettings.beginner,
    });
    expect(playerField).toHaveLength(9);
  });

  it("should change level using onChangeGameHandler", function () {
    const { result } = renderHook(useGame);
    const { playerField: beginnerPlayerField, onChangeLevelHandler } = result.current;

    expect(beginnerPlayerField).toHaveLength(9);

    act(() => onChangeLevelHandler(intermediate));
    const { playerField: intermediatePlayerField } = result.current;
    expect(intermediatePlayerField).toHaveLength(16);

    act(() => onChangeLevelHandler(expert));
    const { playerField: expertPlayerField } = result.current;
    expect(expertPlayerField).toHaveLength(22);
  });
});
