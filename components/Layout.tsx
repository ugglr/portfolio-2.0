import { ReactChild, ReactChildren, ReactElement } from "react";

import styles from "../styles/Layout.module.css";
import Footer from "./Footer";

type Props = {
  children: ReactChildren | ReactChild;
};

function Layout({ children }: Props): ReactElement {
  return (
    <div className={styles.container}>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
