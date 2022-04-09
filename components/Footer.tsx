import Image from 'next/image'
import Logo from '../images/nescom-logo.png'
import Facebook from '../images/facebook.png'
import Instagram from '../images/instagram.png'
import Twitter from '../images/twitter.png'
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
                <Image src={Facebook} alt="Facebook" />
              </a>
            </div>
            <div className={styles.SocialMediaIconWrapper}>
              <a
                href="https://www.instagram.com/nescomrd/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={Instagram} alt="Instagram" />
              </a>
            </div>
            <div className={styles.SocialMediaIconWrapper}>
              <a
                href="https://twitter.com/nescomRD"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={Twitter} alt="Twitter" />
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
