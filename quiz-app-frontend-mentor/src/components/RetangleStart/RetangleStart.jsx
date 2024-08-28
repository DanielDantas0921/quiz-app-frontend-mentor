import styles from "./RetangleStart.module.css"

export default function RetangleStart({srcImg, text}){
    return (
        <div className={styles.divOption}>
            <img src={srcImg} />
            <h2>{text}</h2>
        </div>
    )
}