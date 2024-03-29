import { useCallback, useState } from "react";

export type SetMouseDownStatus = () => void;
export type SetMouseUpStatus = () => void;

export const useMouseDown = (): [boolean, SetMouseDownStatus, SetMouseUpStatus] => {
  const [mouseDown, setMouseDown] = useState(false);

  // useDebugValue(`mouseDown: ${mouseDown}`, (str) => `${str} ${new Date().toDateString()}`);

  const onMouseDown = useCallback(
    () => setMouseDown(true),
    // Stryker disable next-line ArrayDeclaration
    []
  );
  const onMouseUp = useCallback(
    () => setMouseDown(false),
    // Stryker disable next-line ArrayDeclaration
    []
  );

  return [mouseDown, onMouseDown, onMouseUp];
};
