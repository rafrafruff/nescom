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
          <span>Inicio</span>
          <span>Servicios</span>
          <span>Clientes</span>
          <span>Nestor Estévez</span>
          <span>Publicaciones</span>
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
              <Image src={Facebook} alt="Facebook" />
            </div>
            <div className={styles.SocialMediaIconWrapper}>
              <Image src={Instagram} alt="Instagram" />
            </div>
            <div className={styles.SocialMediaIconWrapper}>
              <Image src={Twitter} alt="Twitter" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.PostFooter}>
        Nescom, R. D.&#8482; {currentYear}
      </div>
    </footer>
  )
}
