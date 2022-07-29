import { CellState, Cell as CellType, Coordinates } from "@helpers/field";
import { useMouseDown } from "~hooks/useMouseDown";
import classNames from "classnames";
import React, { FunctionComponent, PropsWithChildren, ReactNode } from "react";

import styles from "./cell.module.scss";

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
  children?: CellType;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onContextMenu?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onMouseLeave?: () => void;
  mouseDown?: boolean;
  "data-testid"?: string;
  role?: string;
}

type RevealedProps = Pick<ComponentsMapProps, "onContextMenu" | "data-testid" | "role">;

type ExcludeMouseDown = Omit<ComponentsMapProps, "mouseDown">;

export const isActiveCell = (cell: CellType): boolean =>
  [CellState.hidden, CellState.mark, CellState.weakMark].includes(cell);

export const areEqual = (prevProps: CellProps, nextProps: CellProps): boolean => {
  const areEqualCoords = prevProps.coords.filter((coord, index) => nextProps.coords[index] !== coord).length === 0;

  return (
    prevProps.children === nextProps.children &&
    areEqualCoords &&
    prevProps.onClick === nextProps.onClick &&
    prevProps.onContextMenu === nextProps.onContextMenu
  );
};

export const CellComponent: FunctionComponent<CellProps> = ({ coords, children, ...restProps }) => {
  const [mouseDown, onMouseDown, onMouseUp] = useMouseDown();

  const onClick = () => restProps.onClick(coords);

  const onContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    /**
     * Prevent context menu by default
     */
    event.preventDefault();

    if (isActiveCell(children)) {
      restProps.onContextMenu(coords);
    }
  };

  const props = {
    onClick,
    onContextMenu,
    onMouseDown,
    onMouseUp,
    onMouseLeave: onMouseUp,
    mouseDown,
    "data-testid": `${coords}`,
    role: "cell",
  };

  return <ComponentsMap {...props}>{children}</ComponentsMap>;
};

export const ComponentsMap: FunctionComponent<ComponentsMapProps> = ({ children, ...rest }) => {
  const nonActiveCellProps: RevealedProps = {
    onContextMenu: rest.onContextMenu,
    "data-testid": rest["data-testid"],
    role: rest.role,
  };

  switch (children) {
    case CellState.bomb:
      return (
        <BombFrame {...nonActiveCellProps}>
          <div className={styles.bombEntity} data-testid={`bomb_${rest["data-testid"]}`} />
        </BombFrame>
      );
    case CellState.mark:
      return (
        <ClosedFrame {...rest}>
          <FlagComponent data-testid={`flag_${rest["data-testid"]}`} />
        </ClosedFrame>
      );

    case CellState.weakMark:
      return (
        <ClosedFrame {...rest}>
          <WeakFlagComponent data-testid={`weakFlag_${rest["data-testid"]}`} />
        </ClosedFrame>
      );
    case CellState.hidden:
      return <ClosedFrame {...rest} />;
    default:
      return <RevealedFrame {...nonActiveCellProps}>{children}</RevealedFrame>;
  }
};

export const ClosedFrame: FunctionComponent<PropsWithChildren<{ mouseDown?: boolean }>> = ({
  mouseDown,
  children,
  ...restProps
}) => {
  return (
    <div
      {...(restProps as ExcludeMouseDown)}
      className={classNames(styles.closedFrame, {
        [styles.changedBorderColor]: !mouseDown,
        [styles.transparentClosedFrame]: mouseDown,
      })}
    >
      {children ?? null}
    </div>
  );
};

export const RevealedFrame: FunctionComponent<PropsWithChildren<RevealedProps>> = ({ children, ...restProps }) => {
  return (
    <div
      {...(restProps as ExcludeMouseDown)}
      className={classNames(styles.closedFrame, styles.revealedFrame)}
      style={{
        color: colors[children as CellType] ?? transparent,
      }}
    >
      {children}
    </div>
  );
};

export const BombFrame: FunctionComponent<{ children: ReactNode }> = ({ children, ...restProps }) => {
  return (
    <div
      {...(restProps as ExcludeMouseDown)}
      className={classNames(styles.closedFrame, styles.revealedFrame, styles.bombFrame)}
    >
      {children}
    </div>
  );
};

const FlagComponent: FunctionComponent = ({ ...restProps }) => {
  return <div {...(restProps as ExcludeMouseDown)} className={styles.flagComponent} />;
};

const WeakFlagComponent: FunctionComponent = ({ ...restProps }) => {
  return (
    <div {...(restProps as ExcludeMouseDown)} className={classNames(styles.flagComponent, styles.flagTransparent)} />
  );
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
