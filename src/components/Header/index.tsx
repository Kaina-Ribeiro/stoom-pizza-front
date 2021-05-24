import styles from './styles.module.scss';

import { usePontos } from "../../hooks/Pontos";

import Brand from '../../images/pizza-slice.svg';
import UserPoints from '../../images/cutlery.svg';

export const Header = () => {
  const {somaPontos} = usePontos();

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
              <br /><span>{somaPontos()}</span> pontos.
            </div>
          </section>
        </nav>
      </div>
    </header>
  )
}