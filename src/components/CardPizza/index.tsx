import styles from './styles.module.scss';

interface CardPizzaProps {
  image?: string;
  pizzaName: string;
  content: string | JSX.Element;
  price: number;
  checked?: boolean;
  onClick?: () => void;
}

export default function CardPizza({
  image,
  pizzaName,
  content,
  price,
  checked = false,
  onClick: handleClick = () => {}
}: CardPizzaProps) {
  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.cardBody}>
        <div
          className={styles.cardImage}
          style={{backgroundImage: `url('${image}')`}}
        />

        <div className={styles.cardContent}>
          <div className={`${styles.title} ${checked ? styles.checked : ''}`}>
            <h3>{pizzaName}</h3>
            <div />
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
