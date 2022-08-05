import React, { FunctionComponent, PropsWithChildren } from "react";

import styles from "./game-section.module.scss";

interface GameOverProps {
  isWin: boolean;
  onClick: () => void;
}

export const GameOver: FunctionComponent<GameOverProps> = ({ onClick, isWin }) => {
  return <div className={styles.gameOverComponent}>{isWin ? "😎" : "🙁"}</div>;
};
