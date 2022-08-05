import "@styles/styles.scss";
import "normalize.css/normalize.css";

import { GridComponent } from "@components/grid";
import { MockFieldData } from "@helpers/mockData";
import React from "react";
import { createRoot } from "react-dom/client";

// import { ScoreBoard } from "@components/scoreboard";
// import { Top } from "@components/top-section";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/*<Segment writeKey={process.env.SEGMENT_WRITE_KEY as string}>*/}
    <>
      {/*<Top feature="Flag" firstAction="ctrl" secondAction="click">*/}
      {/*  Minesweeper*/}
      {/*</Top>*/}
      {/*<ScoreBoard time="000" onReset={() => null} levels={["beginner", "intermediate", "expert"]} mines="010" />*/}
      <GridComponent children={MockFieldData} onContextMenu={() => null} onClick={() => null} />
    </>
    {/*</Segment>*/}
  </React.StrictMode>
);
