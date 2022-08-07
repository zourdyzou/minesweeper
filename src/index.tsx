import "@styles/styles.scss";
import "normalize.css/normalize.css";

import { GameWithHooks } from "@src/modules/GameWithHooks";
import React from "react";
import { createRoot } from "react-dom/client";

// import { ScoreBoard } from "@components/scoreboard";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/*<Segment writeKey={process.env.SEGMENT_WRITE_KEY as string}>*/}
    <GameWithHooks />
    {/*</Segment>*/}
  </React.StrictMode>
);
