import cn from "classnames";
import React, { Suspense, lazy } from "react";

import packageJson from "../../../package.json";
import { stylesContainer } from "./app.module.less";
import { stylesHeader, stylesImage, stylesLink } from "./app.module.scss";

const LazyStrawberryIcon = lazy(() => import("./strawberry"));
export const App = (): React.ReactElement => (
  <div className={stylesContainer}>
    <div className={stylesHeader}>Gratuliere Comrades, It is working pretty well.</div>
    {/*<Suspense fallback={'loading...'}>*/}
    {/*    <LazyStrawberryIcon className={stylesImage} />*/}
    {/*</Suspense>*/}
    <img src="/assets/yuri-gagarin.jpeg" className={stylesImage} />
    <div>
      <a className={cn(stylesLink)} href="https://github.com/glook/webpack-typescript-react" target="_blank">
        &nbsp;
      </a>
    </div>
  </div>
);
