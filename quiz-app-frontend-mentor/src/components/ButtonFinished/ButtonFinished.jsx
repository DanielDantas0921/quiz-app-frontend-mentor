import styles from "./ButtonFinished.module.css"

export default function ButtonFinished ({textButton}){
    return <button className={ `${styles.btn} bgPurple ${styles.fHeadingS}`}>{textButton}</button>
}