import { useEffect } from "react";
import { BiRightArrow } from "react-icons/bi";
import Button from "../components/Button";
import CardRecomendacao from "../components/CardRecomendacao";
import { usePedido } from "../hooks/Pedido";

export default function Home() {
  const {limparPedido} = usePedido();

  useEffect(() => {
    limparPedido();
  }, []);

  return (
    <>
      <div style={{marginTop: '-5rem'}}>
      <CardRecomendacao />
        <Button
          style={{
            float: 'right',
            margin: '1rem'
          }}
          text={'Monte sua pizza!'}
          icon={<BiRightArrow />}
          href='/etapa1'
        />
      </div>
    </>
  )
}
