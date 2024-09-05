import { useState } from "react"
import RightQuestions from "../../context/RightQuestions"
import TitleAndSwitcher from "../../components/TitleAndSwitcher/TitleAndSwitcher"
import cssIcon from "../../assets/icon-css.svg"
import { Outlet } from "react-router-dom"


export default function Css(){
    const [rightQuestions, setRightQuestions] = useState(0)
    return (
        <div className="containerQuestions">
        <TitleAndSwitcher iconTitle={cssIcon} title="Css" />
        <RightQuestions.Provider value={{rightQuestions,setRightQuestions}}>
        <Outlet />
        </RightQuestions.Provider>
        </div>
    )
}