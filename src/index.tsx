import "@styles/styles.scss";
import "normalize.css/normalize.css";

import { ScoreBoard } from "@components/scoreboard";
// import { App } from "@components/app";
import { Top } from "@components/top-section";
import React from "react";
import { createRoot } from "react-dom/client";

// import Segment from "react-segment-analytics";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

// @ts-ignore
root.render(
  <React.StrictMode>
    {/*<Segment writeKey={process.env.SEGMENT_WRITE_KEY as string}>*/}
    {/*<App />*/}
    <>
      <Top feature="Flag" firstAction="ctrl" secondAction="click">
        Minesweeper
      </Top>
      <ScoreBoard time="000" onReset={() => null} levels={["beginner", "intermediate", "expert"]} mines="010" />
    </>
    {/*</Segment>*/}
  </React.StrictMode>
);
