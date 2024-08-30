import styles from "./Question.module.css";

export default function Question({currentQuestion, textQuestion}){
    return(
        <div className={styles.divQuestion}>
            <h3 className={`fBodyS`}>Question {currentQuestion} of 10</h3>
            <h2 className={`fHeadingM`}>{textQuestion}</h2>
            <div className={`${styles.progressBar} bgPurple`}>

            </div>
        </div>
    )
}