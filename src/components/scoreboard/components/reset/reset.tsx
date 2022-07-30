import { useMouseDown } from "~hooks/useMouseDown";
import React, { FunctionComponent } from "react";

import styles from "./reset.module.scss";

export interface ResetProps {
  /**
   * Reset action handler
   */
  onReset: () => void;
}

export const ResetButton: FunctionComponent<ResetProps> = ({ onReset }) => {
  const [mouseDown, onMouseDown, onMouseUp] = useMouseDown();

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
