import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from "./Home/Hero/page"
import Section1 from './Home/Section1/page'

export default function Home() {
  return (
    <main> 
      <Hero/>
      <Section1/> 
    </main>
  )
}
