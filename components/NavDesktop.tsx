import styles from '../styles/Nav.module.css'

export default function NavDesktop() {
  return (
    <nav className={styles.NavDesktop}>
      <a href="#Inicio">Inicio</a>
      <a href="#Servicios">Servicios</a>
      <a href="#Clientes">Clientes</a>
      <a href="#Blog">Néstor Estévez</a>
      <a href="#Publicaciones">Publicaciones</a>
    </nav>
  )
}
