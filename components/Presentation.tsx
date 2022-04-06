import Image from 'next/image'
import Welcome1 from '../images/welcome-1.jpg'
import Welcome2 from '../images/welcome-2.jpg'
import Welcome3 from '../images/welcome-3.jpg'
import styles from '../styles/Presentation.module.css'

export default function Presentation() {
  return (
    <div className={styles.Presentation}>
      <div className={styles.ImageWrapper}>
        <div className={styles.SecondImage}>
          <Image alt="Welcome" src={Welcome2} />
        </div>
        <div className={styles.FirstImage}>
          <Image alt="Welcome" src={Welcome1} />
        </div>
        <div className={styles.ThirdImage}>
          <Image alt="Welcome" src={Welcome3} />
        </div>
      </div>
      <div className={styles.TextWrapper}>
        <h1 className={styles.Heading}>
          Hacemos más efectivas las relaciones entre nuestros clientes y sus
          asociados.
        </h1>
        <button className={styles.Button}>Contáctenos!</button>
      </div>
    </div>
  )
}
