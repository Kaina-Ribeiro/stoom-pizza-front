import styles from './styles.module.scss';

import Brand from '../../images/pizza-slice.svg';
import UserPoints from '../../images/cutlery.svg';

export const Header = () => {
  const points = 0;

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <nav>
          <Brand />
          <div>
            <h1 className={styles.title}>
              PizzaStoom
            </h1>
            <h2 className={styles.subtitle}>
              é pizza, sim.
            </h2>
          </div>
          <section className={styles.userContent}>
            <UserPoints />
            <div>
              StoomPoints
              <br /><span>{points}</span> pontos.
            </div>
          </section>
        </nav>
      </div>
    </header>
  )
}