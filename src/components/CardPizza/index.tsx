import styles from './styles.module.scss';

interface CardPizzaProps {
  image: string;
  pizzaName: string;
  content: string | JSX.Element;
  price: number;
}

export default function CardPizza({
  image,
  pizzaName,
  content,
  price
}: CardPizzaProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <div
          className={styles.cardImage}
          style={{backgroundImage: `url('${image}')`}}
        />

        <div className={styles.cardContent}>
          <div>
            <h3>{pizzaName}</h3>
          </div>
          <div className={styles.cardSection}>
            <span>
              {content}
            </span>
          </div>

          <div className={styles.cardInfo}>
            <span className={styles.price}>
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
