import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="Main">
      <Head>
        <title>NextJS, TypeScript and Tailwind CSS template</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="NextJS app" />
        <meta name="keywords" content="NextJS, TypeScript, Tailwind" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
