import image from "@assets/images/yuri-gagarin.jpeg";
import classNames from "classnames";
import React, { lazy } from "react";

import { stylesContainer, stylesHeader, stylesImage, stylesLink } from "./app.module.scss";

// const LazyStrawberryIcon = lazy(() => import("./strawberry"));

export const App = (): React.ReactElement => (
  <div className={stylesContainer}>
    <div className={stylesHeader}>Gratuliere Comrades, It is working pretty well.</div>
    {/*<Suspense fallback={'loading...'}>*/}
    {/*    <LazyStrawberryIcon className={stylesImage} />*/}
    {/*</Suspense>*/}
    <img src={image} className={stylesImage} alt="yee-haw" />
    <div>
      <a className={classNames(stylesLink)} href="https://github.com/glook/webpack-typescript-react" target="_blank">
        &nbsp;
      </a>
    </div>
  </div>
);

// sphere
