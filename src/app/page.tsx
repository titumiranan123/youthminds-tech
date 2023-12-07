"use client"
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Navbar/Navbar'
import OurApproch from '@/components/OurApproch/OurApproch'
import State from '@/components/State/State'
import Teammembers from '@/components/Teammembers/Teammembers'
import Testimonial from '@/components/Testimonial/Testimonial'
import About from '@/components/about/About'
import Services from '@/components/service/Services'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'



export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
    AOS.refresh();
  })

  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <OurApproch />
      <Services />
      <State />
      <Teammembers />
      <Testimonial />
      <Footer />
    </main>
  )
}
