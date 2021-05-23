import { createServer } from "miragejs"
import { BiRightArrow } from 'react-icons/bi'
import { useEffect, useState } from 'react';

import Button from '../components/Button'
import CardPizza from '../components/CardPizza'
import HeaderPizza from '../components/HeaderPizza'
import Loading from '../components/Loading'
import { usePedido } from "../hooks/Pedido";

createServer({
  routes() {
    this.get("/api/tamanhos", () => ({
      tamanhos: [
        {
          id: 1,
          size: "Pequena",
          price: 19.99,
          slices: 4
        },
        {
          id: 2,
          size: "Média",
          price: 29.99,
          slices: 6
        },
        {
          id: 3,
          size: "Grande",
          price: 39.99,
          slices: 8
        },
        {
          id: 4,
          size: "Família",
          price: 49.99,
          slices: 12
        }
      ]
    }))
    this.passthrough();
  },
})

const Etapa3 = () => {
  const [tamanhos, setTamanhos] = useState(null);

  const { data, selecionar } = usePedido();
  const selectedTamanho = data?.tamanho;

  const handleClick = (tamanho) => {
    selecionar('tamanho', tamanho);
  }

  useEffect(() => {
    fetch('/api/tamanhos')
      .then((res) => res.json())
      .then((json) => setTamanhos(json.tamanhos))
  }, []);

  return (
    <>
      <HeaderPizza select={'Selecione o tamanho:'} step={'3/3'} />

      {!tamanhos ? <Loading /> : (
        <div>
          {tamanhos.map((tamanho) => (
            <CardPizza
              key={tamanho.id}
              pizzaName={tamanho.size}
              price={tamanho.price}
              content={tamanho.slices}
              checked={selectedTamanho && (tamanho.id === selectedTamanho.id)}
              onClick={() => handleClick(tamanho)}
            />
          ))}
        </div>
      )}
      <Button
        style={{
          float: 'right',
          margin: '1rem'
        }}
        text={'finalizar'}
        icon={<BiRightArrow />}
        href='/success'
      />
    </>
  )
}

export default Etapa3;
