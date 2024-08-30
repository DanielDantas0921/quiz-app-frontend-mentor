import { useContext, useEffect, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import Option from "../../components/Option/Option";
import Question from "../../components/Question/Question";
import data from "../../../data.json";
import RightQuestions from "../../context/RightQuestions";
import srcImg from "../../assets/icon-correct.svg"

export default function HtmlQuestions() {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [textButton, setTextButton] = useState("Submit Answer");
  const [answerOptionQuestion, setAnswerOptionQuestion] = useState(null);
  const boolQuestionConfirm = useRef(false);
  const objRightQUestion = useContext(RightQuestions)
  // const boolQuestionStyle = useRef(false)
  // const [boolQuestionStyle, setBoolQUestionStyle] = useState(false)
  const [srcIconImg, setSrcIconImg] = useState(null)
  

  const iconSrcCorrect = "../../assets/icon-correct.svg"
  const iconSrcError  = "../../assets/icon-error.svg"

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
    console.log("estou caindo antes do if")
    if (boolQuestionConfirm.current == false) {
      if (answerOptionQuestion == null) {
        console.log("estou caindo aqui");
        return;
      }
      setTextButton("Next Question");
      boolQuestionConfirm.current = !boolQuestionConfirm.current;
      // boolQuestionStyle.current = !boolQuestionStyle
      // setBoolQUestionStyle((currentState)=> !currentState )
      setSrcIconImg((currentIcon)=> currentIcon = questionStyleSrc())
      
      if (getQuestion(currentQuestionNumber).options[answerOptionQuestion] == getQuestion(currentQuestionNumber).answer) {
        objRightQUestion.setRightQuestions((currentNumber)=> currentNumber + 1)
        boolQuestionCorrectStyle.current = !boolQuestionCorrectStyle.current
      } else{
        console.log("questão errada")
      }
    } else {
      console.log(" o bol mudou de valor para true");
      setCurrentQuestionNumber((currentState) => (currentState = currentState + 1));
      setTextButton("Submit Answer")
      boolQuestionConfirm.current = !boolQuestionConfirm.current
    }
  }

  function letterOption(numberOfLetter) {
    setAnswerOptionQuestion(numberOfLetter);
  }

  function questionStyleSrc(){
    if((getQuestion(currentQuestionNumber).options[answerOptionQuestion] == getQuestion(currentQuestionNumber).answer)){
      return iconSrcCorrect
    } else{
      return iconSrcError
    }
  }
  

  return (
    <div className="mainQuestionAndOptionDiv">
      <Question currentQuestion={currentQuestionNumber} textQuestion={getQuestion(currentQuestionNumber).questionName} />
      <div className="optionAndButtonDiv">
        <Option letter="a" responseText={getQuestion(currentQuestionNumber).options[0]} letterOptionFun={() => letterOption(0)} srcImg={srcIconImg}  />
        <Option letter="b" responseText={getQuestion(currentQuestionNumber).options[1]} letterOptionFun={() => letterOption(1)} srcImg={srcIconImg} />
        <Option letter="c" responseText={getQuestion(currentQuestionNumber).options[2]} letterOptionFun={() => letterOption(2)} srcImg={srcIconImg}  />
        <Option letter="d" responseText={getQuestion(currentQuestionNumber).options[3]} letterOptionFun={() => letterOption(3)} srcImg={srcIconImg}  />
        <Button text={textButton} answerQuestionFun={() => answerQuestion()} />
      </div>
      <p>"Answer Option Question é: {answerOptionQuestion}"</p>
    </div>
  );
}
