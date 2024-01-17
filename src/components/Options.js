import React from 'react'
import styles from './Options.module.css'

const Options = () => {
  return (
    <section className={styles.container}>
          <div className={styles.chidl1}>
            <div className={styles.wrapperImg1}>
              <img
                className={styles.wrapperImg1Child}
                loading="eager"
                alt=""
                src="/group-1@2x.png"
              />
            </div>
            <div className={styles.publishedByParent}>
              <b className={styles.publishedBy}>Published by</b>
              <img
                className={styles.companyNameIcon}
                alt=""
                src="/component-40-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.chidl2}>
            <img className={styles.plusIcon} alt="" src="/frame-6.svg" />
            <h3 className={styles.createFlashcard}>Create Flashcard</h3>
          </div>
        </section>
  )
}

export default Options