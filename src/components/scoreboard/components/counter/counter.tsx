import React, { FunctionComponent } from "react";

import styles from "./counter.module.scss";

export const Counter: FunctionComponent<{ itemNumber: string }> = ({ itemNumber }) => (
  <div className={styles.parentCounter}>{itemNumber}</div>
);
