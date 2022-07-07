import image from "@assets/images/yuri-gagarin.jpeg";
import classNames from "classnames";
import React from "react";

import { stylesContainer, stylesHeader, stylesImage, stylesLink } from "./app.module.scss";

// const SVGIconComponent = React.lazy(() => import("@components/icons"));

export const App = (): React.ReactElement => {
  return (
    <div className={stylesContainer}>
      <div className={stylesHeader}>Gratuliere Comrades, It is working pretty well.</div>

      <div>
        <img src={image} className={stylesImage} alt="yee-haw" />

        <a className={classNames(stylesLink)} href="https://github.com/glook/webpack-typescript-react" target="_blank">
          &nbsp;
        </a>

        {/*<React.Suspense fallback={"loading..."}>*/}
        {/*  <SVGIconComponent name="strawberry" className={stylesImage} />*/}
        {/*</React.Suspense>*/}
      </div>
    </div>
  );
};

// sphere
