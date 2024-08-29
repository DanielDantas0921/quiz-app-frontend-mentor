import styles from "./Option.module.css";

export default function Option({letter, responseText }){
    return(
        <div className={styles.divOption}>
            <h3 className={`fHeadingS greyNavy ${styles.letterBg}`} >
                {letter}
            </h3>
            <h3 className="fHeadingS">{responseText}</h3>
        </div>
    )
}