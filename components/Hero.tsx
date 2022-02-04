import styles from "../styles/Hero.module.css";
import Button from "./Button";

function Hero() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Fullstack</h1>
      <h1 className={styles.title}>Developer</h1>

      <h3 className={styles.subtitle}>
        I build software front to back, from web to mobile.
      </h3>
      <div className={styles.ctaContainer}>
        <Button title="Email me" />
      </div>
    </div>
  );
}

export default Hero;
