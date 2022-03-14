import styles from '../styles/Component.module.css'

export default function Component({ children }) {
  return <div className={styles.Component}>{children}</div>
}
