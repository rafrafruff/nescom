import Header from '../components/Header'
import Component from '../components/Component'
import ComponentTwo from '../components/ComponentTwo'
import Presentation from '../components/Presentation'
import AboutUs from '../components/AboutUs'
import Clients from '../components/Clients'

export default function Home() {
  return (
    <div>
      <Header />
      <Component>
        <Presentation />
        <AboutUs />
      </Component>
      <ComponentTwo>
        <Clients />
      </ComponentTwo>
    </div>
  )
}
