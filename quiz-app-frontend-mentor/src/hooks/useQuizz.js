import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import RightQuestions from "../context/RightQuestions";
import data from "../../data.json"
import iconSrcCorrect from "../assets/icon-correct.svg";
import iconSrcError from "../assets/icon-error.svg";

export default function useQuizz(selectedQuiz){




    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [textButton, setTextButton] = useState("Submit Answer");
    const [answerOptionQuestion, setAnswerOptionQuestion] = useState(null);
    const boolQuestionConfirm = useRef(false);
    const objRightQUestion = useContext(RightQuestions)
    const [boolQuestionStyle, setBoolQuestionStyle] = useState(false);
    const boolLetterAndBorderError = useRef(false)
    const navigate = useNavigate()
  

    const getQuestion = (currentQuestionNumberGet)=>{
        const dataJson = { data }.data;
        const quizziesHtml = dataJson.quizzes.find((item) => (item.title == selectedQuiz));
        const questionsHtml = quizziesHtml.questions;
        const questionCurrent = questionsHtml[currentQuestionNumberGet];
    
        const questionName = questionCurrent.question;
        const options = questionCurrent.options;
        const answer = questionCurrent.answer;
    
        return { questionName, options, answer };
    }

  
    const answerQuestion = () => {
        if (boolQuestionConfirm.current == false) {
            if (answerOptionQuestion == null) {
              return;
            }
            setTextButton("Next Question");
            boolQuestionConfirm.current = !boolQuestionConfirm.current;
            boolLetterAndBorderError.current = !boolLetterAndBorderError.current
            setBoolQuestionStyle((currentState) => !currentState);
      
            if (getQuestion(currentQuestionNumber).options[answerOptionQuestion] == getQuestion(currentQuestionNumber).answer) {
              objRightQUestion.setRightQuestions((currentNumber) => currentNumber + 1);
            } else {
            }
          } else {
            setCurrentQuestionNumber((currentState) => (currentState = currentState + 1));
            setAnswerOptionQuestion((currentState)=> currentState = null)
            if(currentQuestionNumber == 9){
              navigate("/" + selectedQuiz + "/Results")
            }
            setTextButton("Submit Answer");
            boolQuestionConfirm.current = !boolQuestionConfirm.current;
            boolLetterAndBorderError.current = !boolLetterAndBorderError.current
            setBoolQuestionStyle((currentState)=> !currentState)
            
          }
    }

    const letterOption = (numberOfLetter) => {
        setAnswerOptionQuestion(numberOfLetter);
    }
  
    const questionStyleSrc = (answerOptionQuestionStyle) =>{
        if (answerOptionQuestionStyle == answerOptionQuestion ) {
       
            if (getQuestion(currentQuestionNumber).options[answerOptionQuestion] == getQuestion(currentQuestionNumber).answer) {
              return iconSrcCorrect;
            } else {
              
              return iconSrcError;
            }
      
          } else{
            if(getQuestion(currentQuestionNumber).answer == getQuestion(currentQuestionNumber).options[answerOptionQuestionStyle]){
              return iconSrcCorrect;
            }
          }
    }
  
    
    const errorComponentLetterAndBorder = (NumberOfLetter) => {
        if (NumberOfLetter == answerOptionQuestion ){
  
            if (getQuestion(currentQuestionNumber).options[answerOptionQuestion] != getQuestion(currentQuestionNumber).answer) {
             
             return["errorLetterBg", "error"]
            } else {
              return ["null", "null"]
            }
      
          }else{
            return ["null", "null"]
          }
        }
    
        return {boolLetterAndBorderError,getQuestion,currentQuestionNumber,textButton,boolQuestionStyle,answerQuestion,letterOption,questionStyleSrc,errorComponentLetterAndBorder}

    }
  
   
      
