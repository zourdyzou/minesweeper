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
      return (
        <div
          className={classNames(styles.closedFrame, styles.emptyFrame, {
            // [styles.changedBorderColor]: !mouseDown,
            // [styles.transparentClosedFrame]: mouseDown,
          })}
        />
      );
    case 10:
      return (
        <div
          className={classNames(styles.closedFrame, {
            [styles.changedBorderColor]: !mouseDown,
            [styles.transparentClosedFrame]: mouseDown,
          })}
        />
      );
    default:
      return (
        <div
          className={classNames(styles.closedFrame, {
            [styles.changedBorderColor]: !mouseDown,
            [styles.transparentClosedFrame]: mouseDown,
          })}
        />
      );
  }
};
