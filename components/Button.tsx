import { ReactElement } from "react";

import styles from "../styles/Button.module.css";

type Props = {
  title: String;
  type?: "primary" | "secondary";
};
function Button({ title, type }: Props): ReactElement {
  return <button className={styles.base}>{title}</button>;
}

export default Button;
