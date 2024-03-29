import { openCell } from "@helpers/cells/cells-manipulator";
import { CellState, Coordinates, Field, fieldGenerator, generateFieldWithDefaultState } from "@helpers/field";
import { setFlag } from "@helpers/set-flag";
import { GameSettings, LevelNames } from "@modules/GameSettings";
import React, { useState } from "react";

interface ReturnType {
  level: LevelNames;
  isGameOver: boolean;
  isWin: boolean;
  gameField: Field;
  settings: [number, number];
  playerField: Field;
  onContextMenuHandler: (coords: Coordinates) => void;
  onClickHandler: (coords: Coordinates) => void;
  onChangeLevelHandler: (level: LevelNames) => void;
  onResetHandler: () => void;
}

export const useGame = (): ReturnType => {
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

  const onChangeLevelHandler = (level: LevelNames) => {
    setLevel(level);
    const newSettings = GameSettings[level];
    resetHandler(newSettings);
  };

  const onContextMenuHandler = (coords: Coordinates) => {
    const newPlayerField = setFlag(coords, playerField, gameField);
    setPlayerField([...newPlayerField]);
  };

  const onResetHandler = () => resetHandler([size, bombs]);

  return {
    level,
    isGameOver,
    isWin,
    gameField,
    settings: [size, bombs],
    playerField,
    onClickHandler,
    onContextMenuHandler,
    onChangeLevelHandler,
    onResetHandler,
  };
};
