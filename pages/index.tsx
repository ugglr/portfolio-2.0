import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>carlw.se | Fullstack developer</title>
        <meta
          name="description"
          content="Carl-W. Fullstack developer | React.js | React Native | Node.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fullstack Developer</h1>
      </main>

      <footer className={styles.footer}>carlw.se | Fullstack Developer</footer>
    </div>
  );
};

export default Home;
