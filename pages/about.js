import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About-Body'
import Footer from '../components/Footer'

export default function AboutBody() {
  return (
    <div className='container'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Raleway:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <About />
      <Footer />
    </div>
  )
}
