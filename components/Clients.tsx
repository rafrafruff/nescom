import Image from 'next/image'
import Alexandre from '../images/alexandre.jpeg'
import Marisol from '../images/marisol.png'
import Popular from '../images/popular.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Clients.module.css'

export default function Clients() {
  return (
    <div className={styles.Clients} id="Clientes">
      <h2>Nuestros Clientes</h2>
      <div className={styles.TestimonialsWrapper}>
        <div className={styles.Testimonial}>
          <div className={styles.QuoteIcon}>
            <FontAwesomeIcon
              style={{ fontSize: '32px' }}
              icon={faQuoteLeft}
            ></FontAwesomeIcon>
          </div>
          <p className={styles.TestimonialQuote}>
            Como Vicepresidente de países del grupo BID me es grato saludarte y
            agradecerte tu impecable participación como maestro de ceremonias
            panelista en la XVI Reunión Anual Grupo BID-sociedad civil que se
            llevó a cabo los días 8 y 9 de noviembre de 2016 en S. D., R. D.
          </p>
          <div className={styles.TestimonialAuthor}>
            <div className={styles.TestimonialImageWrapper}>
              <Image src={Alexandre} alt="Alexandre" />
            </div>
            <div className={styles.TestimonialAuthorInfo}>
              <span className={styles.TestimonialAuthorName}>
                Alexandre Meira da Rosa
              </span>
              <span className={styles.TestimonialAuthorTitle}>
                Vice Presidente de Países, Grupo BID
              </span>
            </div>
          </div>
        </div>
        <div className={styles.Testimonial}>
          <div className={styles.QuoteIcon}>
            <FontAwesomeIcon
              style={{ fontSize: '32px' }}
              icon={faQuoteLeft}
            ></FontAwesomeIcon>
          </div>
          <p className={styles.TestimonialQuote}>
            Por primera vez contratamos sus servicios y a la verdad quedamos
            maravillados con su profesionalismo, son su expertise y cómo se
            involucró, orientó y aportó para que el evento quedara en su máximo
            esplendor.
          </p>
          <div className={styles.TestimonialAuthor}>
            <div className={styles.TestimonialImageWrapper}>
              <Image src={Marisol} alt="Marisol" />
            </div>
            <div className={styles.TestimonialAuthorInfo}>
              <span className={styles.TestimonialAuthorName}>
                Marisol Marte
              </span>
              <span className={styles.TestimonialAuthorTitle}>
                Asistente Dirección Ejecutiva Participación Ciudadana
              </span>
            </div>
          </div>
        </div>
        <div className={styles.Testimonial}>
          <div className={styles.QuoteIcon}>
            <FontAwesomeIcon
              style={{ fontSize: '32px' }}
              icon={faQuoteLeft}
            ></FontAwesomeIcon>
          </div>
          <p className={styles.TestimonialQuote}>
            Compartir con ustedes esta formación siempre es gratificante y de
            aprendizaje, por lo que la Fundación Popular se siente altamente
            complacida con la jornada de capacitación realizada el pasado
            jueves; también, agradecemos la respuesta que siempre recibimos de
            su parte, ante nuestro llamado.
          </p>
          <div className={styles.TestimonialAuthor}>
            <div className={styles.TestimonialImageWrapper}>
              <Image src={Popular} alt="Popular" />
            </div>
            <div className={styles.TestimonialAuthorInfo}>
              <span className={styles.TestimonialAuthorName}>
                Equipo Fundación Popular
              </span>
              <span className={styles.TestimonialAuthorTitle}>
                Fundación Popular Inc.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
