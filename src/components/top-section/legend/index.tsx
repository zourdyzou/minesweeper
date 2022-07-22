import React, { FunctionComponent } from "react";

import styles from "./legend.module.scss";

export interface LegendProps {
  /**
   * Feature that should be activated after first+second actions
   */
  feature: string;
  /**
   * First action
   */
  firstAction: string;
  /**
   * Second action
   */
  secondAction?: string;
}

export const Legend: FunctionComponent<LegendProps> = ({ feature, secondAction, firstAction }) => {
  return (
    <legend className={styles.legendParent}>
      <strong>{feature}: </strong>
      <code className={styles.flagComboParent}>
        <span className={styles.firstAction}>{firstAction}</span>
        {secondAction ? <span className={styles.secondAction}> + {secondAction}</span> : null}
      </code>
    </legend>
  );
};
