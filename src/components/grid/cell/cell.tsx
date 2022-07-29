import { CellState, Cell as CellType } from "@helpers/field";
import classNames from "classnames";
import React, { FunctionComponent, PropsWithChildren, ReactNode } from "react";

import styles from "./cell.module.scss";

interface CellComponentType {
  mouseDown: boolean;
  children: CellType;
}

export const CellComponent: FunctionComponent<CellComponentType> = ({ mouseDown, children }) => {
  switch (children) {
    case CellState.empty:
      return <EmptyFrame />;
    case CellState.bomb:
      return (
        <BombFrame>
          <span className={styles.bombEntity} />
        </BombFrame>
      );
    case CellState.flag:
      return (
        <ClosedFrame mouseDown={mouseDown}>
          <FlagComponent />
        </ClosedFrame>
      );

    case CellState.weakFlag:
      return (
        <ClosedFrame mouseDown={mouseDown}>
          <WeakFlagComponent />
        </ClosedFrame>
      );
    case CellState.hidden:
      return <ClosedFrame mouseDown={mouseDown} />;
    default:
      return <ClosedFrame mouseDown={mouseDown} />;
  }
};

const ClosedFrame: FunctionComponent<PropsWithChildren<{ mouseDown: boolean }>> = ({ mouseDown, children }) => {
  return (
    <div
      className={classNames(styles.closedFrame, {
        [styles.changedBorderColor]: !mouseDown,
        [styles.transparentClosedFrame]: mouseDown,
      })}
    >
      {children ?? null}
    </div>
  );
};

const EmptyFrame: FunctionComponent = () => {
  return <div className={classNames(styles.closedFrame, styles.emptyFrame)} />;
};

const BombFrame: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return <div className={classNames(styles.closedFrame, styles.emptyFrame, styles.bombFrame)}>{children}</div>;
};

const FlagComponent: FunctionComponent = () => {
  return <div className={styles.flagComponent} />;
};

const WeakFlagComponent: FunctionComponent = () => {
  return <div className={classNames(styles.flagComponent, styles.flagTransparent)} />;
};
