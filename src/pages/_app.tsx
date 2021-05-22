import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { HeadPage } from '../components/HeadPage'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadPage />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
