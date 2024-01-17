import React from 'react'
import styles from './FAQ.module.css'

const FAQ = () => {
  return (
    <section className={styles.container}>
          <h1 className={styles.faqHeading}>FAQ</h1>
          <div className={styles.faqParent}>
            <div className={styles.faq1}>
              <input
                className={styles.canEducationFlashcards}
                placeholder="Can education flashcards be used for all age groups?"
                type="text"
              />
              <img className={styles.downArrow1} alt="" src="/frame-7.svg" />
            </div>
            <div className={styles.faq2}>
              <div className={styles.howDoEducation}>
                How do education flashcards work?
              </div>
              <img className={styles.downArrow2} alt="" src="/frame-7.svg" />
            </div>
            <div className={styles.faq3}>
              <div className={styles.canEducationFlashcards1}>
                Can education flashcards be used for test preparation?
              </div>
              <img className={styles.downArrow3} alt="" src="/frame-7.svg" />
            </div>
          </div>
        </section>
  )
}

export default FAQ