import { GameArea, WrapperContainer } from "@components/game-area/game-layout";
import { GameOver } from "@components/game-area/game-over";
import { GridComponent } from "@components/grid";
import { ScoreBoard } from "@components/scoreboard";
import { Top } from "@components/top-section";
import { CellState, generateFieldWithDefaultState } from "@helpers/field";
import { GameLevels, GameSettings, LevelNames } from "@src/modules/GameSettings";
import React, { FunctionComponent, useState } from "react";

export const GameWithHooks: FunctionComponent = () => {
  const [level, setLevel] = useState<LevelNames>("beginner");

  const [size, bombs] = GameSettings[level];

  const playerField = generateFieldWithDefaultState(size, CellState.hidden);

  return (
    <WrapperContainer>
      <Top feature="Flag" firstAction="right click">
        Minesweeper
      </Top>
      <GameArea>
        <ScoreBoard
          time="000"
          mines="000"
          levels={GameLevels as unknown as string[]}
          onReset={() => null}
          onChangeLevel={({ target: { value } }) => setLevel(value as LevelNames)}
        />
        <GameOver onClick={() => null} isWin={true} />
        <GridComponent children={playerField} onClick={() => null} onContextMenu={() => null} />
      </GameArea>
    </WrapperContainer>
  );
};
