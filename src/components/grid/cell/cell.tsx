import { Cell as CellType } from "@helpers/field";
import classNames from "classnames";
import React, { FunctionComponent } from "react";

import styles from "./cell.module.scss";

interface CellsType {
  mouseDown: boolean;
  children: CellType;
}

export const CellComponent: FunctionComponent<CellsType> = ({ mouseDown, children }) => {
  switch (children) {
    case 0:
      return <EmptyFrame />;
    case 10:
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
