import { PedidoProvider } from '../hooks/Pedido'
import { PontosProvider } from '../hooks/Pontos'

const Provider = ({children}: {children: JSX.Element[]}) => (
  <PedidoProvider>
    <PontosProvider>
      {children}
    </PontosProvider>
  </PedidoProvider>
)

export default Provider;