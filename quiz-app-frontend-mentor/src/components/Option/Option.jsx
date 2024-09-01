import styles from "./Option.module.css";

export default function Option({letter, responseText ,letterOptionFun, srcImg , idProp, errorClass}){
    return(
        <div className={`${styles.divOption} ${errorClass}`} onClick={letterOptionFun}>
            <h3 id={idProp} className={`fHeadingS greyNavy ${styles.letterBg}`} >
                {letter}
            </h3>
            <h3 className={`fHeadingS ${styles.textQuestion}`}>{responseText}</h3>
            <img src={srcImg} alt="" />
        </div>
    )
}