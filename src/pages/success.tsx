import { usePedido } from "../hooks/Pedido"

const Success = () => {
  const {data} = usePedido();

  const soma = () => {
    const a = data;
    let sum = 0;

    for (const key in a) {
      if (a[key]?.price) {
        sum += a[key]?.price;
      }
    }
    return sum;
  }

  return (
    <>
      <h1 style={{color: 'black'}}>Você ganhou 100000 pontos com esse pedido</h1>
      <p style={{color: 'black'}}>Valor total {soma()}</p>
      <div>

      </div>
    </>
  )
}

export default Success
