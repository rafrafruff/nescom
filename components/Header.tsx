import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from '@material-ui/core'
import Logo from '../images/nescom-logo.png'

export default function Header() {
  const IsTabletOrPhone = useMediaQuery('(max-width:1024px)')

  return (
    <header className={styles.Header}>
      <div className={styles.HeaderElem}>
        <div className={styles.LogoWrapper}>
          <Link href="/" passHref>
            <Image src={Logo} width={50} height={50} alt="logo" />
          </Link>
        </div>
        <div className={styles.HamMenuWrapper}>
          <div className={styles.HamMenu}></div>
        </div>
      </div>
    </header>
  )
}
