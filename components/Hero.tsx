import styles from "../styles/Hero.module.css";
import Button from "./Button";

function Hero() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Fullstack Developer</h1>
      <h3 className={styles.subtitle}>
        I build software front to back, from web to mobile, mostly with
        Typescript.
      </h3>
      <div className={styles.ctaContainer}>
        <Button title="About" />
        <Button title="Email me!" />
      </div>
    </div>
  );
}

export default Hero;
