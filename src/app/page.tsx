import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Navbar/Navbar'
import OurApproch from '@/components/OurApproch/OurApproch'
import State from '@/components/State/State'
import Testimonial from '@/components/Testimonial/Testimonial'
import About from '@/components/about/About'
import Services from '@/components/service/Services'



export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <OurApproch />
      <Services />
      <State />
      <Testimonial />
      <Footer />
    </main>
  )
}
