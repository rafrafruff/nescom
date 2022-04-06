import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '@mdi/react'
import { mdiMenu } from '@mdi/js'
import Logo from '../images/nescom-logo.png'
import Nav from './Nav'
import navToggleActive from '../functions/navToggleActive'
import NavDesktop from './NavDesktop'

export default function Header() {
  return (
    <header id="header" className={styles.Header}>
      <div className={styles.HeaderElem}>
        <div className={styles.LogoWrapper}>
          <Link href="/" passHref>
            <Image src={Logo} width={50} height={50} alt="logo" />
          </Link>
        </div>
        <div onClick={navToggleActive} className={styles.HamMenuWrapper}>
          <Icon className={styles.Open} path={mdiMenu} size={2} />
        </div>
        <NavDesktop />
      </div>
      <Nav />
    </header>
  )
}
