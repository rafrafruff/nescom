import styles from '../styles/Nav.module.css'

export default function NavDesktop() {
  return (
    <nav className={styles.NavDesktop}>
      <span>Inicio</span>
      <span>Servicios</span>
      <span>Clientes</span>
      <span>Nestor Estévez</span>
      <span>Publicaciones</span>
    </nav>
  )
}
