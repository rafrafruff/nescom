import styles from '../styles/Mission.module.css'

export default function Mission() {
  return (
    <div className={styles.MissionModal}>
      <div className={styles.MissionPrimarySection}>
        <h2>¿Quiénes somos?</h2>
        <p>
          Nos dedicamos a hacer más efectivas las relaciones entre nuestros
          clientes y sus asociados, agregando valor a sus procesos
          comunicacionales.
        </p>
      </div>
      <div className={styles.MissionSecondarySection}>
        <h3>Misión</h3>
        <p>
          Somos una empresa dedicada a hacer más efectivas las relaciones entre
          nuestros clientes y sus asociados, agregando valor a sus procesos
          comunicacionales.
        </p>
      </div>
      <div className={styles.MissionSecondarySection}>
        <h3>Valores</h3>
        <p>
          Servicio, eficiencia, calidad, proacción y entusiasmo inspiran a cada
          colaborador de nuestro equipo de profesionales y asociados.
        </p>
      </div>
      <div className={styles.MissionSecondarySection}>
        <h3>Visión</h3>
        <p>
          Ser una empresa referida por nuestros clientes como fuente de
          satisfacción y en crecimiento sostenido de cara a seguir agregando
          valor a la comunicación.
        </p>
      </div>
    </div>
  )
}
