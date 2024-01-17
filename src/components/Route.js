import React from 'react'
import styles from './Route.module.css'

const Route = () => {
  return (
    <div className={styles.container}>
          <div className={styles.child1}>
            <img
              className={styles.homeIcon}
              loading="eager"
              alt=""
              src="/frame.svg"
            />
            <img className={styles.rightArrow} alt="" src="/frame-1.svg" />
            <div className={styles.flashcard}>Flashcard</div>
          </div>
          <div className={styles.child2}>
            <img className={styles.rightArrow2} alt="" src="/frame-2.svg" />
            <div className={styles.mathematics}>Mathematics</div>
            <div className={styles.subChild}>
              <img className={styles.rightArrow3} alt="" src="/frame-2.svg" />
              <div className={styles.relationAndFunction}>
                Relation and Function
              </div>
            </div>
          </div>
        </div>
  )
}

export default Route