import { createServer } from "miragejs"
import { BiRightArrow } from 'react-icons/bi'
import { useEffect, useState } from 'react'

import Button from '../components/Button'
import CardPizza from '../components/CardPizza'
import HeaderPizza from '../components/HeaderPizza'

import Loading from '../components/Loading'

import { usePedido } from '../hooks/Pedido'
import Steps from "../components/Steps"

createServer({
  routes() {
    this.get("/api/recheios", () => ({
      recheios: [
        {
          id: 1,
          image: "/images/pizzaSabores/queijo.png",
          massa: "Queijo",
          detalhes: "Recheio de queijo",
          price: 14
        }, {
          id: 2,
          image: "/images/pizzaSabores/calabresa.jpg",
          massa: "Calabresa",
          detalhes: "Recheio de Calabresa",
          price: 16
        }, {
          id: 3,
          image: "/images/pizzaSabores/brocolis.jpg",
          massa: "Brocolis",
          detalhes: "Recheio de brocolis com bacon",
          price: 19
        }
      ],
    }))
    this.passthrough();
  },
})

const Etapa2 = () => {
  const [recheios, setRecheios] = useState(null);

  const { data, selecionar } = usePedido();
  const selectedRecheio = data?.recheio;

  const handleClick = (recheio) => {
    selecionar('recheio', recheio)
  }

  useEffect(() => {
    fetch('/api/recheios')
      .then((res) => res.json())
      .then((json) => setRecheios(json.recheios))
  }, []);

  return (
    <>
      <Steps step={2} maxSteps={3} etapaText='Selecione o recheio:' />
      {!recheios ? <Loading /> : (
        <div>
          {recheios.map(recheio => (
            <CardPizza
              key={recheio.id}
              image={recheio.image}
              pizzaName={recheio.massa}
              price={recheio.price}
              content={recheio.detalhes}
              checked={selectedRecheio && (recheio.id === selectedRecheio.id)}
              onClick={() => handleClick(recheio)}
            />
          ))}
          <Button
            style={{
              float: 'right',
              margin: '1rem'
            }}
            text={'montar seu pedido'}
            icon={<BiRightArrow />}
            href='/etapa3'
          />
        </div>

      )}

    </>
  )
}

export default Etapa2;
