import type { FunctionComponent, ReactElement } from "react";
import logo from '../../assets/logo.svg';
import styles from "./App.module.scss";
import type { PropsWithChildrenOnly } from "types/react";


export function App(): ReactElement {
  return (
    <div className={styles.appContainer}>
      <Header logo={logo}>
        <p>
          Edit <code>src/App.tsx</code> and save to reload the browser
        </p>
      </Header>
    </div>
  );
}

type HeaderProps = {
  logo?: string;
};

const Header: FunctionComponent<PropsWithChildrenOnly & HeaderProps> = ({ children, logo }) => (
  <header className={styles.appHeader}>
    {logo ? <img src={logo} className={styles.appLogo} alt="logo" /> : "There is no any logo!"}
    {children}
  </header>
);
