import { CellState, Cell as CellType } from "@helpers/field";
import classNames from "classnames";
import React, { FunctionComponent } from "react";

import styles from "./cell.module.scss";

interface CellComponentType {
  mouseDown: boolean;
  children: CellType;
}

export const CellComponent: FunctionComponent<CellComponentType> = ({ mouseDown, children }) => {
  switch (children) {
    case CellState.empty:
      return <EmptyFrame />;
    case CellState.hidden:
      return <ClosedFrame mouseDown={mouseDown} />;
    default:
      return <ClosedFrame mouseDown={mouseDown} />;
  }
};

const ClosedFrame: FunctionComponent<{ mouseDown: boolean }> = ({ mouseDown }) => {
  return (
    <div
      className={classNames(styles.closedFrame, {
        [styles.changedBorderColor]: !mouseDown,
        [styles.transparentClosedFrame]: mouseDown,
      })}
    />
  );
};

const EmptyFrame: FunctionComponent = () => {
  return <div className={classNames(styles.closedFrame, styles.emptyFrame)} />;
};
