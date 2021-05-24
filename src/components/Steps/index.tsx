import Link from 'next/link';

import HeaderPizza from "../HeaderPizza";

import styles from './styles.module.scss';

interface StepsProps {
  step: number;
  etapaText: string;
  maxSteps: number;
}

const Steps = ({step, etapaText, maxSteps}: StepsProps) => (
  <>
    <div className={styles.containerSteps}>
      <div className={styles.containerLine}>
        {[...Array(maxSteps-1)].map((_, currentStep) =>{
          currentStep += 1;
          return (
            <div
              key={currentStep}
              className={`${styles.lineStep} ${
                currentStep < step
                  ? styles.active
                  : ''
              }`}
            />
          )
        })}
      </div>

      <div className={styles.containerRounded}>
        {[...Array(maxSteps)].map((_, currentStep) => {
          currentStep += 1;
          return (
            <Link href={`/etapa${currentStep}`}>
              <div
                key={currentStep}
                className={`${styles.step} ${
                  currentStep <= step
                    ? styles.active
                    : ''
                }`}
              >
                {currentStep}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
    <HeaderPizza select={etapaText} step={`${step}/${maxSteps}`} />
  </>
)

export default Steps;