import { Legend, LegendProps } from "@components/top-section/legend";
import React, { FunctionComponent, PropsWithChildren } from "react";

import styles from "./top.module.scss";

export const Top: FunctionComponent<PropsWithChildren<LegendProps>> = React.memo(({ children, ...legendProps }) => {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.gameName}>{children}</h1>
      <Legend {...legendProps} />
    </header>
  );
});
