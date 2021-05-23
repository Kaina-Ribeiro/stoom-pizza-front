import Link from 'next/link'
import { BiRightArrow } from 'react-icons/bi'
import Button from '../components/Button'
import CardPizza from '../components/CardPizza'
import HeaderPizza from '../components/HeaderPizza'

const Etapa2 = () => {
  const asd =
    'Frequentemente vendida em fatias grandes e largas, a pizza ao\
  estilo de Nova York tem uma massa mais grossa e é levemente\
  crocante por fora. Dessa forma, são consumidas sem talheres. É\
  bastante comum que as fatias sejam dobradas, facilitando o consumo\
  por parte dos clientes.'
    // fetch('')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

  const image = 'https://www.socialbauru.com.br/wp-content/uploads/2019/04/pizzadem.jpg'

  return (
    <>
      <HeaderPizza select={'Selecione o recheio:'} step={'3/4'} />

      <form>
        <CardPizza
          image={image}
          pizzaName="Etapa3"
          price={5}
          content={asd}
        />
        <CardPizza
          image={image}
          pizzaName="Etapa3"
          price={13}
          content={asd}
        />
        <CardPizza
          image={image}
          pizzaName="Etapa3"
          price={111}
          content={asd}
        />
      </form>
      <Button text={'montar seu pedido'} icon={<BiRightArrow />} href='/etapa4' />
    </>
  )
}

export default Etapa2;
