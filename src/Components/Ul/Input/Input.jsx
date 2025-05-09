import styles from './Input.module.scss'

export default function Input() {
  return (
    <div className={styles.inputDiv}>
      <input type="text" className={styles.input} />
      <img src="./Assets/Img/Group.png" alt="" className={styles.inputButton}   />
    </div>
  )
}
