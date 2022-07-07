import "@styles/styles.scss";
import "normalize.css/normalize.css";

import { App } from "@components/app";
import React from "react";
import { createRoot } from "react-dom/client";
import Segment from "react-segment-analytics";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Segment writeKey={process.env.SEGMENT_WRITE_KEY as string}>
      <App />
    </Segment>
  </React.StrictMode>
);
