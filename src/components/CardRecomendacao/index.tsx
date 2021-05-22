import styles from './styles.module.scss';
import { FaCheck } from 'react-icons/fa';

export default function CardRecomendacao() {
  return (
    <div className={styles.card}>

      <div className={styles.cardHeader}>
        <h3 className={styles.title}>Pizza do dia:</h3>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardImage}>
          <div>
            <img src="https://www.socialbauru.com.br/wp-content/uploads/2019/04/pizzadem.jpg" alt="Pizza do dia" />
          </div>
        </div>

        <div className={styles.cardContent}>
          <h3>Pizza Napolitana</h3>
          <div className={styles.cardSection}>
            <span>Massa:</span>
            <p>Napolitana</p>
          </div>
          <div className={styles.cardSection}>
            <span>Ingredientes:</span>
            <p>mussarela, peito de peru, palmito, parmesão, orégano.</p>
          </div>

          <div className={styles.cardInfo}>
            <span className={styles.price}>R$ 37,00</span>
            <button type="button" className={styles.buy}>
              quero!
              <FaCheck />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}