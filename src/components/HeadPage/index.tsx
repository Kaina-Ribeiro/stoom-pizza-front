import Head from 'next/head';

export const HeadPage = ({ title = 'Pizzaria Stoom' }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <title>{title}</title>
    </Head>
  )
}