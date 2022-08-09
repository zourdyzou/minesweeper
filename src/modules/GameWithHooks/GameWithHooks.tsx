import { GameArea, WrapperContainer } from "@components/game-area/game-layout";
import { GameOver } from "@components/game-area/game-over";
import { GridComponent } from "@components/grid";
import { ScoreBoard } from "@components/scoreboard";
import { Top } from "@components/top-section";
import { openCell } from "@helpers/cells/cells-manipulator";
import { CellState, Coordinates, Field, fieldGenerator, generateFieldWithDefaultState } from "@helpers/field";
import { GameLevels, GameSettings, LevelNames } from "@modules/GameSettings";
import React, { FunctionComponent, useState } from "react";

export const GameWithHooks: FunctionComponent = () => {
  const [level, setLevel] = useState<LevelNames>("beginner");
  const [size, bombs] = GameSettings[level];

  const [isGameOver, setIsGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);

  const [playerField, setPlayerField] = useState<Field>(generateFieldWithDefaultState(size, CellState.hidden));

  const [gameField, setGameField] = useState<Field>(fieldGenerator(size, bombs / (size * size)));

  const onClickHandler = (coords: Coordinates) => {
    try {
      const newPlayerField = openCell(coords, playerField, gameField);
      setPlayerField([...newPlayerField]);
    } catch (e) {
      setPlayerField([...gameField]);
      setIsGameOver(true);
    }
  };

  const resetHandler = ([size, bombs]: [number, number]) => {
    const newGameField = fieldGenerator(size, bombs / (size * size));
    const newPlayerField = generateFieldWithDefaultState(size, CellState.hidden);

    setGameField([...newGameField]);
    setPlayerField([...newPlayerField]);
    setIsGameOver(false);
    setIsWin(false);
  };

  const onChangeLevelHandler = ({ target: { value: level } }: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(level as LevelNames);
    const newSettings = GameSettings[level as LevelNames];
    resetHandler(newSettings);
  };

  const onResetHandler = () => resetHandler([size, bombs]);

  return (
    <WrapperContainer>
      <Top feature="Flag" firstAction="right click">
        Minesweeper
      </Top>
      <GameArea>
        <ScoreBoard
          time="000"
          mines={String(bombs)}
          levels={GameLevels as unknown as string[]}
          onReset={onResetHandler}
          onChangeLevel={onChangeLevelHandler}
        />
        {isGameOver && <GameOver onClick={onResetHandler} isWin={isWin} />}
        <GridComponent children={playerField} onClick={onClickHandler} onContextMenu={() => null} />
      </GameArea>
    </WrapperContainer>
  );
};
