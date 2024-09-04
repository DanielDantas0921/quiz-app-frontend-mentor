import { Link } from "react-router-dom"
import styles from "./ButtonFinished.module.css"

export default function ButtonFinished ({textButton}){
    return <Link to="/"><button className={ `${styles.btn} bgPurple ${styles.fHeadingS}`}>{textButton}</button></Link>
}