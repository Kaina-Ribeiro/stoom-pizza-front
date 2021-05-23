import { createServer } from "miragejs"
import { useEffect, useState } from 'react'

import styles from './styles.module.scss';
import { FaCheck } from 'react-icons/fa';
import Button from '../Button';
import Loading from '../Loading';

createServer({
  routes() {
    this.get("/api/recomendacao", () => ({
      recomendacao: {
        id: 1,
        nome: "Pizza Florenza",
        image: "https://www.socialbauru.com.br/wp-content/uploads/2019/04/pizzadem.jpg",
        massa: "Florenza",
        igredientes: "Molho de Tomate, Carne Seca Refogada com Cebola,Catupiry e Azeitonas.",
        preco: 69.9,
        pontos: 50
      },
    }))
    this.passthrough();
  },
})

export default function CardRecomendacao() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/recomendacao')
      .then((res) => res.json())
      .then((json) => setData(json.recomendacao))
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {!data ? <Loading className={styles.card} /> : (
          <>
            <div className={styles.badge}>
              <span>{data.pontos}</span>pontos
            </div>
            <div className={styles.cardHeader}>
              <h3 className={styles.title}>Pizza do dia:</h3>
            </div>

            <div className={styles.cardBody}>
              <div
                className={styles.cardImage}
                style={{backgroundImage: `url('${data.image}')`}}
              />
              <div className={styles.cardContent}>
                <h3>{data.nome}</h3>
                <div className={styles.cardSection}>
                  <span>Massa:</span>
                  <p>{data.massa}</p>
                </div>
                <div className={styles.cardSection}>
                  <span>Ingredientes:</span>
                  <p>{data.ingredientes}</p>
                </div>

                <div className={styles.cardInfo}>
                  <span className={styles.price}>
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(data.preco)}
                  </span>
                  <Button text={'quero!'} icon={<FaCheck />} href={'/'} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className={styles.message}>
        <p>ganhe pontos ao concluir seu pedido <span>*</span></p>
      </div>
    </div>
  )
}