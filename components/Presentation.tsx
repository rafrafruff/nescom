import { useEffect } from 'react'
import Image from 'next/image'
import Welcome1 from '../images/welcome-1.jpg'
import Welcome2 from '../images/welcome-2.jpg'
import Welcome3 from '../images/welcome-3.jpg'
import imageSlider from '../functions/imageSlider'
import styles from '../styles/Presentation.module.css'

export default function Presentation() {
  useEffect(() => {
    setInterval(imageSlider, 2500)
  }, [])
  return (
    <div className={styles.Presentation} id="Inicio">
      <div className={styles.ImageWrapper}>
        <div className={styles.FirstImage} id="firstImg">
          <Image alt="Welcome" src={Welcome1} />
        </div>
        <div className={styles.SecondImage} id="secondImg">
          <Image alt="Welcome" src={Welcome2} />
        </div>
        <div className={styles.ThirdImage} id="thirdImg">
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
