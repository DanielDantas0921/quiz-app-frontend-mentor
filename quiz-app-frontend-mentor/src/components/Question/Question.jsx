import styles from "./Question.module.css";

export default function Question({currentQuestion, textQuestion}){
    return(
        <div>
            <h3>{currentQuestion} of 10</h3>
            <h2>{textQuestion}</h2>
            <div className={`${styles.progressBar} bgPurple`}>

            </div>
        </div>
    )
}