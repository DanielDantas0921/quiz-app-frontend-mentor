import styles from "./Button.module.css"


export default function Button ({text, answerQuestionFun}){
    return (
        <button className={`bgPurple pureWhite fHeadingSminus ${styles.btn}`} onClick={answerQuestionFun}>{text}</button>
    )
}