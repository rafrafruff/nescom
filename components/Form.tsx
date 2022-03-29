import styles from '../styles/Form.module.css'

export default function Form() {
  return (
    <form className={styles.Form} action="">
      <input
        placeholder="Tu correo"
        type="text"
        className={styles.FormEmailInput}
      />
      <textarea
        placeholder="Tu mensaje"
        name=""
        id=""
        className={styles.FormTextarea}
      ></textarea>
      <button type="submit" className={styles.FormBtn}>
        Enviar
      </button>
    </form>
  )
}
