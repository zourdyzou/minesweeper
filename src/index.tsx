import "@styles/styles.scss";
import "normalize.css/normalize.css";

import { GridComponent } from "@components/grid";
import { Field } from "@helpers/field";
import React from "react";
import { createRoot } from "react-dom/client";

// import { CellComponent } from "@components/grid/cell/cell";
// import { ScoreBoard } from "@components/scoreboard";
// import { App } from "@components/app";
// import { Top } from "@components/top-section";

// import Segment from "react-segment-analytics";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

const MockFieldData: Field = [
  [9, 2, 9, 1, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 1, 0, 1, 9, 1, 1, 9, 1],
  [0, 0, 1, 9, 10, 0, 2, 2, 2, 1, 1, 1],
  [0, 0, 10, 10, 1, 0, 1, 9, 1, 2, 2, 2],
  [0, 1, 1, 2, 2, 9, 1, 1, 1, 0, 0, 0],
  [0, 1, 9, 3, 9, 2, 10, 0, 0, 2, 1, 1],
  [0, 2, 2, 4, 9, 2, 10, 1, 1, 1, 9, 1],
  [0, 1, 9, 2, 1, 1, 1, 9, 1, 2, 2, 2],
  [0, 1, 10, 10, 0, 0, 1, 1, 1, 1, 9, 1],
  [0, 1, 10, 10, 0, 0, 1, 1, 1, 1, 9, 1],
  [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 9, 1],
  [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 9, 1],
];

root.render(
  <React.StrictMode>
    {/*<Segment writeKey={process.env.SEGMENT_WRITE_KEY as string}>*/}
    {/*<App />*/}
    <>
      {/*<Top feature="Flag" firstAction="ctrl" secondAction="click">*/}
      {/*  Minesweeper*/}
      {/*</Top>*/}
      {/*<ScoreBoard time="000" onReset={() => null} levels={["beginner", "intermediate", "expert"]} mines="010" />*/}
      {/*<CellComponent coords={[1, 1]} children={10} onContextMenu={() => null} onClick={() => null} />*/}
      <GridComponent children={MockFieldData} onContextMenu={() => null} onClick={() => null} />
    </>
    {/*</Segment>*/}
  </React.StrictMode>
);
