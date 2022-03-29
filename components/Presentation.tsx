import Image from 'next/image'
import Welcome1 from '../images/welcome-1.jpg'
import styles from '../styles/Presentation.module.css'

export default function Presentation() {
  return (
    <div className={styles.Presentation}>
      <div className={styles.ImageWrapper}>
        <Image alt="Welcome" className={styles.FirstImage} src={Welcome1} />
      </div>
      <h1 className={styles.Heading}>
        Hacemos más efectivas las relaciones entre nuestros clientes y sus
        asociados.
      </h1>
      <button className={styles.Button}>Contáctenos!</button>
    </div>
  )
}
