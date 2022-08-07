import React, { ChangeEvent, FunctionComponent } from "react";

import { Counter, Level, ResetButton } from "./components";
import styles from "./scoreboard.module.scss";

export interface ScoreboardProps {
  /**
   * Timer
   */
  time: string;
  /**
   * Possible game scenarios
   */
  levels: string[];
  /**
   * Action handler when the GameReset button is clicked
   */
  onReset: () => void;
  /**
   * Default selected level
   */
  defaultLevel?: string;
  /**
   * Bombs in the field
   */
  mines: string;
  /**
   * Action handler when select new lvl
   */
  onChangeLevel: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const ScoreBoard: FunctionComponent<ScoreboardProps> = ({
  time,
  mines,
  onReset,
  levels,
  onChangeLevel,
  defaultLevel,
}) => {
  return (
    <div className={styles.wrapperScoreboard}>
      <Counter itemNumber={time} />
      <div>
        <Level onChange={onChangeLevel} levelData={levels} value={defaultLevel} />
        <ResetButton onReset={onReset} />
      </div>
      <Counter itemNumber={mines} />
    </div>
  );
};
