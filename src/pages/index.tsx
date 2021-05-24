import { BiRightArrow } from "react-icons/bi";
import Button from "../components/Button";
import CardRecomendacao from "../components/CardRecomendacao";

export default function Home() {

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
