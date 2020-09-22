import Head from 'next/head'
import Header from '../components/Header'
import IndexBody from '../components/Index-Body'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Raleway:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <IndexBody />
      <Footer />
    </div>
  )
}
