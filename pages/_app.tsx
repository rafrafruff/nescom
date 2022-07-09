import Head from 'next/head'
import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Nescom RD, comunicación efectiva para nuestros clientes.</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="NextJS app" />
        <meta name="keywords" content="NextJS, TypeScript, Tailwind" />
        <meta property="og:image" content="/images/thumbnail.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
