import styles from '../styles/Nav.module.css'
import navToggleActive from '../functions/navToggleActive'

export default function Nav() {
  return (
    <div id="nav" onClick={navToggleActive} className={styles.NavWrapper}>
      <nav className={styles.Nav}>
        <span>Inicio</span>
        <span>Servicios</span>
        <span>Clientes</span>
        <span>Nestor Estévez</span>
        <span>Publicaciones</span>
      </nav>
    </div>
  )
}
