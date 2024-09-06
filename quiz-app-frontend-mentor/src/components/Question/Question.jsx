import {  useRef } from "react";
import styles from "./Question.module.css";

export default function Question({currentQuestion, textQuestion}){
    const progressPercentage = ( currentQuestion / 10 ) * 100
    return(
        <div className={styles.divQuestion}>
            <h3 className={`fBodyS`}>Question {currentQuestion} of 10</h3>
            <h2 className={`fHeadingM`}>{textQuestion}</h2>
            <div style={{width: "100%"}} className={`${styles.progressBar}`}>
                <div style={{width: `${progressPercentage}%`}} className={`${styles.progressBar} bgPurple`}>

                </div>
            </div>
        </div>
    )
}