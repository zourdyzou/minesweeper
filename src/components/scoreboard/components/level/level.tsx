import React, { ChangeEvent, FunctionComponent } from "react";

import styles from "./level.module.scss";

export const Level: FunctionComponent<{
  levelData: string[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}> = ({ levelData, onChange }) => (
  <select onChange={onChange} className={styles.selectLevel} role="select-component">
    {levelData.map((item: string) => {
      return (
        <option className={styles.optionLevel} key={item}>
          {item}
        </option>
      );
    })}
  </select>
);
