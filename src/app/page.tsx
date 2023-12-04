import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Navbar/Navbar'
import About from '@/components/about/About'
import Services from '@/components/service/Services'



export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Footer />
    </main>
  )
}
