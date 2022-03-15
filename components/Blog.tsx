import Image from 'next/image'
import Link from 'next/link'
import Nestor from '../images/nestor.jpg'
import Icon from '@mdi/react'
import { mdiArrowRight } from '@mdi/js'
import styles from '../styles/Blog.module.css'

export default function Blog() {
  return (
    <div className={styles.Blog}>
      <div className={styles.ImageWrapper}>
        <Image src={Nestor} alt="Néstor Estévez" />
      </div>
      <h3>El Blog de Néstor</h3>
      <p>
        ¡Hola! Soy Néstor Estévez. ¡Te invito a compartir! Recuerda que, de
        manera creciente, la comunicación se reafirma como soporte para lograr
        éxito en cualquier tarea o proyecto que emprendamos.
      </p>
      <div className={styles.Publicaciones}>
        <div>
          <h4>Publicaciones destacadas</h4>
          <span>
            Tres pasos para lograr objetivos
            <Icon path={mdiArrowRight} size={1} />
          </span>
          <span>
            SOS para Santiago Rodríguez
            <Icon path={mdiArrowRight} size={1} />
          </span>
          <span>
            ¿Estás cambiando de verdad?
            <Icon path={mdiArrowRight} size={1} />
          </span>
        </div>
        <div>
          <h4>Publicaciones corporativas</h4>
          <span>
            Tres pasos para lograr objetivos
            <Icon path={mdiArrowRight} size={1} />
          </span>
          <span>
            SOS para Santiago Rodríguez
            <Icon path={mdiArrowRight} size={1} />
          </span>
          <span>
            ¿Estás cambiando de verdad?
            <Icon path={mdiArrowRight} size={1} />
          </span>
        </div>
      </div>
    </div>
  )
}
