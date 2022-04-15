import Header from '../components/Header'
import Component from '../components/Component'
import GrayBackground from '../components/GrayBackground'
import Presentation from '../components/Presentation'
import Mission from '../components/Mission'
import Services from '../components/Services'
import Clients from '../components/Clients'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Component>
        <Presentation />
        <Mission />
        <Services />
      </Component>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#9e98aa"
          fillOpacity="1"
          d="M0,192L1440,64L1440,320L0,320Z"
        ></path>
      </svg>
      <GrayBackground>
        <Component>
          <Clients />
          <Blog />
        </Component>
      </GrayBackground>
      <Footer />
    </div>
  )
}
