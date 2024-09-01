import { useContext } from "react"
import RightQuestions from "../../context/RightQuestions"


export default function HtmlResults(){
    const objRightQuestions = useContext(RightQuestions)
    return <h1>Ola sou o resultado e acertei: {objRightQuestions.rightQuestions}</h1>
}