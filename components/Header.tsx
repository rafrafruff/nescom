import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../images/nescom-logo.png'

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderElem}>
        <div className={styles.LogoWrapper}>
          <Image src={Logo} width={50} height={50} alt="logo" />
        </div>
        <div className={styles.HamMenuWrapper}>
          <div className={styles.HamMenu}></div>
        </div>
      </div>
    </header>
  )
}
