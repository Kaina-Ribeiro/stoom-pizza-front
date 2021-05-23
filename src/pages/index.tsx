import { createServer } from "miragejs"
import { useEffect, useState } from 'react'

import {BiRightArrow} from 'react-icons/bi'

import CardPizza from '../components/CardPizza'
import Button from '../components/Button'
import HeaderPizza from "../components/HeaderPizza"

import Loading from '../components/Loading';

import { usePedido } from '../hooks/Pedido';

createServer({
  routes() {
    this.get("/api/massas", () => ({
      massas: [
        {
          id: 1,
          image: "https://www.socialbauru.com.br/wp-content/uploads/2019/04/pizzadem.jpg",
          massa: "Nova-Iorquina",
          detalhes: "Frequentemente vendida em fatias grandes e largas, a pizza ao estilo de Nova York tem uma massa mais grossa e é levemente crocante por fora. Dessa forma, são consumidas sem talheres. É bastante comum que as fatias sejam dobradas, facilitando o consumo por parte dos clientes.",
          price: 10
        }, {
          id: 2,
          image: "https://www.socialbauru.com.br/wp-content/uploads/2019/04/pizzadem.jpg",
          massa: "Siciliana",
          detalhes: "Frequentemente vendida em fatias grandes e largas, a pizza ao estilo de Nova York tem uma massa mais grossa e é levemente crocante por fora. Dessa forma, são consumidas sem talheres. É bastante comum que as fatias sejam dobradas, facilitando o consumo por parte dos clientes.",
          price: 16
        }, {
          id: 3,
          image: "https://www.socialbauru.com.br/wp-content/uploads/2019/04/pizzadem.jpg",
          massa: "Napolitana",
          detalhes: "Frequentemente vendida em fatias grandes e largas, a pizza ao estilo de Nova York tem uma massa mais grossa e é levemente crocante por fora. Dessa forma, são consumidas sem talheres. É bastante comum que as fatias sejam dobradas, facilitando o consumo por parte dos clientes.",
          price: 19
        }
      ],
    }))
    this.passthrough();
  },
})

export default function Home() {
  const [massas, setMassas] = useState(null);

  const { data, selecionar } = usePedido();
  const selectedMassa = data?.massa;

  const handleClick = (massa) => {
    selecionar('massa', massa);
  }

  useEffect(() => {
    fetch('/api/massas')
      .then((res) => res.json())
      .then((json) => setMassas(json.massas))
  }, [])

  return (
    <>
      <HeaderPizza select={'Selecione sua massa:'} step={'1/3'} />
      {!massas ? <Loading /> : (
        <div>
          {massas.map(massa => (
            <CardPizza
              key={massa.id}
              image={massa.image}
              pizzaName={massa.massa}
              price={massa.price}
              content={massa.detalhes}
              checked={selectedMassa && (massa.id === selectedMassa.id)}
              onClick={() => handleClick(massa)}
            />
          ))}
        </div>
      )}

      <Button
        style={{
          float: 'right',
          margin: '1rem'
        }}
        text={'montar seu pedido'}
        icon={<BiRightArrow />}
        href='/etapa2'
      />
    </>
  )
}
