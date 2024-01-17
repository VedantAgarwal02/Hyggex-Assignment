import styles from "./Desktop.module.css";
import Navbar from './Navbar.js'
import Route from './Route.js'
import Content from './Content.js'
import Options from "./Options.js";
import FAQ from "./FAQ.js";

const Desktop = () => {
  return (
    <div className={styles.desktop}>
      <Navbar />
      <main className={styles.screen}>
        <Route />
        <Content />
        <Options />
        <FAQ />
      </main>
    </div>
  );
};

export default Desktop;
