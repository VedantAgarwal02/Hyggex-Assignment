import React from 'react'
import styles from './Content.module.css'

const Content = () => {
  return (
    <section className={styles.container}>
          <h2 className={styles.relationsAndFunctions}>
            Relations and Functions ( Mathematics )
          </h2>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent3}>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent4}>
                  <div className={styles.studyParent}>
                    <b className={styles.study}>Study</b>
                    <div className={styles.frameChild} />
                  </div>
                  <div className={styles.quizParent}>
                    <div className={styles.quiz}>Quiz</div>
                    <div className={styles.frameItem} />
                  </div>
                  <div className={styles.testParent}>
                    <div className={styles.test}>Test</div>
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.gameParent}>
                    <div className={styles.game}>Game</div>
                    <div className={styles.lineDiv} />
                  </div>
                  <div className={styles.othersParent}>
                    <div className={styles.others}>Others</div>
                    <div className={styles.frameChild1} />
                  </div>
                </div>
              </div>
              <div className={styles.comp}>
                <div className={styles.maskGroupWrapper}>
                  <div className={styles.maskGroup}>
                    <div className={styles.cardBackWrapper}>
                      <div className={styles.cardBack}>
                        <div className={styles.cardSurface} />
                        <div className={styles.subCard3}>
                          <img className={styles.frameIcon4} alt="" />
                          <div className={styles.x12Wrapper}>
                            <b className={styles.x12}>5x + 12</b>
                          </div>
                          <img className={styles.frameIcon5} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group.svg"
                />
              </div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.vectorIcon}
                  loading="eager"
                  alt=""
                  src="/vector.svg"
                />
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className={styles.b}>01/10</b>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
            </div>
          </div>
        </section>
  )
}

export default Content