import Button from "../../components/Button/Button";
import Option from "../../components/Option/Option";
import Question from "../../components/Question/Question";
import useQuizz from "../../hooks/useQuizz";

export default function AccessibilityQuestions() {
  const {
    currentQuestionNumber,
    textButton,
    boolQuestionStyle,
    answerQuestion,
    letterOption,
    questionStyleSrc,
    errorComponentLetterAndBorder,
    getQuestion,
    boolLetterAndBorderError
  } = useQuizz("Accessibility");

  return (
    <div className="mainQuestionAndOptionDiv">
      <Question currentQuestion={currentQuestionNumber + 1} textQuestion={getQuestion(currentQuestionNumber, "HTML").questionName} />
      <div className="optionAndButtonDiv">
        <Option
          letter="a"
          responseText={getQuestion(currentQuestionNumber).options[0]}
          letterOptionFun={() => letterOption(0)}
          srcImg={boolQuestionStyle ? questionStyleSrc(0) : null}
          idProp={boolLetterAndBorderError.current ? errorComponentLetterAndBorder(0)[0] : null}
          errorClass={boolLetterAndBorderError.current ? errorComponentLetterAndBorder(0)[0] : null}
        />
        <Option
          letter="b"
          responseText={getQuestion(currentQuestionNumber).options[1]}
          letterOptionFun={() => letterOption(1)}
          srcImg={boolQuestionStyle ? questionStyleSrc(1) : null}
          idProp={boolLetterAndBorderError.current ? errorComponentLetterAndBorder(1)[0] : null}
          errorClass={boolLetterAndBorderError.current ? errorComponentLetterAndBorder(1)[1] : null}
        />
        <Option
          letter="c"
          responseText={getQuestion(currentQuestionNumber).options[2]}
          letterOptionFun={() => letterOption(2)}
          srcImg={boolQuestionStyle ? questionStyleSrc(2) : null}
          idProp={boolLetterAndBorderError.current ? errorComponentLetterAndBorder(2)[0] : null}
          errorClass={boolLetterAndBorderError.current ? errorComponentLetterAndBorder(2)[1] : null}
        />
        <Option
          letter="d"
          responseText={getQuestion(currentQuestionNumber).options[3]}
          letterOptionFun={() => letterOption(3)}
          srcImg={boolQuestionStyle ? questionStyleSrc(3) : null}
          idProp={boolLetterAndBorderError.current ? errorComponentLetterAndBorder(3)[0] : null}
          errorClass={boolLetterAndBorderError.current ? errorComponentLetterAndBorder(3)[1] : null}
        />
        <Button text={textButton} answerQuestionFun={() => answerQuestion()} />
      </div>
    </div>
  );
}
