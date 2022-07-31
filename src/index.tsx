import "@styles/styles.scss";
import "normalize.css/normalize.css";

import { GridComponent } from "@components/grid";
import { Field } from "@helpers/field";
import { MockFieldData } from "@helpers/mockData";
import React from "react";
import { createRoot } from "react-dom/client";

// import { CellComponent } from "@components/grid/cell/cell";
// import { ScoreBoard } from "@components/scoreboard";
// import { App } from "@components/app";
// import { Top } from "@components/top-section";

// import Segment from "react-segment-analytics";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

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
