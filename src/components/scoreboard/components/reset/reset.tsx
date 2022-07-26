import React, { FunctionComponent, useState } from "react";

import styles from "./reset.module.scss";

export interface ResetProps {
  /**
   * Reset action handler
   */
  onReset: () => void;
}

export const ResetButton: FunctionComponent<ResetProps> = ({ onReset }) => {
  const [mouseDown, setMouseDown] = useState(false);

  const onMouseDown = () => setMouseDown(true);
  const onMouseUp = () => setMouseDown(false);

  return (
    <button
      className={styles.resetButton}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      // onMouseEnter={onMouseDown} not sure if we need this event.
      onClick={onReset}
    >
      {mouseDown ? "😯" : "🙂"}
    </button>
  );
};
