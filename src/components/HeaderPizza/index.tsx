import styles from './styles.module.scss';

interface HeaderPizzaProps {
  select: string,
  step: string,
};

const HeaderPizza = ({select, step}) => {
  return (
    <>
      <h3 className={styles.header} style={{ color: 'black' }}>Monte sua pizza</h3>
      <div className={styles.container}>
        <h4>{select}</h4>
        <div className={styles.step}>
          {step}
        </div>
      </div>
    </>
  )
}

export default HeaderPizza;