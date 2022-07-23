import React, { FunctionComponent } from "react";

import styles from "./level.module.scss";

export const Level: FunctionComponent<{ levelData: string[] }> = ({ levelData }) => (
  <select className={styles.selectLevel}>
    {levelData.map((item: string) => {
      return (
        <option className={styles.optionLevel} key={item}>
          {item}
        </option>
      );
    })}
  </select>
);
