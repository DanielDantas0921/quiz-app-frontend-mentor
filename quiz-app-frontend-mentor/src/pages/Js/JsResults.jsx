import { useContext } from "react"
import RightQuestions from "../../context/RightQuestions"
import TitleFinished from "../../components/TitleFinished/TitleFinished"
import CardFinished from "../../components/CardFinished/CardFinished"
import iconImg from "../../assets/icon-html.svg"
import ButtonFinished from "../../components/ButtonFinished/ButtonFinished"


export default function JsResults(){
    const objRightQuestions = useContext(RightQuestions)
    return (
        <div className="containerMainFinished" style={{display: "flex", justifyContent: "space-between"}}>
            <TitleFinished/>
            <div>
               <CardFinished srcImg={iconImg} title="JavaScript" correctAnwers={objRightQuestions.rightQuestions} />
                <ButtonFinished textButton="Play Again" />
            </div>
        </div>
    )
}