import { GameLevels, GameSettings } from "@modules/GameSettings";
import { useGame } from "@modules/GameWithHooks/hooks/use-game/index";
import { renderHook } from "@testing-library/react";

const [beginner, ,] = GameLevels;

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
});
