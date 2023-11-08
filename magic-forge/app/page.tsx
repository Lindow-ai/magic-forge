import NavBarLanding from './components/NavBarLanding'
import FirstSection from './components/FirstSection'
import Carousel from '@/components/Carousel'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'
import FourthSection from './components/FourthSection'
import Pricing from './components/Pricing'
import FifthSection from './components/FifthSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <NavBarLanding />
      <FirstSection />
      <div className='flex items-center justify-center'>
        <Carousel />
      </div>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Pricing />
      <FifthSection />
      <Footer />
    </div>
  )
}
