import React, { FunctionComponent } from "react";

import styles from "./game-section.module.scss";

interface GameOverProps {
  isWin: boolean;
  onClick: () => void;
}

export const GameOver: FunctionComponent<GameOverProps> = ({ onClick, isWin }) => {
  return (
    <div onClick={onClick} className={styles.gameOverComponent}>
      {isWin ? "😎" : "🙁"}
    </div>
  );
};
