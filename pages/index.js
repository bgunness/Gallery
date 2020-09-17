import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import IndexBody from '../components/Index-Body'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='container'>
      <Header />
      <IndexBody />
      <Footer />
    </div>
  )
}
