import { AppProps } from 'next/app'

import Provider from '../hooks'

import { Header } from '../components/Header'
import { HeadPage } from '../components/HeadPage'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <HeadPage />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}

export default MyApp
