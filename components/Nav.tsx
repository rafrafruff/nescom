import styles from '../styles/Nav.module.css'
import navToggleActive from '../functions/navToggleActive'

export default function Nav() {
  return (
    <div id="nav" onClick={navToggleActive} className={styles.NavWrapper}>
      <nav className={styles.Nav}>
        <a href="#Inicio">Inicio</a>
        <a href="#Servicios">Servicios</a>
        <a href="#Clientes">Clientes</a>
        <a href="#Blog">Néstor Estévez</a>
        <a href="#Publicaciones">Publicaciones</a>
      </nav>
    </div>
  )
}
