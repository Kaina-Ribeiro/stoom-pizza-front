import { createServer } from "miragejs"
import { useEffect, useState } from 'react'

import CardPizza from '../components/CardPizza'
import Button from '../components/Button'
import {BiRightArrow} from 'react-icons/bi'
import HeaderPizza from "../components/HeaderPizza"

createServer({
  routes() {
    this.get("/api/massas", () => ({
      massas: [
        {
          id: 1,
          image: "https://www.socialbauru.com.br/wp-content/uploads/2019/04/pizzadem.jpg",
          massa: "Nova-Iorquina",
          detalhes: "Frequentemente vendida em fatias grandes e largas, a pizza ao estilo de Nova York tem uma massa mais grossa e é levemente crocante por fora. Dessa forma, são consumidas sem talheres. É bastante comum que as fatias sejam dobradas, facilitando o consumo por parte dos clientes.",
          preco: 10
        }, {
          id: 2,
          image: "https://www.socialbauru.com.br/wp-content/uploads/2019/04/pizzadem.jpg",
          massa: "Siciliana",
          detalhes: "Frequentemente vendida em fatias grandes e largas, a pizza ao estilo de Nova York tem uma massa mais grossa e é levemente crocante por fora. Dessa forma, são consumidas sem talheres. É bastante comum que as fatias sejam dobradas, facilitando o consumo por parte dos clientes.",
          preco: 16
        }, {
          id: 3,
          image: "https://www.socialbauru.com.br/wp-content/uploads/2019/04/pizzadem.jpg",
          massa: "Napolitana",
          detalhes: "Frequentemente vendida em fatias grandes e largas, a pizza ao estilo de Nova York tem uma massa mais grossa e é levemente crocante por fora. Dessa forma, são consumidas sem talheres. É bastante comum que as fatias sejam dobradas, facilitando o consumo por parte dos clientes.",
          preco: 19
        }
      ],
    }))
    this.passthrough();
  },
})

export default function Home() {
  const [massas, setMassas] = useState(null);

  useEffect(() => {
    fetch('/api/massas')
      .then((res) => res.json())
      .then((json) => setMassas(json.massas))
  }, [])

  if (!massas) return <div>loading...</div>;

  return (
    <>
      <HeaderPizza select={'Selecione sua massa:'} step={'1/4'} />
      {massas && (
        <div>
          {massas.map(massa => (
            <CardPizza
              key={massa.id}
              image={massa.image}
              pizzaName={massa.massa}
              price={massa.preco}
              content={massa.detalhes}
            />
          ))}
        </div>
      )}

      <Button text={'montar seu pedido'} icon={<BiRightArrow />} href='/etapa2' />
    </>
  )
}
