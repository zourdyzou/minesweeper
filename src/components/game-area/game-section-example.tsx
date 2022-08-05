import { GameArea, WrapperContainer } from "@components/game-area/game-layout";
import { GameOver } from "@components/game-area/game-over";
import { GridComponent } from "@components/grid";
import { ScoreBoard } from "@components/scoreboard";
import { Top } from "@components/top-section";
import { Field, fieldGenerator } from "@helpers/field";
import React, { FunctionComponent } from "react";

export const GameSectionExample: FunctionComponent = () => {
  return (
    <WrapperContainer>
      <Top feature="Flag" firstAction="right click">
        Minesweeper
      </Top>
      <GameArea>
        <ScoreBoard
          time="000"
          mines="000"
          levels={["beginner", "intermediate", "expert"]}
          onReset={() => null}
          onChange={() => null}
        />
        <GameOver onClick={() => null} isWin={true} />
        <GridComponent children={fieldGenerator(10, 0.5) as Field} onClick={() => null} onContextMenu={() => null} />
      </GameArea>
    </WrapperContainer>
  );
};
