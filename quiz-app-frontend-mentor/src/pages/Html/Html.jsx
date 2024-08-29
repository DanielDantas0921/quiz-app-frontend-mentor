import TitleAndSwitcher from "../../components/TitleAndSwitcher/TitleAndSwitcher";
import htmlIcon from "../../assets/icon-html.svg"
import { useState } from "react";
import { Outlet } from "react-router-dom";
import RightQuestions from "../../context/RightQuestions";

export default function Html(){
    const [rightQuestions, setRightQuestions] = useState(0)
    return (
        <div className="container">

        
        <TitleAndSwitcher iconTitle={htmlIcon} title="Html" />
        <RightQuestions.Provider value={{rightQuestions,setRightQuestions}}>
        <Outlet />
        </RightQuestions.Provider>
        </div>
    )
}