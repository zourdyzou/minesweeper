import "@styles/styles.scss";
import "normalize.css/normalize.css";

import { GameSectionExample } from "@components/game-area";
// import { GridComponent } from "@components/grid";
// import { MockFieldData } from "@helpers/mockData";
import React from "react";
import { createRoot } from "react-dom/client";

// import { ScoreBoard } from "@components/scoreboard";
// import { Top } from "@components/top-section";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/*<Segment writeKey={process.env.SEGMENT_WRITE_KEY as string}>*/}
    <GameSectionExample />
    {/*</Segment>*/}
  </React.StrictMode>
);
