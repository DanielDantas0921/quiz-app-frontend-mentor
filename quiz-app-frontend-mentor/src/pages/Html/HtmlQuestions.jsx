import { useState } from "react";
import Button from "../../components/Button/Button";
import Option from "../../components/Option/Option";
import Question from "../../components/Question/Question";
import data from "../../../data.json"

export default function HtmlQuestions(){
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1)

    function getQuestion(currentQuestionNumber){
        const dataJson = {data}.data
        const quizziesHtml = dataJson.quizzes.find((item)=> item.title = "HTML")
        const questionsHtml = quizziesHtml.questions
        const questionCurrent = questionsHtml[currentQuestionNumber]
        
        const questionName = questionCurrent.question
        const options = questionCurrent.options
        const answer = questionCurrent.answer

        return {questionName,options,answer}
    }

    return(
        <div className="mainQuestionAndOptionDiv">
            <Question currentQuestion={currentQuestionNumber}
             textQuestion={getQuestion(currentQuestionNumber).questionName}
            
            />
            <div className="optionAndButtonDiv">
               <Option letter="a" responseText={getQuestion(currentQuestionNumber).options[0]}/> 
               <Option letter="b" responseText={getQuestion(currentQuestionNumber).options[1]}/> 
               <Option letter="c" responseText={getQuestion(currentQuestionNumber).options[2]}/> 
               <Option letter="d" responseText={getQuestion(currentQuestionNumber).options[3]}/> 
               <Button text="Submit Answer"/>
            </div>
        </div>
    )
}