import { CellComponent } from "@components/grid/cell/cell";
import { Coordinates, Field } from "@helpers/field";
import React, { FunctionComponent, PropsWithChildren } from "react";

import styles from "./grid.module.scss";

export interface GridProps {
  /**
   * Field data
   */
  children: Field;
  /**
   * onClick handler
   */
  onClick: (coords: Coordinates) => void;
  /**
   * onContextMenu handler
   */
  onContextMenu: (coords: Coordinates) => void;
}

export const GridComponent: FunctionComponent<GridProps> = ({ children, ...restProps }) => {
  return (
    <WrapperContainer size={children.length} role="grid">
      {children.map((row, y) =>
        row.map((cell, x) => {
          return <CellComponent key={`${y}_${x}_${cell}`} children={cell} coords={[y, x]} {...restProps} />;
        })
      )}
    </WrapperContainer>
  );
};

const WrapperContainer: FunctionComponent<PropsWithChildren<{ size: number; role: string }>> = ({
  children,
  size,
  role,
}) => (
  <div
    className={styles.containerWrapper}
    style={{
      gridTemplateColumns: `repeat(${size}, auto)`,
    }}
    role={role}
  >
    {children}
  </div>
);
