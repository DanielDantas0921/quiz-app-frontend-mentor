import { useContext, useEffect, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import Option from "../../components/Option/Option";
import Question from "../../components/Question/Question";
import data from "../../../data.json";
import RightQuestions from "../../context/RightQuestions";
import iconSrcCorrect from "../../assets/icon-correct.svg";
import iconSrcError from "../../assets/icon-error.svg";
import { Link, useNavigate } from "react-router-dom";

export default function HtmlQuestions() {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [textButton, setTextButton] = useState("Submit Answer");
  const [answerOptionQuestion, setAnswerOptionQuestion] = useState(null);
  const boolQuestionConfirm = useRef(false);
  const objRightQUestion = useContext(RightQuestions);
  const [boolQuestionStyle, setBoolQuestionStyle] = useState(false);
  const [styleErrorBorder, setStyleErrorBorder] = useState(false)
  const idLetterBg = useRef(false)
  const boolLetterError = useRef(false)
  const navigate = useNavigate()


  function getQuestion(currentQuestionNumberGet) {
    const dataJson = { data }.data;
    const quizziesHtml = dataJson.quizzes.find((item) => (item.title = "HTML"));
    const questionsHtml = quizziesHtml.questions;
    const questionCurrent = questionsHtml[currentQuestionNumberGet];

    const questionName = questionCurrent.question;
    const options = questionCurrent.options;
    const answer = questionCurrent.answer;

    

    return { questionName, options, answer };
  }

  function answerQuestion() {

    

    if (boolQuestionConfirm.current == false) {
      if (answerOptionQuestion == null) {
        return;
      }
      setTextButton("Next Question");
      boolQuestionConfirm.current = !boolQuestionConfirm.current;
      boolLetterError.current = !boolLetterError.current
      setBoolQuestionStyle((currentState) => !currentState);

      if (getQuestion(currentQuestionNumber).options[answerOptionQuestion] == getQuestion(currentQuestionNumber).answer) {
        objRightQUestion.setRightQuestions((currentNumber) => currentNumber + 1);
      } else {
      }
    } else {
      setCurrentQuestionNumber((currentState) => (currentState = currentState + 1));
      if(currentQuestionNumber == 9){
        navigate("/HTML/Results")
      }
      setTextButton("Submit Answer");
      boolQuestionConfirm.current = !boolQuestionConfirm.current;
      boolLetterError.current = !boolLetterError.current
      setBoolQuestionStyle((currentState)=> !currentState)
      
    }
  }

  function letterOption(numberOfLetter) {
    setAnswerOptionQuestion(numberOfLetter);
  }

  function questionStyleSrc(answerOptionQuestionStyle) {
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

  function errorComponentLetter(NumberOfLetter){
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
  
  return (
    <div className="mainQuestionAndOptionDiv">
      <Question currentQuestion={currentQuestionNumber + 1} textQuestion={getQuestion(currentQuestionNumber).questionName} />
      <div className="optionAndButtonDiv">
        <Option
          letter="a"
          responseText={getQuestion(currentQuestionNumber).options[0]}
          letterOptionFun={() => letterOption(0)}
          srcImg={boolQuestionStyle ? questionStyleSrc(0) : null}
          idProp={boolLetterError.current ? errorComponentLetter(0)[0] : null}
          errorClass={boolLetterError.current ? errorComponentLetter(0)[0] : null }
        />
        <Option
          letter="b"
          responseText={getQuestion(currentQuestionNumber).options[1]}
          letterOptionFun={() => letterOption(1)}
          srcImg={boolQuestionStyle ? questionStyleSrc(1) : null}
          idProp={boolLetterError.current ? errorComponentLetter(1)[0] : null}
          errorClass={boolLetterError.current ? errorComponentLetter(1)[1] : null }
        />
        <Option
          letter="c"
          responseText={getQuestion(currentQuestionNumber).options[2]}
          letterOptionFun={() => letterOption(2)}
          srcImg={boolQuestionStyle ? questionStyleSrc(2) : null}
          idProp={boolLetterError.current ? errorComponentLetter(2)[0] : null}
          errorClass={boolLetterError.current ? errorComponentLetter(2)[1] : null }
        />
        <Option
          letter="d"
          responseText={getQuestion(currentQuestionNumber).options[3]}
          letterOptionFun={() => letterOption(3)}
          srcImg={boolQuestionStyle ? questionStyleSrc(3) : null}
          idProp={boolLetterError.current ? errorComponentLetter(3)[0] : null}
          errorClass={boolLetterError.current ? errorComponentLetter(3)[1] : null }
        />
        <Button text={textButton} answerQuestionFun={() => answerQuestion()} />
      </div>
    </div>
  );
}
