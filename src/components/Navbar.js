import React from 'react'
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.container}>
        <img
          className={styles.containerIcon}
          loading="eager"
          alt=""
          src="/component-40@2x.png"
        />
        <div className={styles.options}>
          <div className={styles.optionsParent}>
            <div className={styles.home}>Home</div>
            <div className={styles.flashcard}>Flashcard</div>
            <div className={styles.contact}>Contact</div>
          </div>
          <div className={styles.faq}>FAQ</div>
          <button className={styles.loginWrapper}>
            <div className={styles.login}>Login</div>
          </button>
        </div>
      </header>
  )
}

export default Navbar