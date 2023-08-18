import Head from 'next/head';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Sefa Karademir - Full Stack Web Developer</title>
        <meta name="description" content="I am Sefa, 24 years old Full Stack Web Developer. I'm a passionate and enthusiastic software enthusiast with a strong desire to learn about new technologies." />
        <meta name="author" content="Sefa Karademir" />
        <meta name="publisher" content="Sefa 2023" />
        <meta property="og:image" content="/sefa-karademir.png" key="image" />
        <meta property="og:title" content="Sefa Karademir - Full Stack Web Developer" key="title" />
        <meta property="og:description" content="I am Sefa, 24 years old Full Stack Web Developer. I'm a passionate and enthusiastic software enthusiast with a strong desire to learn about new technologies." key="description" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
