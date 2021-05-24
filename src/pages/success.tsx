import {IoIosArrowForward} from 'react-icons/io'

import Button from '../components/Button';

import { usePedido } from "../hooks/Pedido"

const Success = () => {
  const {data, limparPedido} = usePedido();

  const somaFunc = () => {
    const a = data;
    let sum = 0;

    for (const key in a) {
      if (a[key]?.price) {
        sum += a[key]?.price;
      }
    }
    return sum;
  }

  const soma = somaFunc();

  const somatoria = new Intl.NumberFormat(
      'pt-BR',
      { style: 'currency', currency: 'BRL' }
    )
    .format(soma);

  return (
    <>
      <h1 style={{color: 'black'}}>
        Seu Pedido foi finalizado!
      </h1>

      {soma !== 0 ?
        <h2 style={{color: 'black'}}>
          Valor total <span style={{color: 'var(--green)'}}>{somatoria}</span>
        </h2>
        : null
      }

      <p style={{color: 'black'}}>
        Agora resta apenas aguardar seu pedido.
      </p>
      <Button
        href="/"
        text='Voltar pro Início'
        icon={<IoIosArrowForward />}
        style={{float: 'right', margin: '1rem 0'}}
        onClick={() => limparPedido()}
      />
    </>
  )
}

export default Success
