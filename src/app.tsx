import React, { FunctionComponent } from "react";

import { PropsWithChildrenOnly } from "./react";
import "./app.scss";

export const App: FunctionComponent = () => {
  return (
    <div className="App-container">
      <Header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload the browser
        </p>
      </Header>
    </div>
  );
};

interface HeaderProps {
  logo?: string;
}

const Header: FunctionComponent<PropsWithChildrenOnly & HeaderProps> = ({
  children,
  logo,
}) => (
  <header className="App-header">
    {logo ? (
      <img src={logo} className="App-logo" alt="logo" />
    ) : (
      "There is no any logo!"
    )}
    {children}
  </header>
);
