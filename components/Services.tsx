import Image from 'next/image'
import Maestria from '../images/maestria.jpg'
import Consultoria from '../images/consultoria.jpg'
import Voz from '../images/voz.jpg'
import Relaciones from '../images/relaciones.jpg'
import styles from '../styles/Services.module.css'

export default function Services() {
  return (
    <div className={styles.Services}>
      <h2>Nuestros Servicios</h2>
      <div className={styles.ServicesWrapper}>
        <div>
          <div className={styles.ImageWrapper}>
            <Image src={Maestria} />
          </div>
          <h3>Maestría de ceremonias</h3>
        </div>
        <div>
          <div className={styles.ImageWrapper}>
            <Image src={Consultoria} />
          </div>
          <h3>Consultoría en comunicación</h3>
        </div>
        <div>
          <div className={styles.ImageWrapper}>
            <Image src={Voz} />
          </div>
          <h3>Voz comercial</h3>
        </div>
        <div>
          <div className={styles.ImageWrapper}>
            <Image src={Relaciones} />
          </div>
          <h3>Relaciones públicas</h3>
        </div>
      </div>
    </div>
  )
}
