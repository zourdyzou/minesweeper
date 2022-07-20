import React, { FunctionComponent } from "react";

import styles from "./legend.module.scss";

export const Legend: FunctionComponent = () => {
  return (
    <legend className={styles.parentContainer}>
      <strong>flag: </strong>

      <code className={styles.flagComboParent}>
        <span className={styles.key}>ctrl</span> + <span className={styles.click}>click</span>
      </code>
    </legend>
  );
};
