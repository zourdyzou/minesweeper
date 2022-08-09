import { GameArea, WrapperContainer } from "@components/game-area/game-layout";
import { GameOver } from "@components/game-area/game-over";
import { GridComponent } from "@components/grid";
import { ScoreBoard } from "@components/scoreboard";
import { Top } from "@components/top-section";
import { GameLevels, LevelNames } from "@modules/GameSettings";
import { useGame } from "@modules/GameWithHooks/hooks/use-game";
import React, { FunctionComponent } from "react";

export const GameWithHooks: FunctionComponent = () => {
  const { level, isWin, isGameOver, settings, playerField, onChangeLevelHandler, onClickHandler, onResetHandler } =
    useGame();

  const [, bombs] = settings;

  return (
    <WrapperContainer>
      <Top feature="Flag" firstAction="right click">
        Minesweeper
      </Top>
      <GameArea>
        <ScoreBoard
          time="000"
          mines={String(bombs)}
          defaultLevel={level}
          levels={GameLevels as unknown as string[]}
          onReset={onResetHandler}
          onChangeLevel={({ target: { value: level } }: React.ChangeEvent<HTMLSelectElement>) =>
            onChangeLevelHandler(level as LevelNames)
          }
        />
        {isGameOver && <GameOver onClick={onResetHandler} isWin={isWin} />}
        <GridComponent children={playerField} onClick={onClickHandler} onContextMenu={() => null} />
      </GameArea>
    </WrapperContainer>
  );
};
