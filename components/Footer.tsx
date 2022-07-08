import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import Logo from '../images/nescom-logo.png'
import Form from './Form'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.Footer}>
      <div className={styles.PreFooter}>
        <div className={styles.FooterForm}>
          <Form />
        </div>
        <div className={styles.FooterNav}>
          <a href="#Inicio">Inicio</a>
          <a href="#Servicios">Servicios</a>
          <a href="#Clientes">Clientes</a>
          <a href="#Blog">Néstor Estévez</a>
          <a href="#Publicaciones">Publicaciones</a>
        </div>
        <div className={styles.FooterInfo}>
          <div className={styles.ImageWrapper}>
            <Image src={Logo} alt="Logo" />
          </div>
          <span>829-132-4264</span>
          <span>829-132-4264</span>
          <span>contacto@nescomrd.com</span>
          <div className={styles.SocialMedia}>
            <div className={styles.SocialMediaIconWrapper}>
              <a
                href="https://www.facebook.com/nescom.srl"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className={styles.IconFacebook}
                  icon={faFacebookF}
                />
              </a>
            </div>
            <div className={styles.SocialMediaIconWrapper}>
              <a
                href="https://www.instagram.com/nescomrd/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className={styles.IconInstagram}
                  icon={faInstagram}
                />
              </a>
            </div>
            <div className={styles.SocialMediaIconWrapper}>
              <a
                href="https://twitter.com/nescomRD"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className={styles.IconTwitter}
                  icon={faTwitter}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.PostFooter}>
        <span>Nescom, R. D.&#8482; {currentYear}</span>
      </div>
    </footer>
  )
}
