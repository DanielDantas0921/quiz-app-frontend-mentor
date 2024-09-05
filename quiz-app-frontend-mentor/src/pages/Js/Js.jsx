import TitleAndSwitcher from "../../components/TitleAndSwitcher/TitleAndSwitcher";
import htmlIcon from "../../assets/icon-html.svg"
import { useState } from "react";
import { Outlet } from "react-router-dom";
import RightQuestions from "../../context/RightQuestions";

export default function Js(){
    const [rightQuestions, setRightQuestions] = useState(0)
    return (
        <div className="containerQuestions">
        <TitleAndSwitcher iconTitle={htmlIcon} title="JavaScript" />
        <RightQuestions.Provider value={{rightQuestions,setRightQuestions}}>
        <Outlet />
        </RightQuestions.Provider>
        </div>
    )
}