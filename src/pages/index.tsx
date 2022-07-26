import Head from "next/head";
import { Footer } from "../components/footer";
import { Header } from '../components/header'
import { HomePage } from "../components/main";
import { useEffect } from "react";
import  Aos  from 'aos'
import 'aos/dist/aos.css'

export default function Home() {

  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])

  return (
    <>
    <Head>
      <title>Nelis Santiago - Inicio</title>
    </Head>

      <Header />
      <HomePage />
      <Footer />
      
    </>
  )
}
