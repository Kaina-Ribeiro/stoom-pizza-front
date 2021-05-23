import styles from './styles.module.scss';

const Steps = () => {

  return (
    <div className={styles.containerSteps}>
      <div className={styles.containerLine}>
        <div className={styles.lineStep}></div>
        <div className={styles.lineStep}></div>
        <div className={styles.lineStep}></div>
      </div>

      <div className={styles.containerRounded}>
        <div>
          <div className={styles.step}>
            1
          </div>
        </div>
        <div>
          <div className={styles.step}>
            2
          </div>
        </div>

        <div>
          <div className={styles.step}>
            3
          </div>
        </div>

        <div>
          <div className={styles.step}>
            4
          </div>
        </div>

      </div>
    </div>
  )
}

export default Steps;