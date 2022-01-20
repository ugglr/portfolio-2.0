import { ReactChild, ReactChildren, ReactElement } from "react";

import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: ReactChildren | ReactChild;
};

function Layout({ children }: Props): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
