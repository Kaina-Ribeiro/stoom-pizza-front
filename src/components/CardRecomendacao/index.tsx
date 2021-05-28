import { createServer } from "miragejs"
import { useEffect, useState } from 'react'

import { FaCheck } from 'react-icons/fa';

import { usePontos } from "../../hooks/Pontos";

import Button from '../Button';
import Loading from '../Loading';

import styles from './styles.module.scss';

createServer({
  routes() {
    this.get("/api/recomendacao", () => ({
      recomendacao: {
        id: 1,
        nome: "Pizza Florenza",
        image: "images/napolitana.jpg",
        massa: "Florenza",
        ingredientes: "Molho de Tomate, Carne Seca Refogada com Cebola,Catupiry e Azeitonas.",
        preco: 37.5,
        pontos: 50
      },
    }))
    this.passthrough();
  },
})

export default function CardRecomendacao() {
  const [recomendation, setRecomendation] = useState(null);

  const {adicionarPontos} = usePontos();

  const handleClick = (pontos) => {
    adicionarPontos(pontos);
  }

  useEffect(() => {
    fetch('/api/recomendacao')
      .then((res) => res.json())
      .then((json) => setRecomendation(json.recomendacao))
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {!recomendation ? <Loading className={styles.card} /> : (
          <>
            <div className={styles.badge}>
              <span>{recomendation.pontos}</span>pontos
            </div>
            <div className={styles.cardHeader}>
              <h3 className={styles.title}>Pizza do dia:</h3>
            </div>

            <div className={styles.cardBody}>
              <div
                className={styles.cardImage}
                style={{backgroundImage: `url('${recomendation.image}')`}}
              />
              <div className={styles.cardContent}>
                <h3>{recomendation.nome}</h3>
                <div className={styles.cardSection}>
                  <span>Massa:</span>
                  <p>{recomendation.massa}</p>
                </div>
                <div className={styles.cardSection}>
                  <span>Ingredientes:</span>
                  <p>{recomendation.ingredientes}</p>
                </div>

                <div className={styles.cardInfo}>
                  <span className={styles.price}>
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(recomendation.preco)}
                  </span>
                  <Button
                    text='quero!'
                    icon={<FaCheck />}
                    href='/success'
                    onClick={() => handleClick(recomendation.pontos)}
                  />
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