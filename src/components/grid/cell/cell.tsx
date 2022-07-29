import { CellState, Cell as CellType, Coordinates } from "@helpers/field";
import classNames from "classnames";
import React, { FunctionComponent, PropsWithChildren, ReactNode } from "react";

import styles from "./cell.module.scss";

interface CellComponentType {
  mouseDown: boolean;
  children: CellType;
}

export interface CellProps {
  /**
   * Cell status based on the CellType
   */
  children: CellType;
  /**
   * Cell coordinates
   */
  coords: Coordinates;
  /**
   * onClick by cell handler
   */
  onClick: (coords: Coordinates) => void;
  /**
   * onContextMenu by cell handler
   */
  onContextMenu: (coords: Coordinates) => void;
}

export interface ComponentsMapProps {
  children: CellType;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  onContextMenu: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
  mouseDown: boolean;
  "data-testid"?: string;
  role: string;
}

/**
 * change the Partial util type
 */
type RevealedProps = Partial<Pick<ComponentsMapProps, "onContextMenu" | "data-testid" | "role">>;

export const CellComponent: FunctionComponent<CellComponentType & CellProps> = ({
  mouseDown,
  children,
  coords,
  ...restProps
}) => {
  const isActiveCell = [CellState.hidden, CellState.mark, CellState.weakMark].includes(children);

  const onClickHandler = () => {
    if (isActiveCell) {
      restProps.onClick(coords);
    }
  };

  switch (children) {
    case CellState.bomb:
      return (
        <BombFrame>
          <span className={styles.bombEntity} />
        </BombFrame>
      );
    case CellState.mark:
      return (
        <ClosedFrame mouseDown={mouseDown}>
          <FlagComponent />
        </ClosedFrame>
      );

    case CellState.weakMark:
      return (
        <ClosedFrame mouseDown={mouseDown}>
          <WeakFlagComponent />
        </ClosedFrame>
      );
    case CellState.hidden:
      return <ClosedFrame mouseDown={mouseDown} />;
    default:
      return <RevealedFrame>{children}</RevealedFrame>;
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

const RevealedFrame: FunctionComponent<PropsWithChildren<RevealedProps>> = ({ children, ...restProps }) => {
  return (
    <div
      {...restProps}
      className={classNames(styles.closedFrame, styles.revealedFrame)}
      style={{
        color: colors[children as CellType] ?? transparent,
      }}
    >
      {children}
    </div>
  );
};

const BombFrame: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return <div className={classNames(styles.closedFrame, styles.revealedFrame, styles.bombFrame)}>{children}</div>;
};

const FlagComponent: FunctionComponent = () => {
  return <div className={styles.flagComponent} />;
};

const WeakFlagComponent: FunctionComponent = () => {
  return <div className={classNames(styles.flagComponent, styles.flagTransparent)} />;
};

const transparent = "rgba(0,0,0,0)";
const colors: { [key in CellType]: string } = {
  0: transparent,
  1: "#2a48ec",
  2: "#2bb13d",
  3: "#ec6561",
  4: "#233db7",
  5: "#a6070f",
  6: "#e400af",
  7: "#906a02",
  8: "#fa0707",
  9: transparent,
  10: transparent,
  11: transparent,
  12: transparent,
};
