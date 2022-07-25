import React, { FunctionComponent } from "react";

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
   * Bombs in the field
   */
  mines: string;
}

export const ScoreBoard: FunctionComponent<ScoreboardProps> = ({ time, mines, onReset, levels }) => {
  return (
    <div className={styles.wrapperScoreboard}>
      <Counter itemNumber={time} />
      <Level levelData={levels} />
      <ResetButton onReset={onReset} />
      <Counter itemNumber={mines} />
    </div>
  );
};
