import Image from 'next/image'
import Maestria from '../images/maestria.jpg'
import Consultoria from '../images/consultoria.jpg'
import Voz from '../images/voz.jpg'
import Relaciones from '../images/relaciones.jpg'
import styles from '../styles/Services.module.css'

export default function Services() {
  return (
    <div className={styles.Services} id="Servicios">
      <h2>Nuestros Servicios</h2>
      <div className={styles.ServicesWrapper}>
        <div>
          <div className={styles.ImageWrapper}>
            <Image src={Maestria} alt="Microphone" />
          </div>
          <h3>Maestría de ceremonias</h3>
          <p>
            Cuando organizas una actividad, el papel de quien conduce se vuelve
            determinante para el éxito o el fracaso de la misma.
          </p>
        </div>
        <div>
          <div className={styles.ImageWrapper}>
            <Image src={Consultoria} alt="Explanation" />
          </div>
          <h3>Consultoría en comunicación</h3>
          <p>
            Siempre necesitaremos comunicarnos. ¿Cómo te comunicas? ¿Lo quieres
            mejorar? Nosotros podemos ayudarte.
          </p>
        </div>
        <div>
          <div className={styles.ImageWrapper}>
            <Image src={Voz} alt="Laptop" />
          </div>
          <h3>Voz comercial</h3>
          <p>
            Cada mensaje ha iniciado como idea que pasa por diversos procesos.
            Nosotros disponemos de la capacidad para hacer más impactante tu
            mensaje.
          </p>
        </div>
        <div>
          <div className={styles.ImageWrapper}>
            <Image src={Relaciones} alt="Handshake" />
          </div>
          <h3>Relaciones públicas</h3>
          <p>
            En un mundo tan cambiante, el esfuerzo planeado para influenciar la
            opinión es determinante para iniciar, mantener o mejorar fructíferas
            relaciones.
          </p>
        </div>
      </div>
    </div>
  )
}
