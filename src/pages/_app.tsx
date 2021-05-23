import { AppProps } from 'next/app'

import { PedidoProvider } from '../hooks/Pedido'

import Card from '../components/CardRecomendacao'
import { Header } from '../components/Header'
import { HeadPage } from '../components/HeadPage'
import Steps from '../components/Steps'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadPage />
      <Header />
      <main>
        <Card />
        <PedidoProvider>
          <Steps />
          <Component {...pageProps} />
        </PedidoProvider>
      </main>
    </>
  )
}

export default MyApp
