import Header from '../components/Header'
import Component from '../components/Component'
import Presentation from '../components/Presentation'
import AboutUs from '../components/AboutUs'

export default function Home() {
  return (
    <div>
      <Header />
      <Component>
        <Presentation />
        <AboutUs />
      </Component>
    </div>
  )
}
