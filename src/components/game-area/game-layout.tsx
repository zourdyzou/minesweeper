import React, { FunctionComponent, PropsWithChildren } from "react";

import styles from "./game-section.module.scss";

export interface Props {
  /**
   * Top component prop
   */
  top: React.ReactNode;
  /**
   * Children = Main game area
   */
  children: React.ReactNode;
}

export const WrapperContainer: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div className={styles.wrapperContainer}>{children}</div>
);

export const GameArea: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div className={styles.gameArea}>{children}</div>
);

export const GameLayout: FunctionComponent<Props> = ({ top, children }) => {
  return (
    <WrapperContainer>
      {top}
      <GameArea>{children}</GameArea>
    </WrapperContainer>
  );
};
